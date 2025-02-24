import React, { useEffect, useState } from 'react';
import Layout from '../../components/layout/Layout';
import domToImage from 'dom-to-image';
import { saveAs } from 'file-saver';
import Modal from '../../components/modal/modal';
import ReportError from '../LocalHealthPanorama/components/ReportError';
import { ActionsStatus, SelectOption } from '../../store/types';
import ChartOptions from './components/ChartOptions';

import TimeLine from './components/TimeLine';
import Dispersion from './components/Dispersion';

import * as S from './Visualization.css'
import Packing from './components/Packing';
import MapRanking from './components/MapRanking';
import MapRankingBrazil from './components/MapRankingBrazil';
import Head from '../../components/Head';
import { useQueryParam } from 'use-query-params';
import { useDispatch, useSelector } from '../../store';
import {
  getCirclePackingData,
  getCitiesToTimeLine,
  getRegionsToTimeLine,
  getMacrosToTimeLine,
  getStatesToTimeLine,
  getCityByCityCode,
  getDataToDispersion, getDataToTimeLine,
  getFirstIndicatorsToDispersion,
  getIndicatorsToVisualization,
  getMapRankingData,
  getSecondIndicatorsToDispersion,
  getStates,
  searchFirsIndicatorByVariableNameToVisualization,
  searchFirstIndicatorToDispersion,
  searchIndicatorByVariableNameToVisualization,
  searchIndicatorToVisualization,
  searchSecondIndicatorByVariableNameToVisualization,
  searchSecondIndicatorToDispersion,
  searchStates,
  getMapRankingBrazilData,
  getRegionsToTimeLineByState,
  getMacrosToTimeLineByState,
} from '../../store/visualizations/visualizations.saga';
import {
  CirclePackingData,
  DataToDispersion,
  DataToMapRanking,
  DataToMapRankingBrazil,
  DataToTimeLine,
  LocalToMapRanking
} from '../../store/visualizations/visualizations.types';
import * as visualizationSelectors from '../../store/visualizations/visualizations.selectors';
import * as ufCitiesSelectors from '../../store/uf-cities/uf-cities.selectors';
import { getCities } from '../../store/uf-cities/uf-cities.sagas';
import InvalidQuery from './components/InvalidQuery';
import { PackingStateQuery } from './components/Packing/Packing';
import { availableYears } from '../../utils/date-time/availableYears';
import _ from 'lodash';

const GRANULARITY = [
  {
    label: 'Município',
    value: 'viz',
  },
  {
    label: 'Região de Saúde',
    value: 'vizReg',
  },
  {
    label: 'Macrorregião de Saúde',
    value: 'vizMacro',
  },
];

const TIME_LINE_GRANULARITY = [
  {
    label: 'Município',
    value: 'viz',
  },
  {
    label: 'Região de Saúde',
    value: 'vizReg',
  },
  {
    label: 'Macrorregião de Saúde',
    value: 'vizMacro',
  },
  {
    label: 'Estado',
    value: 'vizEst',
  },
];

const initialYears = availableYears.map(item => ({
  label: `em ${item}`,
  value: `em ${item}`,
}))
//state inicial query
const initialStateQuery = {state: '',uf: '' ,year: `em ${availableYears[0]}`, id_estado: ''}

const downloadErrorMessage =
  'Não foi possível fazer o download da imagem, tente novamente mais tarde e caso o errro persista entre em contato conosco.';

