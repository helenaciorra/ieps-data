/* eslint-disable prefer-const */
/* eslint-disable no-octal */
import React, { useCallback, useEffect, useLayoutEffect, useState } from 'react';
import {
  BoxArrowUp,
  Download,
  ExclamationCircle,
  FileEarmarkText,
} from '../../../../components/icons';
import Select from '../../../../components/select';
import { ActionsStatus, SelectOption, UfCod } from '../../../../store/types';

import * as S from './MapRanking.css';

import Clipboard from '../../../../components/Clipboard';
import debounce from '../../../../utils/debounce';
import { DataToMapRanking, LocalToMapRanking } from '../../../../store/visualizations/visualizations.types';
import UfState from '../../../../components/UfMapChart/components/UfState';
import mapRangeChart, { colorPalette } from './mapRangeChart';
import vizIndicatorDocs from '../../../../utils/indicators-adapter';
import { IndicatorAlert } from '../../../../utils/indicators-adapter/ParseJsonData';
import { indicatorGroup } from '../../../MethodsAndDocumentation/MethodsAndDocumentation';
import INDICATORS from '../../../MethodsAndDocumentation/components/Indicator/data/indicators';
import { paleSky } from '../../../../constants/theme';
import { QueryParams } from 'use-query-params';
import ImageSignature from '../../../../components/ImageSignature';
import Watermark from '../../../../components/Watermark';

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
  mapData: DataToMapRanking[];
  years: SelectOption[];
  mapsLoading: ActionsStatus & { isLoadingUfMapData?: boolean };
  countryData:LocalToMapRanking;
  stateData: LocalToMapRanking;
  stateQuery: StateQuery;
  indicatorSelected: SelectOption;
  indicators:SelectOption[];
  stateOptions:SelectOption[];
  isMessageHidden: boolean;
  showUpSignature: boolean;
  onSelectIndicator: (indicator: SelectOption) => void;
  onChangeIndicator: (indicator: string) => void;
  onSelectMapRankingState: (query: any) => void;
  onChangeMapRankingStateName: (state: string) => void;
  onChangeYear:(year: string) => void;
  onSelectMapRankingYear: (year: SelectOption) => void;
  initialValues: () => void;
  onSelectGranularity: (granularity: SelectOption) => void;
  granularitySelected: SelectOption;
  granularity: SelectOption[]

}

