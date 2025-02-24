/* eslint-disable no-octal */
import React, { useCallback, useEffect, useState } from 'react';
import {
  BoxArrowUp,
  Download,
  ExclamationCircle,
  FileEarmarkText,
} from '../../../../components/icons';
import Select from '../../../../components/select';
import { SelectOption } from '../../../../store/types';

import * as S from './TimeLine.css';

import Clipboard from '../../../../components/Clipboard';
import debounce from '../../../../utils/debounce';
import timeLineChart from './TimeLine.chart';
import { DataToTimeLine} from '../../../../store/visualizations/visualizations.types';
import { IndicatorAlert } from '../../../../utils/indicators-adapter/ParseJsonData';
import vizIndicatorDocs from '../../../../utils/indicators-adapter';
import { indicatorGroup } from '../../../MethodsAndDocumentation/MethodsAndDocumentation';
import INDICATORS from '../../../MethodsAndDocumentation/components/Indicator/data/indicators';
import ImageSignature from '../../../../components/ImageSignature';

interface CityQuery {
  city: string;
  cityCode: string;
  uf: string;
  region: string;
  macroRegion: string;
}

interface RegionQuery {
  region: string;
  uf: string;
  macroCode: string;
  regionCode: string;
}

interface MacroQuery {
  macroRegion: string;
  uf: string;
  macroCode: string;
}

interface StateQuery {
  state: string;
  uf: string;
  year: string;
  id_estado: string;
}

interface Props {
  pageUrl: string;
  onReportError: () => void;
  onDownloadChartImage: (htmElementID: string) => void;
  cityQuery: CityQuery;
  stateQuery: StateQuery;
  regionQuery: RegionQuery;
  macrosQuery: MacroQuery;
  indicatorSelected: SelectOption;
  chartData: DataToTimeLine;
  indicators: SelectOption[];
  cityOptions: SelectOption[];
  regionsOptions: SelectOption[];
  macrosOptions: SelectOption[];
  stateOptions: SelectOption[];
  showUpSignature: boolean;
  granularitySelected: SelectOption;
  onChangeTimeLineStateName: (state: string) => void;
  onChangeIndicator: (indicator: string) => void;
  onSelectIndicator: (indicator: SelectOption) => void;
  onSelectLocation: (query: any) => void;
  onSelectTimeLineState: (query: StateQuery) => void;
  onChangeLocationName: (city: string) => void;
  initialValues: () => void;
  onSelectGranularity: (granularity: SelectOption) => void;
  granularity: SelectOption[]
}

