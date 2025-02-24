import React, { useEffect, useState } from 'react';
import {
  BoxArrowUp,
  Download,
  ExclamationCircle,
  FileEarmarkText,
} from '../../../../components/icons';
import Select from '../../../../components/select';
import { SelectOption } from '../../../../store/types';
import dispersionChart, { hideDispersionTooltip, showDispersionTooltip } from './Dispersion.chart';

import * as S from './Dispersion.css';
import { DataToDispersion } from '../../../../store/visualizations/visualizations.types';
import Pagination from '../../../../components/Pagination';

import Clipboard from '../../../../components/Clipboard';
import debounce from '../../../../utils/debounce';
import { IndicatorAlert } from '../../../../utils/indicators-adapter/ParseJsonData';
import vizIndicatorDocs from '../../../../utils/indicators-adapter';
import { indicatorGroup } from '../../../MethodsAndDocumentation/MethodsAndDocumentation';
import INDICATORS from '../../../MethodsAndDocumentation/components/Indicator/data/indicators';
import ImageSignature from '../../../../components/ImageSignature';
import Watermark from '../../../../components/Watermark';

interface tooltipData {
  firstIndicator: string;
  secondIndicator: string;
  firstValue: string;
  secondValue: string;
  position: {
    x: number;
    y: number;
  };
  title: string;
  type: string;
  isVisible: boolean;
  year: string;
}

interface CityQuery {
  city: string;
  cityCode: string;
  uf: string;
  region: string;
  macroRegion: string;
  year: string;
}

interface Props {
  pageUrl: string;
  onReportError: () => void;
  onDownloadChartImage: (htmElementID: string) => void;
  firstIndicator: SelectOption[];
  secondIndicator: SelectOption[];
  cityOptions: SelectOption[];
  cityData: DataToDispersion;
  countryData: DataToDispersion;
  stateData: DataToDispersion;
  regionData: DataToDispersion;
  macroRegionData: DataToDispersion;
  citiesData: DataToDispersion[];
  years: SelectOption[];
  firstIndicatorSelected: SelectOption;
  secondIndicatorSelected: SelectOption;
  cityQuery: CityQuery;
  showUpSignature: boolean;
  onSelectFirstIndicator: (indicator: SelectOption) => void;
  onChangeFirstIndicator: (indicator: string) => void;
  onSelectSecondIndicator: (indicator: SelectOption) => void;
  onChangeSecondIndicator: (indicator: string) => void;
  onChangeDispersionYear: (year: string) => void;
  onSelectDispersionYear: (query: any) => void;
  onSelectDispersionCity: (query: any) => void;
  onChangeDispersionCityName: (query: any) => void;
  initialValues: () => void;
}