const Visualizations = ({ location }) => {
  const [openModal, setOpenModal] = useState(false);
  const [openInvalidQueryModal, setOpenInvalidQueryModal] = useState(false);
  const [chartSelected, setChartSelected] = useState('');
  const [chartNameSelected, setChartNameSelected] = useState('Mapa + Ranking');
  const [currentUrl, setCurrentUrl] = useState('');

  // General selectors
  const indicators = useSelector<SelectOption[]>(visualizationSelectors.selectIndicatorOptions);
  const stateOptions = useSelector<SelectOption[]>(visualizationSelectors.stateOptions);
  const years = useSelector<SelectOption[]>(ufCitiesSelectors.selectYears);
  const cityOptions = useSelector<SelectOption[]>(visualizationSelectors.cityOptions);
  const regionsOptions = useSelector<SelectOption[]>(visualizationSelectors.regionsOptions);
  const macrosOptions = useSelector<SelectOption[]>(visualizationSelectors.macrosOptions);
  const [bloqYears, setBloqYears] = useState(initialYears);

  // General states
  const [stateQuery, setStateQuery] = useState(initialStateQuery);
  const [cityQuery, setCityQuery] = useState({city: '', year:`em ${availableYears[0]}`, cityCode:'', uf:'', region:'', macroRegion: ''});
  const [regionQuery, setRegionQuery] = useState({region:'', uf:'', macroCode: '', regionCode:''});
  const [macroQuery, setMacroQuery] = useState({macroRegion:'', uf:'', macroCode: ''});
  // eslint-disable-next-line prettier/prettier
  const [indicatorSelected, setIndicatorSelected] = useState({} as SelectOption);
  const [packingFromUrl, setPackingFrom] = useState(false);
  const [showUpSignature, setShowUpSignature] = useState(false);
  const [granularitySelected, setGranularitySelected] = useState({} as SelectOption);
  const [granularitySelectedToTimeLine, setGranularitySelectedToTimeLine] = useState({} as SelectOption);


  // States from Dispersion
  const [firstIndicatorSelected, setFirstIndicatorSelected] = useState({} as SelectOption);
  const [secondIndicatorSelected, setSecondIndicatorSelected] = useState({} as SelectOption);
  const cityOptionsToDispersion = useSelector<SelectOption[]>(ufCitiesSelectors.selectCityOptions);

  // Selectors from dispersion
  const firstIndicator = useSelector<SelectOption[]>(visualizationSelectors.selectFirstIndicatorOptions);
  const secondIndicator = useSelector<SelectOption[]>(visualizationSelectors.selectSecondIndicatorOptions);
  const cityData = useSelector<DataToDispersion>(visualizationSelectors.cityData);
  const countryData = useSelector<DataToDispersion>(visualizationSelectors.countryDispersionData);
  const stateData = useSelector<DataToDispersion>(visualizationSelectors.stateDispersionData);
  const regionData = useSelector<DataToDispersion>(visualizationSelectors.regionData);
  const macroRegionData = useSelector<DataToDispersion>(visualizationSelectors.macroRegionData);
  const citiesData = useSelector<DataToDispersion[]>(visualizationSelectors.citiesData);


  // Selectors of circle packing chart
  const circlePackingChartData = useSelector<CirclePackingData>(visualizationSelectors.dataToCirclePacking);

  // Selectors from time line chart
  const timeLineChartData = useSelector<DataToTimeLine>(visualizationSelectors.dataToTimeLine);

  // States from MapRanking
  const [isMessageHidden, setIsMessageHidden] = useState(false);

  // Selectors from MapRanking
  const mapData = useSelector<DataToMapRanking[]>(visualizationSelectors.dataToMapRanking);
  const mapsLoading = useSelector<ActionsStatus & { isLoadingUfMapData?: boolean }>(visualizationSelectors.selectLoadings);
  const countryMapRankingData = useSelector<LocalToMapRanking>(visualizationSelectors.countryData);
  const stateMapRankingData = useSelector<LocalToMapRanking>(visualizationSelectors.stateData);

  // Selectors from MapRankingBrazil
  const brazilMapData = useSelector<DataToMapRankingBrazil[]>(visualizationSelectors.dataToMapRankingBrazil);
  const brazilMapsLoading = useSelector<ActionsStatus & { isLoadingUfMapData?: boolean }>(visualizationSelectors.selectLoadings);

  const dispatch = useDispatch();

  const [firstIndicatorQuery] = useQueryParam('firstIndicator');
  const [secondIndicatorQuery] = useQueryParam('secondIndicator');
  const [indicatorQuery] = useQueryParam('indicator');
  const [cityCode] = useQueryParam('cityCode');
  const [state] = useQueryParam('state');
  const [id_estado] = useQueryParam('id_estado');
  const [region] = useQueryParam('region');
  const [uf] = useQueryParam('uf');
  const [macroRegion] = useQueryParam('macroRegion');
  const [year] = useQueryParam('year');
  const [granularity] = useQueryParam('granularity');
  const [chart] = useQueryParam('chart');

  const checkInvalidQuery = (query: any) => {
    const yearFormatted = +query.year.replace('em ', '');

    switch (true) {
      case (query.cityCode === '421265' && yearFormatted <= 2013):
        setOpenInvalidQueryModal(true)
        return true;
      case (query.cityCode === '422000' && yearFormatted <= 2013):
        setOpenInvalidQueryModal(true)
        return true;
      case (query.cityCode === '431454' && yearFormatted <= 2013):
        setOpenInvalidQueryModal(true)
        return true;
      case (query.cityCode === '500627' && yearFormatted <= 2013):
        setOpenInvalidQueryModal(true)
        return true;
      case (query.cityCode === '150475' && yearFormatted <= 2013):
        setOpenInvalidQueryModal(true)
        return true;
      default:
        break;
    }
  }

  const checkPackingInvalidData = (packingData: CirclePackingData) => {
    if(packingData && Object.keys(packingData).length === 0 && Object.getPrototypeOf(packingData) === Object.prototype) {
      return
    }

    if(
      packingData.children.map(child => (
        child.name.substr(5).split(' - ')[0].trim())
      ).filter(name => name !== '-1' && name !== 'Infinity').length
    ) {
      return
    } else {
      setOpenInvalidQueryModal(true);
    }
  }
  const checkMapInvalidData = (
    mapData: DataToMapRanking[],
  ) => {
    if(!mapData.length) return;

    if(mapData.filter(d => +d.value > 0).length) {
      return
    } else {
      setOpenInvalidQueryModal(true);
    }


  }
  const checkBrazilMapInvalidData = (
    mapData: DataToMapRankingBrazil[],
  ) => {
    if(!mapData.length) return;

    if(mapData.filter(d => +d.value > 0).length) {
      return
    } else {
      setOpenInvalidQueryModal(true);
    }

  }

  // ********** Dispersion Chart functions ************

  const getInitialValuesToPackingToDispersion = () => {
    if(chart === '3') {
      return;
    }

    getFirstIndicatorsToDispersion(dispatch)();
    getSecondIndicatorsToDispersion(dispatch)();
    setBloqYears(initialYears);

  }

  const handleSelectFirstIndicator = (indicator: SelectOption) => {


    const indicatorIndex = indicators.findIndex(item => item.label === (indicator.label));
    let yearBloq: string[] = []
    indicator.data.abreviacoes = indicators[indicatorIndex].data.abreviacoes;
    indicator.data.bloq_anos = [];

    if(indicators[indicatorIndex].data.bloq_anos !== '-1'){
      yearBloq = indicators[indicatorIndex].data.bloq_anos.split('-').map((item: string) => {
        return `em ${item}`
      });
      indicator.data.bloq_anos = yearBloq;

      if(Object.keys(secondIndicatorSelected).length === 0){
        setBloqYears(years)
      }else{
        const secondYearBloq = secondIndicatorSelected.data.bloq_anos;
        yearBloq = [...yearBloq, ...secondYearBloq]
        setBloqYears(years.filter(element => !yearBloq.includes(element.value)));
      }
    }else{
      if(Object.keys(secondIndicatorSelected).length === 0){
        setBloqYears(years)
      }else{
        setBloqYears(years.filter(element => !secondIndicatorSelected.data.bloq_anos.includes(element.value)));
      }
    }

    setFirstIndicatorSelected(indicator)

    if(yearBloq.includes(cityQuery.year)){
      setOpenInvalidQueryModal(true);
    }
    if(cityQuery.city && secondIndicatorSelected.data) {
      if(checkInvalidQuery(cityQuery)) return;
      getDataToDispersion(dispatch)(
        cityQuery.cityCode,
        cityQuery.year,
        cityQuery.uf,
        cityQuery.region,
        cityQuery.macroRegion,
        indicator.data.variableName,
        secondIndicatorSelected.data.variableName
      )
    }
  }

  const handleChangeFirstIndicator = (indicator: string) => {
    searchFirstIndicatorToDispersion(dispatch)(indicator)
  }

  const handleSelectSecondIndicator = (indicator: SelectOption) => {
    const indicatorIndex = indicators.findIndex(item => item.label === (indicator.label));
    let yearBloq: string[] = []

    indicator.data.abreviacoes = indicators[indicatorIndex].data.abreviacoes;
    indicator.data.bloq_anos = [];

    if(indicators[indicatorIndex].data.bloq_anos !== '-1'){
      yearBloq = indicators[indicatorIndex].data.bloq_anos.split('-').map((item: string) => {
        return `em ${item}`
      });
      indicator.data.bloq_anos = yearBloq;

      if(Object.keys(firstIndicatorSelected).length === 0){
        setBloqYears(years)
      }else{
        const secondYearBloq = firstIndicatorSelected.data.bloq_anos;
        yearBloq = [...yearBloq, ...secondYearBloq]
        setBloqYears(years.filter(element => !yearBloq.includes(element.value)));
      }
    }else{
      if(Object.keys(firstIndicatorSelected).length === 0){
        setBloqYears(years)
      }else{
        setBloqYears(years.filter(element => !firstIndicatorSelected.data.bloq_anos.includes(element.value)));
      }
    }

    setSecondIndicatorSelected(indicator);

    if(yearBloq.includes(cityQuery.year)){
      setOpenInvalidQueryModal(true);
    }

    if(cityQuery.city && firstIndicatorSelected.data) {
      if(checkInvalidQuery(cityQuery)) return;
      getDataToDispersion(dispatch)(
        cityQuery.cityCode,
        cityQuery.year,
        cityQuery.uf,
        cityQuery.region,
        cityQuery.macroRegion,
        firstIndicatorSelected.data.variableName,
        indicator.data.variableName)
    }
  }

  const handleChangeSecondIndicator = (indicator: string) => {
    searchSecondIndicatorToDispersion(dispatch)(indicator)
  }

  const handleChangeDispersionYear = (year: string) => {
    setCityQuery(current=> ({
      ...current,
      year
    }));
  }

  const handleSelectDispersionYear = (query: any) => {
    setCityQuery(query);

    if(checkInvalidQuery(query)) return;

    if(cityQuery.city) {
      getDataToDispersion(dispatch)(
        query.cityCode,
        query.year,
        query.uf,
        query.region,
        query.macroRegion,
        firstIndicatorSelected.data.variableName,
        secondIndicatorSelected.data.variableName
      )
    }
  }

  const handleSelectDispersionCity = (query: any) => {
    setCityQuery(query)

    if(checkInvalidQuery(query)) return;

    if(!!firstIndicatorSelected.value && !!secondIndicatorSelected.value) {
      getDataToDispersion(dispatch)(
        query.cityCode,
        query.year,
        query.uf,
        query.region,
        query.macroRegion,
        firstIndicatorSelected.data.variableName,
        secondIndicatorSelected.data.variableName
      )
    }
  }

  const handleChangeDispersionCityName = (query: any) => {
    setCityQuery(query);
    getCities(dispatch)(query.city, query.year);
  }

  // **********

  // ********** Circle Packing Chart functions ************

  const handleChangePackingStateName = (state: string) => {
    const query = {
      ...stateQuery,
      state
    };

    setStateQuery(query);
    searchStates(dispatch)(query.state, query.year);
  }

  const handleSelectPackingState = (query: any) => {
    setStateQuery(query);
    if(indicatorSelected.data){
      getCirclePackingData(dispatch)(query.id_estado, query.year, indicatorSelected.data.variableName, granularitySelected.value)
    }
  }

  const handleSelectGranularityToPacking = (granularity: SelectOption) => {
    setGranularitySelected(granularity)
    if(indicatorSelected.data && stateQuery.id_estado){
      getCirclePackingData(dispatch)(stateQuery.id_estado, stateQuery.year, indicatorSelected.data.variableName, granularity.value)
    }
  }

  const getInitialValuesToPacking = () => {
    if(chart === '4') {
      return;
    }

    getIndicatorsToVisualization(dispatch)();
    getStates(dispatch)();
    setBloqYears(initialYears);
    setStateQuery({...stateQuery, year:`em ${availableYears[0]}`});

    if(indicatorSelected.data && stateQuery.id_estado){
      getCirclePackingData(dispatch)(stateQuery.id_estado, `em ${availableYears[0]}`, indicatorSelected.data.variableName, granularitySelected.value)
    }
  }

  const handleSelectPackingYear = (year: SelectOption) => {
    const query = {
      ...stateQuery,
      year: year.value
    };

    setStateQuery(query);
    if(indicatorSelected.data && query.id_estado){
      getCirclePackingData(dispatch)(query.id_estado, query.year, indicatorSelected.data.variableName, granularitySelected.value)
    }
  }

  const handleSelectPackingIndicator = (indicator: SelectOption) => {
    setIndicatorSelected(indicator)

    if(indicator.data.bloq_anos  !== '-1'){

      const yearBloq = indicator.data.bloq_anos.split('-').map((item: string) => {
        return `em ${item}`
      });

      setBloqYears(years.filter(element => !yearBloq.includes(element.value)));

      }else{
        setBloqYears(years);
      }


    if(stateQuery.id_estado){
      getCirclePackingData(dispatch)(stateQuery.id_estado, stateQuery.year, indicator.data.variableName, granularitySelected.value)
    }
  }

  // **********

  // ********** Time Line Chart functions ************

  const getInitialValuesToTimeLine = () => {
    if(chart === '2') {
      return;
    }
    getIndicatorsToVisualization(dispatch)();
    getStates(dispatch)();
    setBloqYears(initialYears);
  }

  const listBloqIndicators = () =>{
    const bloqIndicators = indicators.filter( element =>  'Ao longo do tempo' !== element.data.bloq_viz);
    return bloqIndicators;
  }

  const handleSelectTimeLineIndicator = (indicator: SelectOption) => {
    setIndicatorSelected(indicator)

    if(cityQuery.cityCode && granularitySelectedToTimeLine.value) {
      getDataToTimeLine(dispatch)(cityQuery.cityCode, indicator.data.variableName, cityQuery.macroRegion, cityQuery.uf, cityQuery.region)
    }
  }

  const handleSelectTimeLineLocation = (query: any) => {
    if(indicatorSelected.value) {
      switch (granularitySelectedToTimeLine.value) {
        case 'viz':
          setCityQuery(query);
          getDataToTimeLine(dispatch)(
            indicatorSelected.data.variableName, 
            query.uf, 
            query.cityCode, 
            query.macroRegion, 
            query.region
          )
          break;
        case 'vizEst':
          setStateQuery(query);
          getDataToTimeLine(dispatch)(
            indicatorSelected.data.variableName, 
            query.uf, 
            undefined, 
            undefined, 
            undefined,
          )
          break;
        case 'vizReg':
          setRegionQuery(query);
          getDataToTimeLine(dispatch)(
            indicatorSelected.data.variableName, 
            query.uf, 
            undefined, 
            query.macroCode, 
            query.regionCode
          )
          break;
        case 'vizMacro':
          setMacroQuery(query);
          getDataToTimeLine(dispatch)(
            indicatorSelected.data.variableName, 
            query.uf, 
            undefined, 
            query.macroCode, 
            undefined
          )
          break;
        default:
          break;
      }
    }
  }

  const handleChangeTimeLineStateName = (state: string) => {
    const query = {
      ...stateQuery,
      state
    };

    setStateQuery(query);
    searchStates(dispatch)(query.state, query.year);
  }

  const handleSelectTimeLineState = (query: any) => {
    setStateQuery(query);
    const input = document.getElementById('time-line-location-input') as HTMLInputElement;
    
    const stateSelected = stateOptions.find(state => state.value == query.id_estado);
    
    if (_.isEmpty(stateSelected) || _.isEmpty(granularitySelectedToTimeLine))
      return

    switch (granularitySelectedToTimeLine.value) {
      case 'viz':
        if (input)
        {
          input.disabled = false;
        }
        break;
      case 'vizEst':
        getDataToTimeLine(dispatch)(
          indicatorSelected.data.variableName, 
          stateSelected.data.uf, 
          undefined, 
          undefined, 
          undefined,
        )
        if (input)
        {
          input.disabled = true;
        }
        break;
      case 'vizReg':
        getRegionsToTimeLineByState(dispatch)(stateSelected.value);
        if (input)
          {
            input.disabled = false;
          }
        break;
      case 'vizMacro':
        getMacrosToTimeLineByState(dispatch)(stateSelected.data.uf);
          if (input)
          {
            input.disabled = false;
          }
        break;
      default:
        break;
    }

  }

  const handleSelectGranularityToTimeLine = (granularity: SelectOption) => {
    setGranularitySelectedToTimeLine(granularity)
    const input = document.getElementById('time-line-location-input') as HTMLInputElement;

    const stateSelected = stateOptions.find(state => state.value == stateQuery.id_estado);

    if (_.isEmpty(stateSelected))
      return

    switch (granularity.value) {
      case 'viz':
        if (input)
        {
          input.disabled = false;
        }
        break;
      case 'vizEst':
        getDataToTimeLine(dispatch)(
          indicatorSelected.data.variableName, 
          stateSelected.data.uf, 
          undefined, 
          undefined, 
          undefined,
        )
        if (input)
        {
          input.disabled = true;
        }
        break;
      case 'vizReg':
        getRegionsToTimeLineByState(dispatch)(stateSelected.value);
        if (input)
          {
            input.disabled = false;
          }
        break;
      case 'vizMacro':
        getMacrosToTimeLineByState(dispatch)(stateSelected.data.uf);
          if (input)
          {
            input.disabled = false;
          }
        break;
      default:
        break;
    }
  }

  const handleChangeLocationName = (name: string) => {
    let query;

    switch (granularitySelectedToTimeLine.value) {
      case 'viz':
        query = { ...cityQuery,city: name}
        setCityQuery(query);
        getCitiesToTimeLine(dispatch)(query.city, stateQuery.id_estado);
        break;
      case 'vizEst':
        query = {...stateQuery, uf: name}
        setStateQuery(query);
        getStatesToTimeLine(dispatch)(query.uf);
        break;
      case 'vizReg':
        query = {...regionQuery, region: name}
        setRegionQuery(query);
        getRegionsToTimeLine(dispatch)(query.region);
        break;
      case 'vizMacro':
        query = {...macroQuery, macroRegion: name}
        setMacroQuery(query);
        getMacrosToTimeLine(dispatch)(query.macroRegion);
        break;
    
      default:
        break;
    }

  }

  // **********

  // ********** MapRanking Chart functions ************

  const getMapRankingInitialValues = () => {
    if(chart === '1') {
      return;
    }

    setBloqYears(initialYears);
    setStateQuery({...stateQuery, year:`em ${availableYears[0]}`});

    getIndicatorsToVisualization(dispatch)();
    getStates(dispatch)();


    if(stateQuery.id_estado !== '' && indicatorSelected.data.variableName) {
      getMapRankingData(dispatch)(stateQuery.id_estado, `em ${availableYears[0]}`, indicatorSelected.data.variableName, granularitySelected.value)
    }
  }

  const handleSelectMapRankingIndicator = (indicator: SelectOption) => {
    setIndicatorSelected(indicator)
    if(indicator.data.bloq_anos  !== '-1'){

    const yearBloq = indicator.data.bloq_anos.split('-').map((item: string) => {
      return `em ${item}`
    });

    setBloqYears(years.filter(element => !yearBloq.includes(element.value)));

    } else {
      setBloqYears(years);
    }

    if(stateQuery.id_estado) {
      setIsMessageHidden(true)
      getMapRankingData(dispatch)(stateQuery.id_estado, stateQuery.year, indicator.data.variableName, granularitySelected.value)
    }
  }

  const handleSelectGranularityMapRanking = (granularity: SelectOption) => {
    setGranularitySelected(granularity)

    if(indicatorSelected.data && stateQuery.id_estado){
      getMapRankingData(dispatch)(stateQuery.id_estado, stateQuery.year, indicatorSelected.data.variableName, granularity.value)
    }
  }

  const handleSelectMapRankingState = (query: any) => {
    setStateQuery(query);
    if(indicatorSelected.data && granularitySelected.value){
      setIsMessageHidden(true)
      getMapRankingData(dispatch)(query.id_estado, query.year, indicatorSelected.data.variableName, granularitySelected.value)
    }
  }

  const handleChangeMapRankingStateName = (state: string) => {
    const query = {
      ...stateQuery,
      state
    };

    setStateQuery(query);
    searchStates(dispatch)(query.state, query.year);
  }

  const handleSelectMapRankingYear = (year: SelectOption) => {
    const query = {
      ...stateQuery,
      year: year.value
    };

    setStateQuery(query);
    if(stateQuery.id_estado) {
      getMapRankingData(dispatch)(stateQuery.id_estado, year.label, indicatorSelected.data.variableName, granularitySelected.value)
    }
  }

  // **********

  // ********** MapRankingBrazil Chart functions ************

  const getMapRankingBrazilInitialValues = () => {
    if(chart === '5') {
      return;
    }

    const data = {
      abreviacoes: 'Cobertura AB (%)',
      bloco: 'Atenção Primária',
      bloq_anos:' ',
      bloq_viz: ' ',
      decPlaces: '1',
      format: 'percent',
      variableName: 'cob_ab',
      viz: '1',
      vizReg: ' '
    }

    setBloqYears(initialYears);
    getIndicatorsToVisualization(dispatch)(); 

    if(_.isEmpty(indicatorSelected)) 
    {      
      setIndicatorSelected({
        label: 'Cobertura da Atenção Básica (%)',
        value: '56db5554-8efa-475c-a330-bb7e264994e1',
        data
      })
      setIsMessageHidden(true)
      getMapRankingBrazilData(dispatch)(`em ${availableYears[0]}`, 'cob_ab')
    }
    else 
    {
      getMapRankingBrazilData(dispatch)(`em ${availableYears[0]}`, indicatorSelected.data.variableName)
    }
    
  }


  const handleSelectMapRankingBrazilIndicator = (indicator: SelectOption) => {

    setIndicatorSelected(indicator)
    if(indicator.data.bloq_anos  !== '-1'){

    const yearBloq = indicator.data.bloq_anos.split('-').map((item: string) => {
      return `em ${item}`
    });

    setBloqYears(years.filter(element => !yearBloq.includes(element.value)));

    } else {
      setBloqYears(years);
    }

    setIsMessageHidden(true)
    getMapRankingBrazilData(dispatch)(stateQuery.year, indicator.data.variableName)
  }

  const handleSelectMapRankingBrazilYear = (year: SelectOption) => {
    const query = {
      ...stateQuery,
      year: year.value
    };

    setStateQuery(query);
    getMapRankingBrazilData(dispatch)(year.label, indicatorSelected.data.variableName)
  }



  // ********** General Chart functions ************

  const handleChangeYear = (year: string) => {
    setStateQuery(current => ({
      ...current,
      year
    }));
  }

  const handleChangeIndicator = (indicator: string) => {
    searchIndicatorToVisualization(dispatch)(indicator)
  }

  const handleDownloadChartImage = async (htmElementID: string) => {
    if (document == null) {
      // eslint-disable-next-line no-console
      console.warn(downloadErrorMessage);
      return;
    }

    try {
      setShowUpSignature(true);

      const node = document.getElementById(htmElementID);

      if (node == null) {
        // eslint-disable-next-line no-console
        console.warn(downloadErrorMessage);
        return;
      }

      const blob = await domToImage.toBlob(node);

      saveAs(blob, `${chartNameSelected}.png`);

      setShowUpSignature(false);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.warn(downloadErrorMessage, error);
    }
  };

  const handleReportError = () => {
    setOpenModal(true);
  };

  const handleChartSelect = (option: SelectOption) => {
    setChartSelected(option.value)
    setChartNameSelected(option.label)

    if(option.value === '2') {
      if(
        cityQuery.cityCode !== '' &&
        cityQuery.macroRegion !== '' &&
        cityQuery.uf !== '' &&
        cityQuery.region !== '' &&
        typeof indicatorSelected.data.variableName !== 'undefined'
      ) {
        getDataToTimeLine(dispatch)(cityQuery.cityCode, indicatorSelected.data.variableName, cityQuery.macroRegion, cityQuery.uf, cityQuery.region)
      } else {
        return;
      }
    }
  }

  const handleCloseReportError = () => {
    setOpenModal(false);
  }

  const handleCloseInvalidQueryModal = () => {
    setOpenInvalidQueryModal(false);
  }

  // **********

  useEffect(() => {
    setChartSelected('5')
  }, [])

  useEffect(()=> {
    const query = {
      firstIndicator: `${firstIndicatorQuery}`,
      secondIndicator: `${secondIndicatorQuery}`,
      indicator: `${indicatorQuery}`,
      cityCode: `${cityCode}`,
      state: `${state}`,
      id_estado: `${id_estado}`,
      region: `${region}`,
      uf: `${uf}`,
      macroRegion: `${macroRegion}`,
      year: `${year}`,
      granularity: `${granularity}`,
      chart: `${chart}`
    }

    if(query.chart === 'undefined') {
      return
    }

    switch (+query.chart) {
      case 1:
        searchStates(dispatch)(query.state, query.year);
        searchIndicatorByVariableNameToVisualization(dispatch)(query.indicator);
        getMapRankingData(dispatch)(query.id_estado, query.year, query.indicator, query.granularity);
        setPackingFrom(true);
        // eslint-disable-next-line no-case-declarations
        const granularityChart = GRANULARITY.filter(i => i.value === query.granularity)
        setGranularitySelected(granularityChart[0])
        break;
      case 2:
        searchIndicatorByVariableNameToVisualization(dispatch)(query.indicator);
        getCityByCityCode(dispatch)(query.cityCode, '2020');
        getDataToTimeLine(dispatch)(query.cityCode, query.indicator, query.macroRegion, query.uf, query.region)
        setPackingFrom(true);
        break;
      case 3:
        getCityByCityCode(dispatch)(query.cityCode, query.year);
        searchFirsIndicatorByVariableNameToVisualization(dispatch)(query.firstIndicator);
        searchSecondIndicatorByVariableNameToVisualization(dispatch)(query.secondIndicator);
        getDataToDispersion(dispatch)(query.cityCode, query.year, query.uf, query.region, query.macroRegion, query.firstIndicator, query.secondIndicator)
        setPackingFrom(true);
        break;
      case 4:
        searchStates(dispatch)(query.state, query.year);
        searchIndicatorByVariableNameToVisualization(dispatch)(query.indicator);
        getCirclePackingData(dispatch)(query.id_estado, query.year, query.indicator, query.granularity)
        setPackingFrom(true);
        // eslint-disable-next-line no-case-declarations
        const granularity = GRANULARITY.filter(i => i.value === query.granularity)
        setGranularitySelected(granularity[0])
        break;
      case 5:
        searchIndicatorByVariableNameToVisualization(dispatch)(query.indicator);
        getMapRankingBrazilData(dispatch)(query.year, query.indicator);
        setPackingFrom(true);
        break;
      default:
        break;
    }

    setChartSelected(query.chart)
  }, [location])

  useEffect(() => {
    if(!packingFromUrl
      || typeof firstIndicator[0] === 'undefined'
      || typeof secondIndicator[0] === 'undefined'
      || typeof cityOptions[0] === 'undefined'){
        return
    }


    if(chartSelected !== '3') {
      return
    }


    setCityQuery({
      year: `em ${cityOptions[0].data.year}`,
      city: cityOptions[0].label,
      cityCode: cityOptions[0].value,
      uf: cityOptions[0].data.uf,
      region: cityOptions[0].data.regiao,
      macroRegion: cityOptions[0].data.macrorregiao
    })

    setFirstIndicatorSelected({
      label: firstIndicator[0].label,
      value: firstIndicator[0].value,
      data: firstIndicator[0].data
    })

    setSecondIndicatorSelected({
      label: secondIndicator[0].label,
      value: secondIndicator[0].value,
      data: secondIndicator[0].data
    })

    setPackingFrom(false)
  }, [indicators, firstIndicator, secondIndicator, chartSelected, packingFromUrl])

  useEffect(() => {
    if(!packingFromUrl || typeof indicators[0] === 'undefined' || typeof stateOptions[0] === 'undefined'){
      return
    }

    if(chartSelected !== '4') {
      return
    }

    setStateQuery({
      ...stateQuery,
      state: stateOptions[0].label,
      id_estado: stateOptions[0].value,
      uf: stateOptions[0].data
    })

    setIndicatorSelected({
      label: indicators[0].label,
      value: indicators[0].value,
      data: indicators[0].data
    })

    setPackingFrom(false)
  }, [chartSelected, indicators, packingFromUrl])

  useEffect(() => {
    if(!packingFromUrl || typeof indicators[0] === 'undefined' || typeof cityOptions[0] === 'undefined'){
      return
    }

    if(chartSelected !== '2') {
      return
    }


    setCityQuery({
      ...cityQuery,
      city: cityOptions[0].label,
      cityCode: cityOptions[0].value,
      uf: cityOptions[0].data.uf,
      region: cityOptions[0].data.regiao,
      macroRegion: cityOptions[0].data.macrorregiao
    })

    setIndicatorSelected({
      label: indicators[0].label,
      value: indicators[0].value,
      data: indicators[0].data
    })

    setPackingFrom(false)
  }, [indicators, chartSelected, packingFromUrl])

  useEffect(() => {
    if(!packingFromUrl || typeof indicators[0] === 'undefined' || typeof stateOptions[0] === 'undefined'){
      return
    }

    if(chartSelected !== '1') {
      return
    }

    setStateQuery({
      ...stateQuery,
      state: stateOptions[0].label,
      id_estado: stateOptions[0].value,
      uf: stateOptions[0].data,
      year: `em ${stateOptions[0].data.year}`
    })

    setIndicatorSelected({
      label: indicators[0].label,
      value: indicators[0].value,
      data: indicators[0].data
    })

    setPackingFrom(false)
  }, [indicators, chartSelected, packingFromUrl])

  useEffect(() => {
    if(!packingFromUrl || typeof indicators[0] === 'undefined'){
      return
    }

    if(chartSelected !== '5') {
      return
    }

    setStateQuery({
      ...stateQuery,
      year: stateQuery.year
    })

    setIndicatorSelected({
      label: indicators[0].label,
      value: indicators[0].value,
      data: indicators[0].data
    })

    setPackingFrom(false)
  }, [indicators, chartSelected, packingFromUrl])

  useEffect(() => {
    setCurrentUrl(window.location.href)
  }, [
    cityQuery,
    stateQuery,
    indicatorSelected,
    firstIndicatorSelected,
    secondIndicatorSelected,
    granularitySelected
  ])

  useEffect(() => {
    checkPackingInvalidData(circlePackingChartData)
  }, [circlePackingChartData])

  useEffect(() => {
    checkMapInvalidData(mapData)
  }, [mapData])

  useEffect(() => {
    checkBrazilMapInvalidData(brazilMapData)
  }, [brazilMapData])

  useEffect(() => {
    if(typeof indicatorSelected.data === 'undefined') {
      return;
    }

    if(indicatorSelected.data.bloco === 'Indicadores Socioeconômicos') {
      setSecondIndicatorSelected(indicatorSelected)
    } else {
      setFirstIndicatorSelected(indicatorSelected)
    }

  }, [indicatorSelected.value])

  useEffect(() => {
    if(typeof firstIndicatorSelected.data === 'undefined' ||
    typeof secondIndicatorSelected.data === 'undefined') {
      return;
    }

    if(firstIndicatorSelected.label.length > 0 &&
      secondIndicatorSelected.label.length <= 0
    ) {
      setIndicatorSelected(firstIndicatorSelected)
    } else if (
      secondIndicatorSelected.label.length > 0 &&
      firstIndicatorSelected.label.length <= 0
    ) {
      setIndicatorSelected(secondIndicatorSelected)
    } else if (
      firstIndicatorSelected.label.length > 0 &&
      secondIndicatorSelected.label.length > 0
    ) {
      setIndicatorSelected(firstIndicatorSelected)
    }

  }, [firstIndicatorSelected.value, secondIndicatorSelected.value])

  return (
    <Layout location={location}>
      <Head siteTitle="Visualizações"></Head>
      <S.Container>
        <S.Wrapper>
          <S.Header>
            <ChartOptions id='chart-options' onSelect={handleChartSelect} chartId={chartSelected}/>
          </S.Header>
          {chartSelected === '1' && (
            <MapRanking
              onReportError={handleReportError}
              onDownloadChartImage={handleDownloadChartImage}
              pageUrl={currentUrl}
              countryData={countryMapRankingData}
              stateData={stateMapRankingData}
              mapData={mapData}
              indicatorSelected={indicatorSelected}
              indicators={indicators}
              mapsLoading={(mapData.length > 0 && indicatorSelected.value) ? {isLoadingUfMapData: false} : mapsLoading}
              stateOptions={stateOptions}
              stateQuery={stateQuery}
              years={bloqYears}
              isMessageHidden={isMessageHidden}
              onSelectIndicator={handleSelectMapRankingIndicator}
              onSelectMapRankingState={handleSelectMapRankingState}
              onChangeMapRankingStateName={handleChangeMapRankingStateName}
              onChangeYear={handleChangeYear}
              onSelectMapRankingYear={handleSelectMapRankingYear}
              onChangeIndicator={handleChangeIndicator}
              initialValues={getMapRankingInitialValues}
              showUpSignature={showUpSignature}
              granularitySelected={granularitySelected}
              onSelectGranularity={handleSelectGranularityMapRanking}
              granularity={GRANULARITY}
            />
          )}
          {chartSelected === '2' && (
            <TimeLine
              onReportError={handleReportError}
              onDownloadChartImage={handleDownloadChartImage}
              pageUrl={currentUrl}
              indicatorSelected={indicatorSelected}
              indicators={listBloqIndicators()}
              chartData={timeLineChartData}
              cityOptions={cityOptions}
              regionsOptions={regionsOptions}
              macrosOptions={macrosOptions}
              stateOptions={stateOptions}
              cityQuery={cityQuery}
              stateQuery={stateQuery}
              regionQuery={regionQuery}
              macrosQuery={macroQuery}
              onChangeTimeLineStateName={handleChangeTimeLineStateName}
              onSelectTimeLineState={handleSelectTimeLineState}
              onChangeIndicator={handleChangeIndicator}
              onSelectIndicator={handleSelectTimeLineIndicator}
              onSelectLocation={handleSelectTimeLineLocation}
              onChangeLocationName={handleChangeLocationName}
              initialValues={getInitialValuesToTimeLine}
              showUpSignature={showUpSignature}
              granularity={TIME_LINE_GRANULARITY}
              onSelectGranularity={handleSelectGranularityToTimeLine}
              granularitySelected={granularitySelectedToTimeLine}
            />
          )}
          {chartSelected === '3' && (
            <Dispersion
              onReportError={handleReportError}
              onDownloadChartImage={handleDownloadChartImage}
              pageUrl={currentUrl}
              firstIndicator={firstIndicator}
              secondIndicator={secondIndicator}
              cityOptions={cityOptionsToDispersion}
              cityData={cityData}
              countryData={countryData}
              stateData={stateData}
              regionData={regionData}
              macroRegionData={macroRegionData}
              citiesData={citiesData}
              years={bloqYears}
              firstIndicatorSelected={firstIndicatorSelected}
              secondIndicatorSelected={secondIndicatorSelected}
              cityQuery={cityQuery}
              onSelectFirstIndicator={handleSelectFirstIndicator}
              onChangeFirstIndicator={handleChangeFirstIndicator}
              onSelectSecondIndicator={handleSelectSecondIndicator}
              onChangeSecondIndicator={handleChangeSecondIndicator}
              onChangeDispersionYear={handleChangeDispersionYear}
              onSelectDispersionYear={handleSelectDispersionYear}
              onSelectDispersionCity={handleSelectDispersionCity}
              onChangeDispersionCityName={handleChangeDispersionCityName}
              initialValues={getInitialValuesToPackingToDispersion}
              showUpSignature={showUpSignature}
            />
          )}
          {chartSelected === '4' && (
            <Packing
              onReportError={handleReportError}
              onDownloadChartImage={handleDownloadChartImage}
              pageUrl={currentUrl}
              indicators={indicators}
              stateOptions={stateOptions}
              chartData={circlePackingChartData}
              years={bloqYears}
              stateQuery={stateQuery as unknown as PackingStateQuery}
              indicatorSelected={indicatorSelected}
              granularitySelected={granularitySelected}
              onSelectState={handleSelectPackingState}
              onChangeStateName={handleChangePackingStateName}
              onSelectGranularity={handleSelectGranularityToPacking}
              onChangeIndicator={handleChangeIndicator}
              onSelectIndicator={handleSelectPackingIndicator}
              onChangeYear={handleChangeYear}
              onSelectYear={handleSelectPackingYear}
              initialValues={getInitialValuesToPacking}
              granularity={GRANULARITY}
              showUpSignature={showUpSignature}
            />
          )}
          
          {chartSelected === '5' && (
            <MapRankingBrazil
              onReportError={handleReportError}
              onDownloadChartImage={handleDownloadChartImage}
              pageUrl={currentUrl}
              brazilMapData={brazilMapData}
              indicatorSelected={indicatorSelected}
              indicators={indicators}
              mapsLoading={(brazilMapData.length > 0 && indicatorSelected.value) ? {isLoadingUfMapData: false} : brazilMapsLoading}
              stateQuery={stateQuery}
              years={bloqYears}
              isMessageHidden={isMessageHidden}
              onSelectIndicator={handleSelectMapRankingBrazilIndicator}
              onChangeYear={handleChangeYear}
              onSelectMapRankingYear={handleSelectMapRankingBrazilYear}
              onChangeIndicator={handleChangeIndicator}
              initialValues={getMapRankingBrazilInitialValues}
              showUpSignature={showUpSignature}
            />
          )}
        </S.Wrapper>
        <Modal open={openModal} hideModal={handleCloseReportError} >
          <ReportError
            pageUrl={currentUrl}
            email="iepsdata@ieps.org.br"
          />
        </Modal>
        <Modal open={openInvalidQueryModal} hideModal={handleCloseInvalidQueryModal} >
          <InvalidQuery onClose={handleCloseInvalidQueryModal}/>
        </Modal>
      </S.Container>
    </Layout>
  );
};

export default Visualizations;
