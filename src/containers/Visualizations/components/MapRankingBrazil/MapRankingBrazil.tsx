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

import * as S from './MapRankingBrazil.css';

import Clipboard from '../../../../components/Clipboard';
import debounce from '../../../../utils/debounce';
import { DataToMapRanking, DataToMapRankingBrazil, LocalToMapRanking } from '../../../../store/visualizations/visualizations.types';
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
  brazilMapData: DataToMapRankingBrazil[];
  years: SelectOption[];
  mapsLoading: ActionsStatus & { isLoadingUfMapData?: boolean };
  stateQuery: StateQuery;
  indicatorSelected: SelectOption;
  indicators:SelectOption[];
  isMessageHidden: boolean;
  showUpSignature: boolean;
  onSelectIndicator: (indicator: SelectOption) => void;
  onChangeIndicator: (indicator: string) => void;
  onChangeYear:(year: string) => void;
  onSelectMapRankingYear: (year: SelectOption) => void;
  initialValues: () => void;
}

const MapRankingBrazil = ({
  pageUrl,
  onReportError,
  onDownloadChartImage,
  brazilMapData,
  years,
  mapsLoading,
  stateQuery,
  indicatorSelected,
  indicators,
  isMessageHidden,
  showUpSignature,
  onSelectIndicator,
  onChangeIndicator,
  onChangeYear,
  onSelectMapRankingYear,
  initialValues,
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

    updateUrlQuery(indicator.data.variableName, stateQuery)
  }

  const handleChangeIndicator = (indicator: string) => {
    onChangeIndicator(indicator)
  }

  const handleChangeYear = (year: string) => {
    onChangeYear(year)
  }

  const handleSelectYear = (year: SelectOption) => {
    onSelectMapRankingYear(year);

    const query = {
      year: year.value
    };

    updateUrlQuery(indicatorSelected.data.variableName, query)
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

  const cityColor = (value: string): string => {
    if(!indicatorSelected.data) return paleSky

    const city = brazilMapData.filter(d => d.idEstado === value)[0]

    if(!city) {
     return '';
    } else {
      return colorPalette(+city.value);
    }
  }

  const createLegends = () => {
    let values = brazilMapData.map(i => +i.value);

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

  function getOffset(el) {
    const rect = el.getBoundingClientRect();
    return {
      left: ((rect.left +  window.scrollX) + (rect.width/2)),
      top: ((rect.top + window.scrollY) + (rect.height/2))
    };
  }

  const renderUfMaps = () => {
    const svgPaths = getUfStatesSvgPaths();

    if (svgPaths) {
      svgPaths.forEach((path) => {
        if(!path.id) {
          return
        }
        
        let text = "";
        let top = 0;
        let left = 0;

        switch(+path.id){
          case 12:
            text = "AC";
            top = 200;
            left = 120;
            break;
          case 27:
            text = "AL";
            top = 213;
            left = 519;
            break;
          case 13:
            text = "AM";
            top = 150;
            left = 209;
            break;
          case 16:
            text = "AP";
            top = 84;
            left = 343;
            break;
          case 29:
            text = "BA";
            top = 243;
            left = 458;
            break;
          case 23:
            text = "CE";
            top = 160;
            left = 485;
            break;
          case 53:
            text = "DF";
            top = 280;
            left = 390;
            break;
          case 32:
            text = "ES";
            top = 326;
            left = 474;
            break;
          case 52:
            text = "GO";
            top = 286;
            left = 367;
            break;
          case 21:
            text = "MA";
            top = 158;
            left = 417;
            break;
          case 31:
            text = "MG";
            top = 311;
            left = 427;
            break;
          case 50:
            text = "MS";
            top = 332;
            left = 308;
            break;
          case 51:
            text = "MT";
            top = 249;
            left = 295;
            break;
          case 15:
            text = "PA";
            top = 152;
            left = 329;
            break;
          case 25:
            text = "PB";
            top = 182;
            left = 525;
            break;
          case 26:
            text = "PE";
            top = 197;
            left = 500;
            break;
          case 22:
            text = "PI";
            top = 84;
            left = 343;
            break;
          case 41:
            text = "PR";
            top = 384;
            left = 346;
            break;
          case 33:
            text = "RJ";
            top = 358;
            left = 451;
            break;
          case 24:
            text = "RN";
            top = 167;
            left = 520;
            break;
          case 11:
            text = "RO";
            top = 225;
            left = 213;
            break;
          case 14:
            text = "RR";
            top = 75;
            left = 230;
            break;
          case 43:
            text = "RS";
            top = 440;
            left = 324;
            break;
          case 42:
            text = "SC";
            top = 414;
            left = 364;
            break;
          case 28:
            text = "SE";
            top = 223;
            left = 511;
            break;
          case 35:
            text = "SP";
            top = 353;
            left = 379;
            break;
          case 17:
            text = "TO";
            top = 219;
            left = 382;
            break;
        }

        let p = document.createElement("p");
        p.innerText = text;
        p.setAttribute("z-index", "100;");
        p.setAttribute(
          "style", 
          `font-size: 10px; color: #000; position: absolute; 
          top: ${top}px; 
          left: ${left}px;`
        );
        let div = document.getElementById("visualizations-map");
        div?.appendChild(p);


        return path.setAttribute('fill', cityColor(path.id));
      });
    }

    createLegends()
  };

  const parseTooltipDate = (path: Element) => {
    const info = brazilMapData.filter(data => data.idEstado === path.id)[0]

    if(!info) return

    const decPlaces = indicatorSelected.data.decPlaces;
    const value = +info.value;
    let infoValue = '-';

    if(+info.value >= 0 ) {
      infoValue = indicatorSelected.data.format === 'percent' ? `${value.toFixed(decPlaces)}%` : `${value.toFixed(decPlaces)}`
    }

    return {
      idMunic7: info.idEstado,
      nomeMun: info.estado,
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

  const updateUrlQuery = (indicator: string, query: any) => {
    window?.history?.pushState(
      'IEPS',
      'IEPS',
      `/visualizations?chart=5&indicator=${indicator}&year=${query.year}`
    );
  };

  useEffect(() => {
    initialValues()
  }, [])

  useEffect(() => {
    if(isCandle && indicatorSelected.data) {
      handleRenderMaps();
    };
  }, [brazilMapData, isCandle, indicatorSelected])

  useLayoutEffect(() => {
    if(!mapsLoading.isLoadingUfMapData && indicatorSelected.data){
      setIsCandle(mapRangeChart(
        'visualizations-map-range',
        [brazilMapData, 'cities'],
        indicatorSelected.data.format,
        indicatorSelected.data.decPlaces,
      ))
    }
  }, [brazilMapData, indicatorSelected])

  useEffect(() => {
    indicatorSelected.data && setIndicatorAlert(vizIndicatorDocs(indicatorSelected.data.variableName))
  }, [indicatorSelected])
  return (
    <>
      <S.Header>
        <S.IndicatorsContainer>
          <S.line>
            <div id="map-ranking-brazil-indicator">
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
            <div id="map-ranking-brazil-year">
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

          {/* Message componente ----------------------------------------------------------------------------*/}
          {mapsLoading.isLoadingUfMapData && !isMessageHidden  && (
            <S.MessageWrapper>
              <span>Por favor, selecione os valores acima para exibir o gráfico</span>
            </S.MessageWrapper>
          )}
          
          {/* Map tooltip -----------------------------------------------------------------------------------*/}
          <S.Tooltip
            isTooltip={isToolpit}
            color={tooltipInfo.color}
          >
            <span>{tooltipInfo.label}</span>
            <span id='percentage-tooltip'>{tooltipInfo.value}</span>
          </S.Tooltip>

          {/* Map SVG wrapper -------------------------------------------------------------------------------*/}
          <div id='visualizations-map'>
            {/* Checking if char data was loaded */}
            {brazilMapData.filter(d => +d.value > 0).length ? (
              <UfState
                uf={"BRUF" as unknown as UfCod}
                isLoadingUfMapData={mapsLoading.isLoadingUfMapData}
                onRender={handleRenderMaps}
                granularity={"viz"}
              />
            ): '' }
          </div>

          {/* <div id='visualizations-border'></div> */}

          {/* Side range background ---------------------------------------------------------------------- */}
          <div id='range-indicator-bg'></div>

          {brazilMapData.filter(d => +d.value > 0).length ? (
            <S.RangeIndicator id='visualizations-map-range-container'>
              <svg id='visualizations-map-range' />
            </S.RangeIndicator>
          ): ''}

          {/* Color scale legend ------------------------------------------------------------------------- */}
          {brazilMapData.filter(d => +d.value > 0).length ? (
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

export default MapRankingBrazil;
