/* eslint-disable no-octal */
import React, { useEffect, useState } from 'react';
import {
  BoxArrowUp,
  Download,
  ExclamationCircle,
  FileEarmarkText,
} from '../../../../components/icons';
import Select from '../../../../components/select';
import { SelectOption } from '../../../../store/types';

import * as S from './Packing.css';

import Clipboard from '../../../../components/Clipboard';
import debounce from '../../../../utils/debounce';
import { CirclePackingData } from '../../../../store/visualizations/visualizations.types';
import circlePackingChart, { clearChart, clearStackAxis, clearStackedBars } from './Packing.chart';
import Toggle from '../../../../components/toggle';
import { IndicatorAlert } from '../../../../utils/indicators-adapter/ParseJsonData';
import vizIndicatorDocs from '../../../../utils/indicators-adapter';
import { indicatorGroup } from '../../../MethodsAndDocumentation/MethodsAndDocumentation';
import INDICATORS from '../../../MethodsAndDocumentation/components/Indicator/data/indicators';
import ImageSignature from '../../../../components/ImageSignature';
import Watermark from '../../../../components/Watermark';

export interface PackingStateQuery {
  state: string;
  uf: {
    uf: string,
    year: string,
  };
  year: string;
  id_estado: string;
}

interface Props {
  pageUrl: string;
  onReportError: () => void;
  onDownloadChartImage: (htmElementID: string) => void;
  indicators: SelectOption[];
  stateOptions: SelectOption[];
  chartData: CirclePackingData;
  years: SelectOption[];
  stateQuery: PackingStateQuery;
  indicatorSelected: SelectOption;
  granularitySelected: SelectOption;
  showUpSignature: boolean;
  onSelectState: (quey: any) => void;
  onChangeStateName: (state: string) => void;
  onSelectGranularity: (granularity: SelectOption) => void;
  onChangeIndicator: (indicator: string) => void;
  onSelectIndicator: (indicator: SelectOption) => void;
  onChangeYear: (year: string) => void;
  onSelectYear: (year: SelectOption) => void;
  initialValues: () => void;
  granularity: SelectOption[]
}

