import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from '../../store';
import * as ufCitiesSelectors from '../../store/uf-cities/uf-cities.selectors';
import * as indicatorsSelectors from '../../store/indicators/indicators.selectors';
import { getCities } from '../../store/uf-cities/uf-cities.sagas';
import {
  getIndicators,
  getMunIndicators,
} from '../../store/indicators/indicators.sagas';
import { LinkGo, DownloadsIcon } from '../../components/icons';
import Layout from '../../components/layout/Layout';
import Button from '../../components/layout/Button';
import { Title, SubTitle } from '../../components/typography';
import Downloader from './components/Downloader';
import DownloadFilter from './components/DownloadFilter';
import * as S from './DataDownloads.css';
import { SelectOption } from '../../store/types';
import Head from '../../components/Head';
import Spinner from '../../components/layout/Spinner';
import { FULL_DOWNLOADS_URLS } from './DataDownloads.types';
import { availableYears } from '../../utils/date-time/availableYears';
import sizeUnit from '../../utils/sizeUnit';

// Numbers from 'll' into csv_data folder
//     32148/12/INDICATORS_OPTIONS_SIZE  brazil_data
//   3232971/12/INDICATORS_OPTIONS_SIZE  macro_data
// 135314324/12/INDICATORS_OPTIONS_SIZE  mun_data
//  12272681/12/INDICATORS_OPTIONS_SIZE  reg_data
//    760597/12/INDICATORS_OPTIONS_SIZE  state_data
const GRANULARITY = [
  {
    value: 'brazil_data_ieps',
    label: 'Brasil',
    columns: ['ano'],
    size: 15,
  },
  {
    value: 'state_data_ieps',
    label: 'Estado',
    columns: ['id_estado', 'estado_abrev', 'estado', 'ano', 'regiao_geo'],
    size: 338,
  },
  {
    value: 'macro_data_ieps',
    label: 'Macrorregião de Saúde',
    columns: [
      'id_estado',
      'estado_abrev',
      'estado',
      'ano',
      'macrorregiao',
      'regiao_geo',
      'no_macro',
    ],
    size: 1433,
  },
  {
    value: 'reg_data_ieps',
    label: 'Região de Saúde',
    columns: [
      'id_estado',
      'estado_abrev',
      'estado',
      'ano',
      'regiao',
      'no_regiao',
      'regiao_geo',
    ],
    size: 5440,
  },
  {
    value: 'mun_data_ieps',
    label: 'Município',
    columns: [
      'ano',
      'regiao_geo',
      'id_munic_7',
      'codmun',
      'capital',
      'nomemun',
      'id_estado',
      'estado_abrev',
      'estado',
      'regiao',
      'no_regiao',
      'macrorregiao',
      'no_macro',
    ],
    size: 59979,
  },
];

const INDICATORS_OPTIONS_SIZE = 188;
const YEARS_OPTIONS_SIZE = availableYears.length;
const MIN_FILE_SIZE = 1000;