const TimeLine = ({
  pageUrl,
  onReportError,
  onDownloadChartImage,
  cityQuery,
  regionQuery,
  macrosQuery,
  indicatorSelected,
  chartData,
  indicators,
  cityOptions,
  regionsOptions,
  macrosOptions,
  stateOptions,
  showUpSignature,
  onChangeTimeLineStateName,
  onSelectTimeLineState,
  onChangeIndicator,
  onSelectIndicator,
  onSelectLocation,
  onChangeLocationName,
  initialValues,
  onSelectGranularity,
  granularitySelected,
  granularity,
  stateQuery
}: Props) => {
  const [chartIsLoaded, setChartIsLoaded] = useState(false);
  const [indicatorAlert, setIndicatorAlert] = useState({} as IndicatorAlert)
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

    if(cityQuery.cityCode) {
      updateUrlQuery(indicator.data.variableName, cityQuery)
    }
  }

  const handleChangeIndicator = (indicator: string) => {
    onChangeIndicator(indicator)
  }

  const handleSelectCity = (option: SelectOption) => {
    let query = {};

    switch (granularitySelected.value) {
      case 'viz':
        query = {
          ...cityQuery,
          city: option.label,
          cityCode: option.value,
          uf: option.data.uf,
          region: option.data.regiao,
          macroRegion: option.data.macrorregiao
        };
        break
      case 'vizReg':
        query = {
          ...regionQuery,
          region: option.label,
          uf: option.data.uf,
          macroCode: option.data.macrorregiao,
          regionCode: option.value
        };
        break
      case 'vizMacro':
        query = {
          ...macrosQuery,
          macroRegion: option.label,
          uf: option.data.uf,
          macroCode: option.value,
        };
        break
      case 'vizEst':
        query = {
          ...stateQuery,
          id_estado: option.value,
          state: option.label,
          uf: option.data.uf
        };
        break
    }


    onSelectLocation(query);
    if(indicatorSelected.value) {
      updateUrlQuery(indicatorSelected.data.variableName, query)
    }
  }

  const handleSelectGranularity = (granularity: SelectOption) => {
    onSelectGranularity(granularity) 
    if(indicatorSelected.data && stateQuery.id_estado){
      updateUrlQuery(indicatorSelected.data.variableName, stateQuery)
    }
  }

  const handleChangeLocationName = (location: string) => {
    onChangeLocationName(location)
  }

  const handleChangeStateName = (state: string) => {
    onChangeTimeLineStateName(state)
  }

  const handleSelectState = (stateOption: SelectOption) => {
    const query = {
      ...stateQuery,
      state: stateOption.label,
      id_estado: stateOption.value
    };

    onSelectTimeLineState(query)
    if(indicatorSelected.value){
      updateUrlQuery(indicatorSelected.data.variableName, query)
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

  const setOptionsByGranularity = (): SelectOption[] => {
    let options: SelectOption[] = [] as unknown as SelectOption[];


    if(!granularitySelected)
      return options;

    switch (granularitySelected.value) {
      case 'viz':
        options = cityOptions;
        break
      case 'vizReg':
        options = regionsOptions;
        break
      case 'vizMacro':
        options = macrosOptions;
        break
      case 'vizEst':
        options = stateOptions;
        break

    }

    return options;
  }

  const updateUrlQuery = (indicator: string, query: any) => {
    switch (granularitySelected.value) {
      case 'viz':
        window?.history?.pushState(
          'IEPS',
          'IEPS',
          `/visualizations?chart=2&indicator=${indicator}&state=${stateQuery.state}&granularity=${granularitySelected.value}&cityCode=${query.cityCode}&region=${query.region}&uf=${query.uf}&macroRegion=${query.macroRegion}`
        );
        break
      case 'vizReg':
        window?.history?.pushState(
          'IEPS',
          'IEPS',
          `/visualizations?chart=2&indicator=${indicator}&state=${stateQuery.state}&granularity=${granularitySelected.value}&region=${query.region}&uf=${query.uf}&macroRegion=${query.macroRegion}`
        );
        break
      case 'vizMacro':
        window?.history?.pushState(
          'IEPS',
          'IEPS',
          `/visualizations?chart=2&indicator=${indicator}&state=${stateQuery.state}&granularity=${granularitySelected.value}&uf=${query.uf}&macroRegion=${query.macroRegion}`
        );
        break
      case 'vizEst':
        window?.history?.pushState(
          'IEPS',
          'IEPS',
          `/visualizations?chart=2&indicator=${indicator}&state=${stateQuery.state}&granularity=${granularitySelected.value}&uf=${query.uf}`
        );
        break

    }

  };

  useEffect(() => {
    initialValues();
  }, [])

  useEffect(() => {
    switch (granularitySelected.value) {
      case 'vizReg':
        if(chartData.city) {
          chartData.city.name = '';
          chartData.city.series = [];
        }
        break
      case 'vizMacro':
        if(chartData.city) {
          chartData.city.name = '';
          chartData.city.series = [];
        }
        if(chartData.region) {
          chartData.region.name = '';
          chartData.region.series = [];
        }
        break
      case 'vizEst':
        if(chartData.city) {
          chartData.city.name = '';
          chartData.city.series = [];
        }
        if(chartData.region) {
          chartData.region.name = '';
          chartData.region.series = [];
        }
        if(chartData.macro_region) {
          chartData.macro_region.name = '';
          chartData.macro_region.series = [];
        }
        break
      case 'viz':
        break
    }

    ((chartData.yMin || chartData.yMin === 0) && indicatorSelected.data) && setChartIsLoaded(timeLineChart(
      chartData,
      indicatorSelected.data.variableName,
      indicatorSelected.data.format,
      indicatorSelected.data.decPlaces
    ));
  }, [chartData, indicatorSelected])

  useEffect(() => {
    indicatorSelected.data && setIndicatorAlert(vizIndicatorDocs(indicatorSelected.data.variableName))
  }, [indicatorSelected])

  return (
    <>
      <S.Header>
        <S.IndicatorsContainer>
          <S.line>
            <div id="time-line-indicator">
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
            <div id="time-line-state">
              <Select
                isDataFromServer
                placeholder="Selecione um estado"
                options={stateOptions}
                onChange={debounce(handleChangeStateName)}
                onSelect={handleSelectState}
                theme='visualization'
                value={stateQuery.state ? stateQuery.state : ''}
              />
            </div>
            <div id="time-line-granularity">
              <Select
                isDataFromServer
                placeholder="Granularidade"
                options={granularity}
                value={granularitySelected.label}
                onSelect={handleSelectGranularity}
                theme='visualization'
              />
            </div>
            <div id="time-line-location">
              <Select
                id="time-line-location-input"
                isDataFromServer
                placeholder="Selecione uma localidade"
                options={setOptionsByGranularity()}
                onChange={debounce(handleChangeLocationName)}
                onSelect={handleSelectCity}
                theme='visualization'
                value={cityQuery.city ? cityQuery.city : ''}
              />
            </div>
          </S.line>
        </S.IndicatorsContainer>
      </S.Header>
      <S.ChartContainer>
        <S.InfoWrapper>
          <S.SideText>
            { !indicatorAlert.nome_variavel ? (
                <S.MessageWrapper>
                  <span>Por favor, selecione um indicador para mais informações</span>
                </S.MessageWrapper>
              ) : (
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
                  <>
                    <S.WarningText>Atenção!</S.WarningText>
                    <S.Quote>
                      <p>
                        Adicionamos os dados de 2022 utilizando a população do Censo 2022. Para anos anteriores utilizamos a população estimada pelo Ministério da Saúde.
                      </p>
                      <p>
                        Adicionamos os dados preliminares de 2023 utilizando a população do Censo 2022. Para anos anteriores utilizamos a população estimada pelo Ministério da Saúde.
                      </p>
                    </S.Quote>
                  </>
                  <S.Source>
                    Fonte: {indicatorAlert.fonte}
                  </S.Source>
                </S.TextWrapper>
            )}
          </S.SideText>
          <S.LineSeparator />
          <S.ButtonsContainer>
            <S.DownloadButton onClick={() => onDownloadChartImage('chart-time-line-container')}>
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
        <S.ChartWrapper id='chart-time-line-container'>
          {!chartIsLoaded && (
            <S.MessageWrapper>
              <span>Por favor, selecione os valores acima para exibir o gráfico</span>
            </S.MessageWrapper>
          )}
          {chartIsLoaded && (
            <S.ChartLegend>
              <div>
                <span id='time-line-legend-country'>
                  País
                </span>
              </div>
              <div>
                <span id='time-line-legend-state'>
                  Estado
                </span>
              </div>
              <div>
                <span id='time-line-legend-macro-region'>
                  Macrorregião
                </span>
              </div>
              <div>
                <span id='time-line-legend-health-region'>
                  Região de Saúde
                </span>
              </div>
              <div>
                <span id='time-line-legend-city'>
                  Município Selecionado
                </span>
              </div>
            </S.ChartLegend>
          )}
          <svg id="chart-time-line"></svg>
          <ImageSignature showUp={showUpSignature} isBgColor={false} textAlign='center'/>
        </S.ChartWrapper>
      </S.ChartContainer>
    </>
  );
};

export default TimeLine;
