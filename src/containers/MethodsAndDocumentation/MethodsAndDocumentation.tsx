import React, { useEffect, useState } from 'react';
import { useQueryParam } from 'use-query-params';
import Head from '../../components/Head';
import Layout from '../../components/layout/Layout';
import { Title } from '../../components/typography';
import { SelectOption } from '../../store/types';
import DownloadDocument from './components/DownloadDocument';
import Indicator from './components/Indicator';
import INDICATORS from './components/Indicator/data/indicators';

import * as S from './MethodsAndDocumentation.css';
import { SolrDataProps } from './components/SolrData/SolrData';


export const indicatorGroup: SelectOption[] = [
  {
    label: 'Atenção Primária',
    alternativeLabel: 'atencao_primaria',
    value: '1',
    data: {
      varIndicators: [
        'cob_ab',
        'cob_vac_rota',
        'cob_vac_menin',
        'cob_vac_penta',
        'cob_vac_pneumo',
        'cob_vac_polio',
        'cob_vac_hepa',
        'cob_vac_tvd1',
        'cob_esf',
        'cob_acs',
        'pct_prenatal_adeq',
        'pct_prenatal_zero',
        'pct_prenatal_1a6',
        'pct_prenatal_7m',
        'cob_vac_bcg',
        'cob_vac_hepb',
      ]
    }
  },
  {
    label: 'Mortalidade e Morbidade',
    alternativeLabel: 'mortalidade_e_morbidade',
    value: '2',
    data: {
      varIndicators: [
        'tx_mort_inf_ibge',
        'tx_hosp',
        'tx_hosp_csap',
        'tx_mort',
        'tx_mort_evit',
        'tx_mort_csap',
        'pct_mort_maldef',
        'tx_mort_aj_oms',
        'tx_mort_aj_cens',
        'tx_mort_evit_aj_oms',
        'tx_mort_csap_aj_cens',
      ]
    }
  },
  {
    label: 'Recursos',
    alternativeLabel: 'recursos',
    value: '3',
    data: {
      varIndicators: [
        'tx_med',
        'tx_med_ch',
        'tx_enf',
        'tx_enf_ch',
        'tx_leito_sus',
        'tx_leitouti_sus',
      ]
    }
  },
  {
    label: 'Saúde Suplementar',
    alternativeLabel: 'saude_suplementar',
    value: '4',
    data: {
      varIndicators: [
        'cob_priv',
        'tx_leito_nsus',
        'tx_leitouti_nsus',
      ]
    }
  },
  {
    label: 'Demografia',
    alternativeLabel: 'demografia',
    value: '5',
    data: {
      varIndicators: [
        'pct_pop65m',
        'pct_pop75m',
        'pct_pop0a4',
        'pct_pop5a14',
        'pct_pop15a64',
        'tx_popmf',
        'pct_pop10a49_fem',
      ]
    }
  },
  {
    label: 'Gastos',
    alternativeLabel: 'gastos',
    value: '6',
    data: {
      varIndicators: [
        'pct_desp_recp_saude_mun',
        'desp_recp_saude_pc_mun',
        'desp_tot_saude_pc_mun',
        'pct_desp_recp_saude_uf',
        'desp_recp_saude_pc_uf',
        'desp_tot_saude_pc_mun_def',
      ]
    }
  },
  {
    label: 'Indicadores Socioeconômicos',
    alternativeLabel: 'indicadores_socioeconomicos',
    value: '7',
    data: {
      varIndicators: [
        'idhm',
        'idhm_renda',
        'idhm_educ',
        'idhm_long',
      ]
    }
  },
];

const MethodsAndDocumentation = ({ location }) => {
  // eslint-disable-next-line prettier/prettier
  const [groupSelected, setGroupSelected] = useState<SelectOption>({} as SelectOption)
  const [indicatorSelected, setIndicatorSelected] = useState<SelectOption>({} as SelectOption)
  const [indicators, setIndicators] = useState<SelectOption[]>([])
  const [solrData, setSolrData] = useState<SolrDataProps>()

  const [group] = useQueryParam('group');
  const [indicator] = useQueryParam('indicator');

  useEffect(()=> {
    if(group && indicator) {
      const query = {
        group: `${group}`,
        indicator: `${indicator}`
      }

      const filteredGroup = indicatorGroup.filter(group => group.alternativeLabel === query.group)
      const indicatorRecovered = INDICATORS[`${filteredGroup[0].value}`] as SelectOption[]

      const filteredIndicator = indicatorRecovered.filter(indicator => indicator.alternativeLabel === query.indicator)

      setGroupSelected(filteredGroup[0])
      setIndicatorSelected(filteredIndicator[0])
      if (!!filteredIndicator[0].componentData && !!filteredIndicator[0].componentData.pageTitle) {
        setSolrData(filteredIndicator[0].componentData);
      } else {
        setSolrData(undefined)
      }
    }
  }, [location])

  useEffect(() => {
    if(INDICATORS[`${groupSelected.value}`]){
      setIndicators(INDICATORS[`${groupSelected.value}`])
    }
  }, [groupSelected])

  const handleCleanField = () => {
    setIndicatorSelected({
      label: '',
      alternativeLabel: indicatorSelected.alternativeLabel,
      value: indicatorSelected.value,
      data: indicatorSelected.data,
    })
  };

  const handleDownloadDocument = () => {
    window?.print();
  };

  const handleSelectIndicator = (indicator: SelectOption) => {
    if (!!indicator.componentData && !!indicator.componentData.pageTitle) {
      console.log("Set Solar Data")
      console.log(indicator)
      setSolrData(indicator.componentData);
    } else {
      setSolrData(undefined)
    }

    setIndicatorSelected(indicator)
    updateUrlQuery(groupSelected.alternativeLabel!, indicator.alternativeLabel!)
  }

  const updateUrlQuery = (group: string, indicator: string) => {
    window?.history?.pushState(
      'IEPS',
      'IEPS',
      `/methods-documentation?group=${group}&indicator=${indicator}`
    );
  };

  return (
    <Layout location={location}>
      <Head siteTitle="Métodos e Documentação"></Head>
      <S.MethodsAndDocumentation>
        <Title className="print-hidden">Métodos e Documentação</Title>
        <DownloadDocument onDownloadDocument={handleDownloadDocument}  indicator={indicatorSelected.value}/>
        <Indicator
          onSelectIndicator={handleSelectIndicator}
          onSetGroup={setGroupSelected}
          onCleanField={handleCleanField}
          groupSelected={groupSelected}
          indicatorSelected={indicatorSelected}
          indicatorGroup={indicatorGroup}
          indicators={indicators}
          solrData={solrData}
        />
      </S.MethodsAndDocumentation>
    </Layout>
  );
};
export default MethodsAndDocumentation;