const Packing = ({
  pageUrl,
  onReportError,
  onDownloadChartImage,
  mapData,
  years,
  mapsLoading,
  countryData,
  stateData,
  stateQuery,
  indicatorSelected,
  indicators,
  stateOptions,
  isMessageHidden,
  showUpSignature,
  onSelectIndicator,
  onChangeIndicator,
  onSelectMapRankingState,
  onChangeMapRankingStateName,
  onChangeYear,
  onSelectMapRankingYear,
  initialValues,
  onSelectGranularity,
  granularitySelected,
  granularity
}: Props) => {
  const [tooltipInfo, setTooltipInfo] = useState({id: '', label: '', value: '', color: ''})
  const [legend, setLegend] = useState({start: '', middle: '', end: ''})
  const [isToolpit, setIsTooltip] = useState(false)
  // eslint-disable-next-line prettier/prettier
  const [indicatorAlert, setIndicatorAlert] = useState({} as IndicatorAlert)
  const [docUrl, setDocUrl] = useState('');
  const [isCandle, setIsCandle] = useState(false);


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

    if(stateQuery.id_estado) {
      updateUrlQuery(indicator.data.variableName, stateQuery, granularitySelected.value)
    }
  }

  const handleChangeIndicator = (indicator: string) => {
    onChangeIndicator(indicator)
  }

  const handleSelectState = (stateOption: SelectOption) => {
    const query = {
      ...stateQuery,
      state: stateOption.label,
      id_estado: stateOption.value
    };

    onSelectMapRankingState(query)
    if(indicatorSelected.value){
      updateUrlQuery(indicatorSelected.data.variableName, query, granularitySelected.value)
    }
  }

  const handleChangeStateName = (state: string) => {
    onChangeMapRankingStateName(state)
  }

  const handleChangeYear = (year: string) => {
    onChangeYear(year)
  }

  const handleSelectYear = (year: SelectOption) => {
    onSelectMapRankingYear(year);

    const query = {
      ...stateQuery,
      year: year.value
    };

    if(stateQuery.id_estado) {
      updateUrlQuery(indicatorSelected.data.variableName, query, granularitySelected.value)
    }
  }

  const handleRenderMaps = () => {
    // Let's use this conditional to prevent old browser which dont support requestAnimationFrame
    if (requestAnimationFrame) {
      requestAnimationFrame(renderUfMaps);
      onHover()
    } else {
      setTimeout(renderUfMaps, 1000);
      onHover()
    }
  };

  const getUfStatesSvgPaths = () => {
    const UfWrapper = document.getElementById('visualizations-map');

    if (!UfWrapper) {
      return [];
    }

    return Array.from(UfWrapper.getElementsByTagName('path'));
  };

  const handleSelectGranularity = (granularity: SelectOption) => {
    onSelectGranularity(granularity)
    if(indicatorSelected.data && stateQuery.id_estado){
      updateUrlQuery(indicatorSelected.data.variableName, stateQuery, granularity.value)
    }
  }

  const cityColor = (value: string): string => {
    if(!indicatorSelected.data) return paleSky

    const city = mapData.filter(d => d.idMunic7 === value)[0]

    if(!city) {
     return '';
    } else {
      return colorPalette(+city.value);
    }
  }

  const createLegends = () => {
    let values = mapData.map(i => +i.value);

    values.push(countryData.value)
    values.push(stateData.value)

    if(!indicatorSelected.data) return

    const decPlaces = indicatorSelected.data.decPlaces;
    const format = indicatorSelected.data.format;
    const maxValue = Math.max(...values.filter(d => d >= 0));
    const minValue = format === 'percent' ? 0 : Math.min(...values.filter(d => d >= 0));
    const middleValue = maxValue / 2;

    setLegend({
      start: format === 'percent' ? `${minValue.toFixed(decPlaces)}%`.replace('.', ',') : `${minValue.toFixed(decPlaces)}`.replace('.', ','),
      middle: format === 'percent' ? `${middleValue.toFixed(decPlaces)}%`.replace('.', ',') : `${middleValue.toFixed(decPlaces)}`.replace('.', ','),
      end: format === 'percent' ? `${maxValue.toFixed(decPlaces)}%`.replace('.', ',') : `${maxValue.toFixed(decPlaces)}`.replace('.', ',')
    })
  }

  const onHover = () => {
    let paths: Element[] = []

    if(!mapsLoading.isLoadingUfMapData) {
      const svg = document.querySelector('#visualizations-map > svg');
      const nodes = document.querySelectorAll('#visualizations-map-range > circle');

      if(svg) {
        const icons = svg.querySelectorAll('g > path')
        paths = Array.from(icons);

        if(paths.length > 0) {
          paths.forEach(path => {
            const node = Array.from(nodes).filter(node => node.id === `marker-${path.id}`)[0]

            path.addEventListener('mouseenter', () => showTooltip(path, node))
          })
          paths.forEach(path => {
            const node = Array.from(nodes).filter(node => node.id === `marker-${path.id}`)[0]
            path.addEventListener('mouseout', () => hideTooltip(path, node))
          })
        }
      }
    }

    return () => {
      paths.forEach(path => {path.removeEventListener('mouseenter', () => showTooltip(path))})
      paths.forEach(path => {path.removeEventListener('mouseout', () => hideTooltip(path))})
    }
  }

  const renderUfMaps = () => {
    const svgPaths = getUfStatesSvgPaths();

    if (svgPaths) {
      svgPaths.forEach((path) => {
        if(!path.id) {
          return
        }

        return path.setAttribute('fill', cityColor(path.id));
      });
    }

    createLegends()
  };

  const parseTooltipDate = (path: Element) => {
    const info = mapData.filter(data => data.idMunic7 === path.id)[0]

    if(!info) return

    const decPlaces = indicatorSelected.data.decPlaces;
    const value = +info.value;
    let infoValue = '-';

    if(+info.value >= 0 ) {
      infoValue = indicatorSelected.data.format === 'percent' ? `${value.toFixed(decPlaces)}%` : `${value.toFixed(decPlaces)}`
    }

    return {
      idMunic7: info.idMunic7,
      nomeMun: info.nomeMun,
      value: infoValue
    }
  }

  const showTooltip = (path: Element, node?: Element) => {

    const data = parseTooltipDate(path)

    if(!data) return

    node?.setAttribute('r', '12');
    node?.setAttribute('style', `fill: ${colorPalette(+data.value.replace('%',''))}; stroke: rgb(255, 255, 255); opacity: 1; stroke-width: 2;`);

    setTooltipInfo({
      id: data.idMunic7,
      label: data.nomeMun,
      value: data.value.replace('.', ','),
      color: colorPalette(+data.value.replace('%',''))
    })
    setIsTooltip(true);
  }

  const hideTooltip = (path: Element, node?: Element) => {
    const data = parseTooltipDate(path)

    if(!data) return

    node?.setAttribute('r', '6');
    node?.setAttribute('style', `fill: ${colorPalette(+data.value.replace('%',''))}; stroke: rgb(255, 255, 255); opacity: 0.5; stroke-width: 0;`);
    setIsTooltip(false);
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
      `/visualizations?chart=1&indicator=${indicator}&state=${query.state}&id_estado=${query.id_estado}&year=${query.year}&granularity=${granularity}`
    );
  };

  useEffect(() => {
    initialValues()
  }, [])

  useEffect(() => {
    if(isCandle && indicatorSelected.data) {
      handleRenderMaps();
    };
  }, [mapData, isCandle, indicatorSelected])

  useLayoutEffect(() => {
    if(!mapsLoading.isLoadingUfMapData && indicatorSelected.data){
      setIsCandle(mapRangeChart(
        'visualizations-map-range',
        [mapData, 'cities'],
        [countryData, 'country'],
        [stateData, 'state'],
        indicatorSelected.data.format,
        indicatorSelected.data.decPlaces,
      ))
    }
  }, [mapData, indicatorSelected])

  useEffect(() => {
    indicatorSelected.data && setIndicatorAlert(vizIndicatorDocs(indicatorSelected.data.variableName))
  }, [indicatorSelected])
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
                placeholder="Selecione um estado"
                options={stateOptions}
                onChange={debounce(handleChangeStateName)}
                onSelect={handleSelectState}
                theme='visualization'
                value={stateQuery.state ? stateQuery.state : ''}
              />
            </div>
            <div id="packing-year">
              <Select
                placeholder="Selecione um ano"
                value={stateQuery.year ? stateQuery.year : ''}
                options={years}
                onChange={handleChangeYear}
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
            )}
          </S.SideText>
          <S.LineSeparator />
          <S.ButtonsContainer>
            <S.DownloadButton onClick={() => onDownloadChartImage('chart-map-ranking')}>
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

        <S.ChartWrapper id='chart-map-ranking'>
          {mapsLoading.isLoadingUfMapData && !isMessageHidden  && (
            <S.MessageWrapper>
              <span>Por favor, selecione os valores acima para exibir o gráfico</span>
            </S.MessageWrapper>
          )}
          <S.Tooltip
            isTooltip={isToolpit}
            color={tooltipInfo.color}
          >
            <span>{tooltipInfo.label}</span>
            <span id='percentage-tooltip'>{tooltipInfo.value}</span>
          </S.Tooltip>
          <div id='visualizations-map'>
            {mapData.filter(d => +d.value > 0).length ? (
              <UfState
                uf={stateQuery.id_estado as unknown as UfCod}
                isLoadingUfMapData={mapsLoading.isLoadingUfMapData}
                onRender={handleRenderMaps}
                granularity={granularitySelected.value}
              />
            ): '' }
          </div>
          <div id='visualizations-border'></div>
          <div id='range-indicator-bg'></div>
          {mapData.filter(d => +d.value > 0).length ? (
            <S.RangeIndicator id='visualizations-map-range-container'>
              <svg id='visualizations-map-range' />
            </S.RangeIndicator>
          ): ''}

          {mapData.filter(d => +d.value > 0).length ? (
            <S.IndicatorColorPalette>
              <div id='indicator-percentage-colors'>
                <div id='color-01'>
                  <span>{legend.start}</span>
                </div>
                <div id='color-02'></div>
                <div id='color-03'></div>
                <div id='color-04'></div>
                <div id='color-05'></div>
                <div id='color-06'>
                  <span>{legend.middle}</span>
                </div>
                <div id='color-07'></div>
                <div id='color-08'></div>
                <div id='color-09'></div>
                <div id='color-10'></div>
                <div id='color-11'>
                  <span>{legend.end}</span>
                </div>
              </div>
            </S.IndicatorColorPalette>
          ): ''}
          <ImageSignature showUp={showUpSignature} isBgColor={false} textAlign='center' paddingLeft='5.5rem'/>
        </S.ChartWrapper>
      </S.ChartContainer>
    </>
  );
};

export default Packing;