const DataDownloads = ({ location }) => {
  const dispatch = useDispatch();
  const [query, setQuery] = useState({
    codmun: '',
    granularidade: 'brazil_data_ieps',
    ano: `em ${availableYears[0]}`,
  });
  const [submitted, setSubmitted] = useState(false);
  const [indicatorsCount, setSelectedIndicatorsCount] = useState(0);
  const [indicatorsMap, setIndicatorsMap] = useState({});
  const [blockMap, setBlockMap] = useState({});
  const years = useSelector<SelectOption[]>(ufCitiesSelectors.selectYears);
  const cityOptions = useSelector<SelectOption[]>(
    ufCitiesSelectors.selectCityOptions
  );
  const loadings: { isGettingAll: boolean } = useSelector(
    indicatorsSelectors.selectLoadings
  );
  const indicatorsBlock = useSelector<{
    [key: string]: { name: string, variable: string }[],
  }>(indicatorsSelectors.selectIndicatorsBlock);
  const [intermediates, setIntermediates] = useState<string[]>([]);

  useEffect(() => {
    getIndicators(dispatch)();
  }, []);

  // eslint-disable-next-line @typescript-eslint/ban-types
  const isStatusIntermediate = (variable: string, indicatorsMap: {}) => {
    let key = '';
    Object.entries(indicatorsBlock).forEach((item) => {
      const filtered = item[1].filter((i) => i.variable === variable);
      if (filtered.length > 0) {
        key = item[0];
      }
    });

    if (intermediates.filter((k) => k === key).length > 0) {
      if (
        [indicatorsBlock[key].map((i) => i.variable)][0]
          .map((i) => indicatorsMap[i])
          .filter((i) => i === true).length > 0
      ) {
        return;
      } else {
        setIntermediates(intermediates.filter((item) => item !== key));
        return;
      }
    } else {
      setIntermediates((state) => [...state, key]);
    }
  };

  const handleLoadCities = (codmun: string) => {
    const newQuery = {
      ...query,
      codmun,
    };

    getCities(dispatch)(newQuery.codmun, newQuery.ano);
  };

  const handleSearch = (newQuery: {
    codmun: string,
    granularidade: string,
    ano: string,
  }) => {
    setQuery({
      ...query,
      ...newQuery,
    });
  };

  const handleSelectIndicator = ({
    variable,
  }: {
    name: string,
    variable: string,
  }) => {
    const newMap = {
      ...indicatorsMap,
      [variable]: !indicatorsMap[variable],
    };

    isStatusIntermediate(variable, newMap);

    setSelectedIndicatorsCount(getIndicatorsCount(newMap));
    setIndicatorsMap(newMap);
  };

  const handleToggleCheckBlock = (block: string, checked: boolean) => {
    const newMap = {
      ...indicatorsMap,
      ...toggleCheckBlockIndicators(indicatorsBlock, block, checked),
    };

    if (!checked) {
      setIntermediates(intermediates.filter((item) => item !== block));
    }

    setIndicatorsMap(newMap);

    setBlockMap({
      ...blockMap,
      [block]: checked,
    });
    setSelectedIndicatorsCount(getIndicatorsCount(newMap));
  };

  const handleSelectAll = (checked: boolean) => {
    const blocks = Object.keys(indicatorsBlock);

    const newBlockMap = blocks.reduce(
      (total, key) => ({
        ...total,
        [key]: checked,
      }),
      {}
    );

    const newIndicatorsMap = blocks.reduce(
      (total, block) => ({
        ...total,
        ...toggleCheckBlockIndicators(indicatorsBlock, block, checked),
      }),
      {}
    );

    setBlockMap(newBlockMap);
    setIndicatorsMap(newIndicatorsMap);
    setSelectedIndicatorsCount(getIndicatorsCount(newIndicatorsMap));
  };

  const downloadStatic = (linkHref: string) => {
    const link = document.createElement('a');
    link.setAttribute('style', 'display: none');
    link.setAttribute('href', linkHref);
    link.download = `${fileName}.xlsx`;
    link.click();
  };

  const handleDownload = () => {
    const { ano, codmun, granularidade } = query;
    setSubmitted(true);
    const indicators = selectedIndicators(indicatorsMap);
    if (!ano || !indicators.length || loadings.isGettingAll) {
      return;
    }

    if (
      ano.split(',').length === YEARS_OPTIONS_SIZE &&
      indicatorsCount === INDICATORS_OPTIONS_SIZE
    ) {
      handleFullDownload();
      return;
    }

    getMunIndicators(dispatch)(
      codmun,
      ano,
      granularidade,
      indicators,
      GRANULARITY.find((item) => item.value === granularidade)?.columns || [
        'ano',
      ],
      fileName()
    );
  };

  const handleFullDownload = () => {
    if (query.granularidade === 'brazil_data_ieps') {
      downloadStatic(FULL_DOWNLOADS_URLS.country);
    } else if (query.granularidade === 'state_data_ieps') {
      downloadStatic(FULL_DOWNLOADS_URLS.state);
    } else if (query.granularidade === 'macro_data_ieps') {
      downloadStatic(FULL_DOWNLOADS_URLS.macro);
    } else if (query.granularidade === 'reg_data_ieps') {
      downloadStatic(FULL_DOWNLOADS_URLS.reg);
    } else {
      downloadStatic(FULL_DOWNLOADS_URLS.mun);
    }
  };

  const toggleCheckBlockIndicators = (
    blocks: { [key: string]: { name: string, variable: string }[] },
    block: string,
    checked: boolean
  ) => {
    return blocks?.[block]
      .map((item) => item.variable)
      .reduce(
        (total, key) => ({
          ...total,
          [key]: checked,
        }),
        {}
      );
  };

  const getIndicatorsCount = (selectedMap: { [key: string]: boolean }) =>
    Object.values(selectedMap).filter((item) => item === true).length;

  const selectedIndicators = (selectedMap: {
    [key: string]: boolean,
  }): string[] =>
    Object.keys(selectedMap).filter((key) => selectedMap[key] === true);

  const fileSize = (): number => {
    const granSize =
      GRANULARITY.find((gran) => gran.value === query.granularidade)?.size || 1;

    const anos = query.ano.split(',').length;
    const estimatedSize = indicatorsCount * granSize * anos;
    return estimatedSize
      ? Math.max(estimatedSize, MIN_FILE_SIZE)
      : estimatedSize;
  };

  const fileSizeFullFile = (): number => {
    const granSize =
      GRANULARITY.find((gran) => gran.value === query.granularidade)?.size || 1;
    return INDICATORS_OPTIONS_SIZE * granSize * YEARS_OPTIONS_SIZE;
  };

  const fileName = () => {
    const { ano, granularidade } = query;

    if (indicatorsCount === 1) {
      return `${indicatorsCount}_indicador_${granularidade}${ano
        .replaceAll('em ', '_')
        .replaceAll(', ', '')}`;
    }

    return `${indicatorsCount}_indicadores_${granularidade}${ano
      .replaceAll('em ', '_')
      .replaceAll(', ', '')}`;
  };

  return (
    <Layout location={location}>
      <Head siteTitle="Download dos dados"></Head>
      <S.DataDownloads>
        <Title>Download dos dados</Title>
        <S.Hero>
          <S.InfoBlock>
            <SubTitle>
              Baixe todos os dados do site com apenas um clique ou filtre
              indicadores e localidades para obter um arquivo de download
              personalizado.
            </SubTitle>
            <S.TextInline>
              Para saber mais sobre as variáveis, acesse nosso dicionário de
              dados
              <S.Link
                to="https://gitlab.com/ieps-data/indicadores/-/raw/main/codebook.csv?inline=false"
                target="_blank"
                style={{ marginRight: 5 }}
              >
                aqui
                <LinkGo />
              </S.Link>
              e nosso repositório de códigos
              <S.Link
                to="https://gitlab.com/ieps-data/indicadores/-/tree/main"
                target="_blank"
                style={{ marginLeft: 5 }}
              >
                aqui.
                <LinkGo />
              </S.Link>
            </S.TextInline>
          </S.InfoBlock>
          <S.ActionBlock>
            <S.DownloadBlock>
              <Button theme="home" onClick={handleFullDownload}>
                Download Completo <DownloadsIcon />
              </Button>
              {loadings.isGettingAll && <Spinner size="2" theme="white" />}
            </S.DownloadBlock>
            <S.DownloadSize>
              .xlsx {sizeUnit(fileSizeFullFile())} | {INDICATORS_OPTIONS_SIZE}{' '}
              indicadores
            </S.DownloadSize>
          </S.ActionBlock>
        </S.Hero>
        <S.Main>
          <DownloadFilter
            submitted={submitted}
            multiple
            indicatorsCount={indicatorsCount}
            years={years}
            cityOptions={cityOptions}
            granularity={GRANULARITY}
            onLoadCities={handleLoadCities}
            onSearch={handleSearch}
          />
          <Downloader
            isLoading={loadings.isGettingAll}
            indicatorsCount={indicatorsCount}
            indicatorsMap={indicatorsMap}
            blockMap={blockMap}
            indicatorsBlock={indicatorsBlock}
            fileSize={fileSize()}
            onSelectIndicator={handleSelectIndicator}
            onToggleCheckBlock={handleToggleCheckBlock}
            onSelectAll={handleSelectAll}
            onDownload={handleDownload}
            intermediates={intermediates}
          />
        </S.Main>
      </S.DataDownloads>
    </Layout>
  );
};

export default DataDownloads;