const Dispersion = ({
  pageUrl,
  onReportError,
  onDownloadChartImage,
  firstIndicator,
  secondIndicator,
  cityOptions,
  cityData,
  countryData,
  stateData,
  regionData,
  macroRegionData,
  citiesData,
  years,
  firstIndicatorSelected,
  secondIndicatorSelected,
  cityQuery,
  showUpSignature,
  onSelectFirstIndicator,
  onChangeFirstIndicator,
  onSelectSecondIndicator,
  onChangeSecondIndicator,
  onChangeDispersionYear,
  onSelectDispersionYear,
  onSelectDispersionCity,
  onChangeDispersionCityName,
  initialValues
}: Props) => {
  const [chartIsLoaded, setChartIsLoaded] = useState(false);
  const [firstIndicatorAlert, setFirstIndicatorAlert] = useState({} as IndicatorAlert);
  const [secondIndicatorAlert, setSecondIndicatorAlert] = useState({} as IndicatorAlert);
  const [chartData, setChartData] = useState<DataToDispersion[]>([]);
  const [tableData, setTableData] = useState<DataToDispersion[]>([]);
  const [docUrl, setDocUrl] = useState('');

  const [page, setPage] = useState(1);
  const perPage = 14;

  const handleSelectFirstIndicator = (indicator: SelectOption) => {
    onSelectFirstIndicator(indicator)

    const group = indicatorGroup.filter(item => item.label === indicator.data.bloco)[0];
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

    if(cityQuery.city) {
      updateUrlQuery(indicator.data.variableName, secondIndicatorSelected.data.variableName, cityQuery)
    }
  }

  const handleChangeFirstIndicator = (indicator: string) => {
    onChangeFirstIndicator(indicator)
  }

  const handleSelectSecondIndicator = (indicator: SelectOption) => {
    onSelectSecondIndicator(indicator)

    if(cityQuery.city && firstIndicatorSelected.data) {
      updateUrlQuery(firstIndicatorSelected.data.variableName, indicator.data.variableName, cityQuery)
    }
  }

  const handleChangeSecondIndicator = (indicator: string) => {
    onChangeSecondIndicator(indicator)
  }

  const handleChangeYear = (year: string) => {
    onChangeDispersionYear(year);
  }

  const handleSelectYear = (year: SelectOption) => {
    const query = {
      ...cityQuery,
      year: year.value
    };

    onSelectDispersionYear(query);
    if(cityQuery.city) {
      updateUrlQuery(firstIndicatorSelected.data.variableName, secondIndicatorSelected.data.variableName, query)
    }
  }

  const handleSelectCity = (cityOption: SelectOption) => {
    const query = {
      ...cityQuery,
      city: cityOption.label,
      cityCode: cityOption.value,
      uf: cityOption.data.uf,
      region: cityOption.data.regiao,
      macroRegion: cityOption.data.macrorregiao
    };

    onSelectDispersionCity(query)
    if(!!firstIndicatorSelected.value && !!secondIndicatorSelected.value) {
      updateUrlQuery(firstIndicatorSelected.data.variableName, secondIndicatorSelected.data.variableName, query)
    }
  }

  const handleChangeCityName = (city: string) => {
    const query = {
      ...cityQuery,
      city
    };

    onChangeDispersionCityName(query);
  }

  const handleNavigateToDocs = () => {
    if(!firstIndicatorSelected.value) {
      return
    }

    const protocol = window.location.protocol
    const host = window.location.host

    window.location.replace(`${protocol}//${host}/${docUrl}`)
  }

  const updateUrlQuery = (firstIndicator: string, SecondIndicator: string, query: any) => {
    window?.history?.pushState(
      'IEPS',
      'IEPS',
      `/visualizations?chart=3&firstIndicator=${firstIndicator}&secondIndicator=${SecondIndicator}&cityCode=${query.cityCode}&region=${query.region}&uf=${query.uf}&macroRegion=${query.macroRegion}&year=${query.year}`
    );
  };

  const checkYValueFormat = (value: number) => {
    if(value === -1 || typeof value === 'undefined') return '-';

    return firstIndicatorSelected.data.format === 'percent'
    ? `${value.toFixed(firstIndicatorSelected.data.decPlaces)}%`.replace('.', ',')
    : `${value.toFixed(firstIndicatorSelected.data.decPlaces)}`.replace('.', ',')
  }
  const checkXValueFormat = (value: number) => {
    if(value === -1 || typeof value === 'undefined') return '-';

    return secondIndicatorSelected.data.format === 'percent'
    ? `${value.toFixed(secondIndicatorSelected.data.decPlaces)}%`.replace('.', ',')
    : `${value.toFixed(secondIndicatorSelected.data.decPlaces)}`.replace('.', ',')
  }

  useEffect(() => {
    initialValues()
  }, [])

  useEffect(() => {
    // eslint-disable-next-line prefer-const
    let data: DataToDispersion[] = [];

    if(cityData.id) {
      data.push(countryData)
      data.push(stateData)
      data.push(regionData)
      data.push(macroRegionData)
      data.push(cityData)
      data.push(...citiesData)

      setChartData(data)
    }
  }, [cityData]);

  useEffect(() => {
    if(chartData.length > 0 && firstIndicatorSelected.label && secondIndicatorSelected.label){
      setChartIsLoaded(
        dispersionChart(
          chartData,
          firstIndicatorSelected.data.abreviacoes,
          secondIndicatorSelected.data.abreviacoes,
          cityQuery.year,
          firstIndicatorSelected.data.format,
          firstIndicatorSelected.data.decPlaces,
          secondIndicatorSelected.data.format,
          secondIndicatorSelected.data.decPlaces,
        )
      );
    }
  }, [chartData, firstIndicatorSelected, secondIndicatorSelected])


  useEffect(() => {
    firstIndicatorSelected.data && setFirstIndicatorAlert(vizIndicatorDocs(firstIndicatorSelected.data.variableName))
    secondIndicatorSelected.data && setSecondIndicatorAlert(vizIndicatorDocs(secondIndicatorSelected.data.variableName))
  }, [firstIndicatorSelected, secondIndicatorSelected])

  return (
    <>
      <S.Header>
        <S.IndicatorsContainer>
          <S.line>
            <div id="dispersion-indicator-1">
              <Select
                isDataFromServer
                placeholder="Selecione o primeiro indicador"
                options={firstIndicator}
                onChange={debounce(handleChangeFirstIndicator)}
                onSelect={handleSelectFirstIndicator}
                theme='visualization'
                value={firstIndicatorSelected.label ? firstIndicatorSelected.label : ''}
              />
            </div>
            <div id="dispersion-indicator-2">
              <Select
                isDataFromServer
                placeholder="Selecione o segundo indicador"
                options={secondIndicator}
                onChange={debounce(handleChangeSecondIndicator)}
                onSelect={handleSelectSecondIndicator}
                theme='visualization'
                value={secondIndicatorSelected.label ? secondIndicatorSelected.label : ''}
              />
            </div>
          </S.line>
          <S.line>
            <div id="dispersion-location">
              <Select
                isDataFromServer
                placeholder="Selecione uma cidade"
                emptyMessage="Digite o nome da cidade desejada..."
                options={cityOptions}
                onChange={debounce(handleChangeCityName)}
                onSelect={handleSelectCity}
                theme='visualization'
                value={cityQuery.city ? cityQuery.city : ''}
              />
            </div>
            <div id="dispersion-year">
              <Select
                value={cityQuery.year}
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
            { (!firstIndicatorAlert.nome_variavel && !secondIndicatorAlert.nome_variavel) ? (
                <S.MessageWrapper>
                  <span>Por favor, selecione um indicador para mais informações</span>
                </S.MessageWrapper>
              ) : (firstIndicatorAlert.nome_variavel && !secondIndicatorAlert.nome_variavel) ? (
                <S.TextWrapper>
                  <S.Title>sobre os indicadores:</S.Title>
                    <p>
                      {firstIndicatorAlert.descricao}
                    </p>
                  {firstIndicatorAlert.mensagem_alerta && (
                    <>
                      <S.WarningText>Cuidado na interpretação!</S.WarningText>
                      <S.Quote>
                        <p>
                          {firstIndicatorAlert.mensagem_alerta}
                        </p>
                      </S.Quote>
                    </>
                  )}
                  {(cityQuery.year == 'em 2022') && (
                    <>
                      <S.WarningText>Atenção!</S.WarningText>
                      <S.Quote>
                        <p>
                          Adicionamos os dados de 2022 utilizando a população do Censo 2022. Para anos anteriores utilizamos a população estimada pelo Ministério da Saúde.
                        </p>
                      </S.Quote>
                    </>
                  )}
                  {(cityQuery.year == 'em 2023') && (
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
                    Fonte: {firstIndicatorAlert.fonte}
                  </S.Source>
                </S.TextWrapper>
            ) : (secondIndicatorAlert.nome_variavel && !firstIndicatorAlert.nome_variavel) ? (
              <>
                <S.TextWrapper>
                  <S.Title>sobre os indicadores:</S.Title>
                    <p>
                      {secondIndicatorAlert.descricao}
                    </p>
                  {secondIndicatorAlert.mensagem_alerta && (
                    <>
                      <S.WarningText>Cuidado na interpretação!</S.WarningText>
                      <S.Quote>
                        <p>
                          {secondIndicatorAlert.mensagem_alerta}
                        </p>
                      </S.Quote>
                    </>
                  )}
                  {(cityQuery.year == 'em 2022') && (
                    <>
                      <S.WarningText>Atenção!</S.WarningText>
                      <S.Quote>
                        <p>
                          Adicionamos os dados de 2022 utilizando a população do Censo 2022. Para anos anteriores utilizamos a população estimada pelo Ministério da Saúde.
                        </p>
                      </S.Quote>
                    </>
                  )}
                  {(cityQuery.year == 'em 2023') && (
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
                    Fonte: {secondIndicatorAlert.fonte}
                  </S.Source>
                </S.TextWrapper>
              </>
            ) : (
              <>
                <S.TextWrapper>
                  <S.Title>sobre os indicadores:</S.Title>
                    <p>
                      {firstIndicatorAlert.descricao}
                    </p>
                  {firstIndicatorAlert.mensagem_alerta && (
                    <>
                      <S.WarningText>Cuidado na interpretação!</S.WarningText>
                      <S.Quote>
                        <p>
                          {firstIndicatorAlert.mensagem_alerta}
                        </p>
                      </S.Quote>
                    </>
                  )}
                  {(cityQuery.year == 'em 2022') && (
                    <>
                      <S.WarningText>Atenção!</S.WarningText>
                      <S.Quote>
                        <p>
                          Adicionamos os dados de 2022 utilizando a população do Censo 2022. Para anos anteriores utilizamos a população estimada pelo Ministério da Saúde.
                        </p>
                      </S.Quote>
                    </>
                  )}
                  {(cityQuery.year == 'em 2023') && (
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
                    Fonte: {firstIndicatorAlert.fonte}
                  </S.Source>
                </S.TextWrapper>
                <S.Separator>. . .</S.Separator>
                <S.TextWrapper>
                  <S.Title>sobre os indicadores:</S.Title>
                    <p>
                      {secondIndicatorAlert.descricao}
                    </p>
                  {secondIndicatorAlert.mensagem_alerta && (
                    <>
                      <S.WarningText>Cuidado na interpretação!</S.WarningText>
                      <S.Quote>
                        <p>
                          {secondIndicatorAlert.mensagem_alerta}
                        </p>
                      </S.Quote>
                    </>
                  )}
                  {(cityQuery.year == 'em 2022') && (
                    <>
                      <S.WarningText>Atenção!</S.WarningText>
                      <S.Quote>
                        <p>
                          Adicionamos os dados de 2022 utilizando a população do Censo 2022. Para anos anteriores utilizamos a população estimada pelo Ministério da Saúde.
                        </p>
                      </S.Quote>
                    </>
                  )}
                  {(cityQuery.year == 'em 2023') && (
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
                    Fonte: {secondIndicatorAlert.fonte}
                  </S.Source>
                </S.TextWrapper>
              </>
            ) }
          </S.SideText>
          <S.LineSeparator />
          <S.ButtonsContainer>
            <S.DownloadButton onClick={() => onDownloadChartImage('chart-dispersion-container')}>
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
        <S.ChartWrapper id='chart-dispersion-container'>
          {!chartIsLoaded && (
            <S.MessageWrapper>
              <span>Por favor, selecione os valores acima para exibir o gráfico</span>
            </S.MessageWrapper>
          )}

          <div id="chart-dispersion-legend"></div>
          <svg id="chart-dispersion"></svg>
          <ImageSignature showUp={showUpSignature} isBgColor={false} textAlign='center'/>
        </S.ChartWrapper>
      </S.ChartContainer>
      <S.TableContainer>
        {
          chartIsLoaded && (
            <>
              <S.Table>
                <thead>
                  <tr id="header-row-dispersion-table">
                    <td>Localidade</td>
                    <td>Região de Saúde</td>
                    <td className='table-header-indicator'>
                      <div>
                        <span>{firstIndicatorSelected.label}</span>
                      </div>
                    </td>
                    <td className='table-header-indicator'>
                      <div>
                        <span>{secondIndicatorSelected.label}</span>
                      </div>
                    </td>
                  </tr>
                </thead>
                <tbody>
                  {tableData.map((item) => (
                    <S.Tr
                      key={item.id}
                      local={item.category}
                      onMouseEnter={(e) => showDispersionTooltip(e, true)}
                      onMouseOut={(e) => hideDispersionTooltip(e)}>
                      <td>{item.local}</td>
                      <td>{item.microRegion}</td>
                      <td className={`table-body-indicators table-item-${item.id}`}>{checkYValueFormat(item.y)}</td>
                      <td className={`table-body-indicators table-item-${item.id}`}>{checkXValueFormat(item.x)}</td>
                    </S.Tr>
                  ))}
                </tbody>
              </S.Table>
              <S.TablePagination>
                <Pagination
                  page={page}
                  perPage={perPage}
                  data={chartData}
                  onPage={setPage}
                  onData={setTableData}
                />
              </S.TablePagination>
            </>
          )
        }
      </S.TableContainer>
    </>
  );
};

export default Dispersion;