const Packing = ({
  pageUrl,
  onReportError,
  onDownloadChartImage,
  indicators,
  stateOptions,
  chartData,
  years,
  stateQuery,
  indicatorSelected,
  granularitySelected,
  showUpSignature,
  onSelectState,
  onChangeStateName,
  onSelectGranularity,
  onChangeIndicator,
  onSelectIndicator,
  onChangeYear,
  onSelectYear,
  initialValues,
  granularity
}: Props) => {

  const [isPopulation, setIsPopulation] = useState(true);
  const [chartIsLoaded, setChartIsLoaded] = useState(false);
  // eslint-disable-next-line prettier/prettier
  const [indicatorAlert, setIndicatorAlert] = useState({} as IndicatorAlert);
  const [docUrl, setDocUrl] = useState('');



  const handleSelectIndicator = (indicator: SelectOption) => {
    onSelectIndicator(indicator)

    const group = indicatorGroup.filter(item => item.label === indicator.data.bloco)[0]
    if(typeof group === 'undefined') return;
    const indicatorLink = INDICATORS[group.value].map(item =>
      {
        let filtered= ''
        if(item.data){
          filtered = item.data.variableName.filter(v => v === indicator.data.variableName)[0]
        }

        if(typeof filtered === 'undefined'){
          return undefined
        } else {
          return item
        }
      }
    ).filter(item => typeof item !== 'undefined')[0]
    if(typeof indicatorLink === 'undefined') return;

    setDocUrl(`methods-documentation?group=${group.alternativeLabel}&indicator=${indicatorLink.alternativeLabel}`)

    if(stateQuery.id_estado){
      updateUrlQuery(indicator.data.variableName, stateQuery, granularitySelected.value)
    }
  }

  const handleChangeIndicator = (indicator: string) => {
    onChangeIndicator(indicator)
  }

  const handleSelectYear = (year: SelectOption) => {
    const query = {
      ...stateQuery,
      year: year.value
    };

    onSelectYear(year)
    if(indicatorSelected.data && query.id_estado){
      updateUrlQuery(indicatorSelected.data.variableName, query, granularitySelected.value)
    }
  }

  const handleSelectState = (stateOption: SelectOption) => {
    const query = {
      ...stateQuery,
      state: stateOption.label,
      id_estado: stateOption.value,
      uf: stateOption.data
    };

    onSelectState(query)
    if(indicatorSelected.data){
      updateUrlQuery(indicatorSelected.data.variableName, query, granularitySelected.value)
    }
  }

  const handleChangeStateName = (state: string) => {
    onChangeStateName(state)
  }

  const handleSelectGranularity = (granularity: SelectOption) => {
    onSelectGranularity(granularity) 
    if(indicatorSelected.data && stateQuery.id_estado){
      updateUrlQuery(indicatorSelected.data.variableName, stateQuery, granularity.value)
    }
  }

  const handleNavigateToDocs = () => {
    if(!indicatorSelected.value) {
      return
    }

    const protocol = window.location.protocol
    const host = window.location.host

    window.location.replace(`${protocol}//${host}/${docUrl}`)
  }

  const updateUrlQuery = (indicator: string, query: any, granularity: string) => {
    window?.history?.pushState(
      'IEPS',
      'IEPS',
      `/visualizations?chart=4&indicator=${indicator}&state=${query.state}&id_estado=${query.id_estado}&year=${query.year}&granularity=${granularity}`
    );
  };

  useEffect(() => {
    if(chartData && Object.keys(chartData).length === 0 && Object.getPrototypeOf(chartData) === Object.prototype) {
      return
    }

    const test = chartData.children.map(child => (
      child.name.substr(5).split(' - ')[0].trim()
    )).filter(name => name !== '-1' && name !== 'Infinity').length

    if(!test) {
      if(chartIsLoaded) {
        clearChart()
        clearStackedBars()
        clearStackAxis()
      }
      return
    }

    indicatorSelected.data && setChartIsLoaded(circlePackingChart(
      chartData,
      stateQuery.state,
      stateQuery.uf.uf,
      granularitySelected.value,
      indicatorSelected.label,
      indicatorSelected.data.variableName,
      isPopulation,
      indicatorSelected.data.decPlaces,
      indicatorSelected.data.format
    ))


  }, [chartData, isPopulation, indicatorSelected])

  useEffect(() => {
    if(!indicatorSelected.value) {
      return
    }

    const viz = +indicatorSelected.data.viz
    const vizReg = +indicatorSelected.data.vizReg

    if(viz > 0 && vizReg < 0) {
      const select = granularity.filter(g => g.value === 'viz')[0]

      handleSelectGranularity(select)
    } else if (vizReg > 0 && viz > 0) {
      const select = granularity.filter(g => g.value === 'vizReg')[0]

      handleSelectGranularity(select)
    }

  },[indicatorSelected])

  useEffect(() => {
    indicatorSelected.data && setIndicatorAlert(vizIndicatorDocs(indicatorSelected.data.variableName))
  }, [indicatorSelected])

  useEffect(() => {
    initialValues()
  }, [])

  return (
    <>
      <S.Header>
        <S.IndicatorsContainer>
          <S.line>
            <div id="packing-indicator">
              <Select
                isDataFromServer
                placeholder="Selecione o indicador"
                options={indicators}
                onChange={debounce(handleChangeIndicator)}
                onSelect={handleSelectIndicator}
                theme='visualization'
                value={indicatorSelected.label ? indicatorSelected.label : ''}
              />
            </div>
          </S.line>
          <S.line>
            <div id="packing-location">
              <Select
                isDataFromServer
                placeholder="Selecione uma localidade"
                options={stateOptions}
                onChange={debounce(handleChangeStateName)}
                onSelect={handleSelectState}
                theme='visualization'
                value={stateQuery.state ? stateQuery.state : ''}
              />
            </div>
            <div id="packing-year">
              <Select
                value={stateQuery.year}
                options={years}
                onChange={onChangeYear}
                onSelect={handleSelectYear}
                theme='visualization'
                isOptions={true}
              />
            </div>
            <div id="packing-granularity">
              <Select
                isDataFromServer
                placeholder="Granularidade"
                options={granularity}
                value={granularitySelected.label}
                onSelect={handleSelectGranularity}
                theme='visualization'
              />
            </div>
          </S.line>
        </S.IndicatorsContainer>
      </S.Header>
      <S.ChartContainer>
        <S.InfoWrapper>
          <S.SideText>
            { !indicatorAlert.nome_variavel ? (
                <>
                  <S.AlertMessageWrapper>
                    <span>Por favor, selecione um indicador para mais informações</span>
                  </S.AlertMessageWrapper>
                  <S.TextWrapper>
                  <S.Title>Sobre o gráfico de Agrupamento:</S.Title>
                    <p>
                      O gráfico de Agrupamento permite visualizar clusters (ou grupos) de locais com valores similares
                      no indicador selecionado, dentro de cada estado. Os círculos menores são as unidades geográficas
                      da granularidade selecionada (municípios, regiões de saúde ou macrorregiões de saúde) e cada
                      cluster é representado por círculos grandes, que abrangem grupos desses círculos pequenos.
                      É possível explorar os clusters através da escala vertical à esquerda. O botão “População”
                      faz com que o tamanho dos círculos seja proporcional à população de cada local.
                    </p>
                  </S.TextWrapper>
                </>
              ) : (
              <>
                <S.TextWrapper>
                  <S.Title>sobre os indicadores:</S.Title>
                    <p>
                      {indicatorAlert.descricao}
                    </p>
                  {indicatorAlert.mensagem_alerta && (
                    <>
                      <S.WarningText>Cuidado na interpretação!</S.WarningText>
                      <S.Quote>
                        <p>
                          {indicatorAlert.mensagem_alerta}
                        </p>
                      </S.Quote>
                    </>
                  )}
                  {(stateQuery.year == 'em 2022') && (
                    <>
                      <S.WarningText>Atenção!</S.WarningText>
                      <S.Quote>
                        <p>
                          Adicionamos os dados de 2022 utilizando a população do Censo 2022. Para anos anteriores utilizamos a população estimada pelo Ministério da Saúde.
                        </p>
                      </S.Quote>
                    </>
                  )}
                  {(stateQuery.year == 'em 2023') && (
                    <>
                      <S.WarningText>Atenção!</S.WarningText>
                      <S.Quote>
                        <p>
                          Adicionamos os dados preliminares de 2023 utilizando a população do Censo 2022. Para anos anteriores utilizamos a população estimada pelo Ministério da Saúde.
                        </p>
                      </S.Quote>
                    </>
                  )}
                  <S.Source>
                    Fonte: {indicatorAlert.fonte}
                  </S.Source>
                </S.TextWrapper>
                <S.Separator>. . .</S.Separator>
                <S.TextWrapper>
                <S.Title>Sobre o gráfico de Agrupamento:</S.Title>
                  <p>
                    O gráfico de Agrupamento permite visualizar clusters (ou grupos) de locais com valores similares
                    no indicador selecionado, dentro de cada estado. Os círculos menores são as unidades geográficas
                    da granularidade selecionada (municípios, regiões de saúde ou macrorregiões de saúde) e cada
                    cluster é representado por círculos grandes, que abrangem grupos desses círculos pequenos.
                    É possível explorar os clusters através da escala vertical à esquerda. O botão “População”
                    faz com que o tamanho dos círculos seja proporcional à população de cada local.
                  </p>
                </S.TextWrapper>
              </>
            )}
          </S.SideText>
          <S.LineSeparator />
          <S.ButtonsContainer>
            <S.DownloadButton onClick={() => onDownloadChartImage('chart-packing-container')}>
              <Download />
            </S.DownloadButton>
            <S.SharedButton>
              <Clipboard copyValue={pageUrl}>
                <BoxArrowUp />
              </Clipboard>
            </S.SharedButton>
            <S.InfoButton onClick={onReportError}>
              <ExclamationCircle />
            </S.InfoButton>
            <S.DocButton onClick={handleNavigateToDocs}>
              <FileEarmarkText />
            </S.DocButton>
          </S.ButtonsContainer>
        </S.InfoWrapper>

        <S.ChartWrapper id='chart-packing-container'>
          {!chartIsLoaded && (
            <S.MessageWrapper>
              <span>Por favor, selecione os valores acima para exibir o gráfico</span>
            </S.MessageWrapper>
          )}
          <div id="visualization-border"></div>
          <S.ScaleWrapper>
            <svg id='chart-packing-scale' />
          </S.ScaleWrapper>
          <S.TogglePopulationContainer>
            <span>População</span>
            <Toggle
              shouldUseRegionData={isPopulation}
              onToggle={() => setIsPopulation(!isPopulation)}
            />
          </S.TogglePopulationContainer>
          <svg id="chart-packing"></svg>
          <ImageSignature showUp={showUpSignature} isBgColor={false} textAlign='center' paddingLeft='10.5rem'/>
        </S.ChartWrapper>
      </S.ChartContainer>
    </>
  );
};

export default Packing;
