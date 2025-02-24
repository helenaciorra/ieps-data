import { HttpFetch, HttpResponse, RequestError } from '../../utils/HttpFetch';
import { DispatchFn } from '../types';
import * as actions from './visualizations.actions';
import * as api from './visualizations.api';
import * as types from './visualizations.types';

export const getFirstIndicatorsToDispersion = (dispatch: DispatchFn) => {
  return async () => {
    try {
      dispatch(actions.getVisualizationsRequest());


      const [indicators] = await Promise.all([
        HttpFetch<types.Indicators>(api.getFirstIndicatorsToDispersion()),
      ]);

      if (
        indicators.status === 200
      ) {
        dispatch(actions.getFirstIndicatorsToDispersionSuccess(indicators));
      }
    } catch (error) {
      console.warn(error)
      // eslint-disable-next-line prettier/prettier
      dispatch(actions.getVisualizationsFailure((error as RequestError)?.status || 500));
    }
  };
};

export const getSecondIndicatorsToDispersion = (dispatch: DispatchFn) => {
  return async () => {
    try {
      dispatch(actions.getVisualizationsRequest());


      const [indicators] = await Promise.all([
        HttpFetch<types.Indicators>(api.getSecondIndicatorsToDispersion()),
      ]);

      if (
        indicators.status === 200
      ) {
        dispatch(actions.getSecondIndicatorsToDispersionSuccess(indicators));
      }
    } catch (error) {
      console.warn(error)
      // eslint-disable-next-line prettier/prettier
      dispatch(actions.getVisualizationsFailure((error as RequestError)?.status || 500));
    }
  };
};

const paramsSearchFirstIndicatorCacheMap: Map<string, HttpResponse<types.Indicators>> = new Map();
let respSearchFirstIndicatorCacheMap: HttpResponse<types.Indicators> = {} as HttpResponse<types.Indicators>;

export const searchFirstIndicatorToDispersion = (dispatch: DispatchFn) => {
  return async (indicatorName: string) => {
    try {
      dispatch(actions.getVisualizationsRequest());

      if(!paramsSearchFirstIndicatorCacheMap.has(indicatorName)) {
        respSearchFirstIndicatorCacheMap = await HttpFetch<types.Indicators>(api.searchFirstIndicatorsToDispersion(indicatorName))
        paramsSearchFirstIndicatorCacheMap.set(indicatorName, respSearchFirstIndicatorCacheMap);
      } else {
        respSearchFirstIndicatorCacheMap = paramsSearchFirstIndicatorCacheMap.get(indicatorName) as HttpResponse<types.Indicators>;
      }

      if (
        respSearchFirstIndicatorCacheMap.status === 200
      ) {
        dispatch(actions.searchFirstIndicatorSuccess(respSearchFirstIndicatorCacheMap));
      }
    } catch (error) {
      console.warn(error)
      // eslint-disable-next-line prettier/prettier
      dispatch(actions.getVisualizationsFailure((error as RequestError)?.status || 500));
    }
  };
};

const paramsSearchSecondIndicatorCacheMap: Map<string, HttpResponse<types.Indicators>> = new Map();
let respSearchSecondIndicatorCacheMap: HttpResponse<types.Indicators> = {} as HttpResponse<types.Indicators>;

export const searchSecondIndicatorToDispersion = (dispatch: DispatchFn) => {
  return async (indicatorName: string) => {
    try {
      dispatch(actions.getVisualizationsRequest());

      if(!paramsSearchSecondIndicatorCacheMap.has(indicatorName)) {
        respSearchSecondIndicatorCacheMap = await HttpFetch<types.Indicators>(api.searchSecondIndicatorsToDispersion(indicatorName));
        paramsSearchSecondIndicatorCacheMap.set(indicatorName, respSearchSecondIndicatorCacheMap);
      } else {
        respSearchSecondIndicatorCacheMap = paramsSearchSecondIndicatorCacheMap.get(indicatorName) as HttpResponse<types.Indicators>;
      }

      if (
        respSearchSecondIndicatorCacheMap.status === 200
      ) {
        dispatch(actions.searchSecondIndicatorSuccess(respSearchSecondIndicatorCacheMap));
      }
    } catch (error) {
      console.warn(error)
      // eslint-disable-next-line prettier/prettier
      dispatch(actions.getVisualizationsFailure((error as RequestError)?.status || 500));
    }
  };
};

const cityDataDispersionCacheMap: Map<string, HttpResponse<types.CityVisualization>> = new Map();
const countryDataDispersionCacheMap: Map<string, HttpResponse<types.CountryVisualization>> = new Map();
const stateDataDispersionCacheMap: Map<string, HttpResponse<types.StateVisualization>> = new Map();
const regionDataDispersionCacheMap: Map<string, HttpResponse<types.RegionVisualization>> = new Map();
const macroRegionDataDispersionCacheMap: Map<string, HttpResponse<types.MacroRegionVisualization>> = new Map();
const citiesDataDispersionCacheMap: Map<string, HttpResponse<types.CityVisualization>> = new Map();
const firstIndicatorDataDispersionCacheMap: Map<string, HttpResponse<any>> = new Map;
const secondIndicatorDataDispersionCacheMap: Map<string, HttpResponse<any>> = new Map;

let respCityDataDispersion: HttpResponse<types.CityVisualization> = {} as HttpResponse<types.CityVisualization>;
let respCountryDataDispersion: HttpResponse<types.CountryVisualization> = {} as HttpResponse<types.CountryVisualization>;
let respStateDataDispersion: HttpResponse<types.StateVisualization> = {} as HttpResponse<types.StateVisualization>;
let respRegionDataDispersion: HttpResponse<types.RegionVisualization> = {} as HttpResponse<types.RegionVisualization>;
let respMacroRegionDataDispersion: HttpResponse<types.MacroRegionVisualization> = {} as HttpResponse<types.MacroRegionVisualization>;
let respCitiesDataDispersion: HttpResponse<types.CityVisualization> = {} as HttpResponse<types.CityVisualization>;

export const getDataToDispersion = (dispatch: DispatchFn) => {
  return async (
    cityCode: string,
    year: string,
    state: string,
    regionCode: string,
    macroRegionCode: string,
    firstIndicator: string,
    secondIndicator: string
  ) => {
    try {
      dispatch(actions.getVisualizationsRequest());

      if(
        !cityDataDispersionCacheMap.has(cityCode) ||
        !countryDataDispersionCacheMap.has(year) ||
        !stateDataDispersionCacheMap.has(state) ||
        !regionDataDispersionCacheMap.has(regionCode) ||
        !macroRegionDataDispersionCacheMap.has(macroRegionCode) ||
        !citiesDataDispersionCacheMap.has(cityCode) ||
        !firstIndicatorDataDispersionCacheMap.has(firstIndicator) ||
        !secondIndicatorDataDispersionCacheMap.has(secondIndicator)
      ) {
        [
          respCityDataDispersion,
          respCountryDataDispersion,
          respStateDataDispersion,
          respRegionDataDispersion,
          respMacroRegionDataDispersion,
          respCitiesDataDispersion
        ] = await Promise.all([
          HttpFetch<types.CityVisualization>(api.getCityToDispersion(
            cityCode,
            year,
            state,
            firstIndicator,
            secondIndicator
          )),
          HttpFetch<types.CountryVisualization>(api.getCountryToDispersion(
            year,
            firstIndicator,
            secondIndicator
          )),
          HttpFetch<types.StateVisualization>(api.getStateToDispersion(
            state,
            year,
            firstIndicator,
            secondIndicator
          )),
          HttpFetch<types.RegionVisualization>(api.getRegionToDispersion(
            regionCode,
            year,
            firstIndicator,
            secondIndicator
          )),
          HttpFetch<types.MacroRegionVisualization>(api.getMacroRegionToDispersion(
            macroRegionCode,
            year,
            firstIndicator,
            secondIndicator
          )),
          HttpFetch<types.CityVisualization>(api.getCitiesToDispersion(
            cityCode,
            year,
            state,
            firstIndicator,
            secondIndicator
          )),
        ]);

        cityDataDispersionCacheMap.set(cityCode, respCityDataDispersion)
        countryDataDispersionCacheMap.set(year, respCountryDataDispersion)
        stateDataDispersionCacheMap.set(state, respStateDataDispersion)
        regionDataDispersionCacheMap.set(regionCode, respRegionDataDispersion)
        macroRegionDataDispersionCacheMap.set(macroRegionCode, respMacroRegionDataDispersion)
        citiesDataDispersionCacheMap.set(cityCode, respCitiesDataDispersion)
        firstIndicatorDataDispersionCacheMap.set(firstIndicator, respCityDataDispersion)
        secondIndicatorDataDispersionCacheMap.set(secondIndicator, respCityDataDispersion)

      } else {

        respCityDataDispersion = cityDataDispersionCacheMap.get(cityCode) as HttpResponse<types.CityVisualization>
        respCountryDataDispersion = countryDataDispersionCacheMap.get(year) as HttpResponse<types.CountryVisualization>
        respStateDataDispersion = stateDataDispersionCacheMap.get(state) as HttpResponse<types.StateVisualization>
        respRegionDataDispersion = regionDataDispersionCacheMap.get(regionCode) as HttpResponse<types.RegionVisualization>
        respMacroRegionDataDispersion = macroRegionDataDispersionCacheMap.get(macroRegionCode) as HttpResponse<types.MacroRegionVisualization>
        respCitiesDataDispersion = citiesDataDispersionCacheMap.get(cityCode) as HttpResponse<types.CityVisualization>
      }

      if (
        respCityDataDispersion.status === 200,
        respCountryDataDispersion.status === 200,
        respStateDataDispersion.status === 200,
        respRegionDataDispersion.status === 200,
        respMacroRegionDataDispersion.status === 200,
        respCitiesDataDispersion.status === 200
      ) {
        dispatch(actions.getDispersionDataSuccess(respCityDataDispersion,
          respCountryDataDispersion,
          respStateDataDispersion,
          respRegionDataDispersion,
          respMacroRegionDataDispersion,
          respCitiesDataDispersion,
          firstIndicator,
          secondIndicator
        ));
      }
    } catch (error) {
      console.warn(error)
      // eslint-disable-next-line prettier/prettier
      dispatch(actions.getVisualizationsFailure((error as RequestError)?.status || 500));
    }
  };
};

export const getIndicatorsToVisualization = (dispatch: DispatchFn) => {
  return async () => {
    try {
      dispatch(actions.getVisualizationsRequest());


      const [indicators] = await Promise.all([
        HttpFetch<types.Indicators>(api.getIndicatorsToVisualization()),
      ]);

      if (
        indicators.status === 200
      ) {
        dispatch(actions.getIndicatorsToVisualizationSuccess(indicators));
      }
    } catch (error) {
      console.warn(error)
      // eslint-disable-next-line prettier/prettier
      dispatch(actions.getVisualizationsFailure((error as RequestError)?.status || 500));
    }
  };
};

const paramsSearchIndicatorCacheMap: Map<string, HttpResponse<types.Indicators>> = new Map();
let respSearchIndicatorCacheMap: HttpResponse<types.Indicators> = {} as HttpResponse<types.Indicators>;

export const searchIndicatorToVisualization = (dispatch: DispatchFn) => {
  return async (indicatorName: string) => {
    try {
      dispatch(actions.getVisualizationsRequest());

      if(!paramsSearchIndicatorCacheMap.has(indicatorName)) {
        respSearchIndicatorCacheMap = await HttpFetch<types.Indicators>(api.searchIndicatorsToVisualization(indicatorName));
        paramsSearchIndicatorCacheMap.set(indicatorName, respSearchIndicatorCacheMap);
      } else {
        respSearchIndicatorCacheMap = paramsSearchIndicatorCacheMap.get(indicatorName) as HttpResponse<types.Indicators>;
      }

      if (
        respSearchIndicatorCacheMap.status === 200
      ) {
        dispatch(actions.getIndicatorsToVisualizationSuccess(respSearchIndicatorCacheMap));
      }
    } catch (error) {
      console.warn(error)
      // eslint-disable-next-line prettier/prettier
      dispatch(actions.getVisualizationsFailure((error as RequestError)?.status || 500));
    }
  };
};

export const searchIndicatorByVariableNameToVisualization = (dispatch: DispatchFn) => {
  return async (indicator: string) => {
    try {
      dispatch(actions.getVisualizationsRequest());


      const [indicators] = await Promise.all([
        HttpFetch<types.Indicators>(api.searchIndicatorsByVariableNameToVisualization(indicator)),
      ]);

      if (
        indicators.status === 200
      ) {
        dispatch(actions.getIndicatorsToVisualizationSuccess(indicators));
      }
    } catch (error) {
      console.warn(error)
      // eslint-disable-next-line prettier/prettier
      dispatch(actions.getVisualizationsFailure((error as RequestError)?.status || 500));
    }
  };
};

export const searchFirsIndicatorByVariableNameToVisualization = (dispatch: DispatchFn) => {
  return async (indicator: string) => {
    try {
      dispatch(actions.getVisualizationsRequest());


      const [indicators] = await Promise.all([
        HttpFetch<types.Indicators>(api.searchIndicatorsByVariableNameToVisualization(indicator)),
      ]);

      if (
        indicators.status === 200
      ) {
        dispatch(actions.searchFirstIndicatorSuccess(indicators));
      }
    } catch (error) {
      console.warn(error)
      // eslint-disable-next-line prettier/prettier
      dispatch(actions.getVisualizationsFailure((error as RequestError)?.status || 500));
    }
  };
};

export const searchSecondIndicatorByVariableNameToVisualization = (dispatch: DispatchFn) => {
  return async (indicator: string) => {
    try {
      dispatch(actions.getVisualizationsRequest());


      const [indicators] = await Promise.all([
        HttpFetch<types.Indicators>(api.searchIndicatorsByVariableNameToVisualization(indicator)),
      ]);

      if (
        indicators.status === 200
      ) {
        dispatch(actions.searchSecondIndicatorSuccess(indicators));
      }
    } catch (error) {
      console.warn(error)
      // eslint-disable-next-line prettier/prettier
      dispatch(actions.getVisualizationsFailure((error as RequestError)?.status || 500));
    }
  };
};

const citiesTimeLineCacheMap: Map<string, HttpResponse<types.CityQuery>> = new Map();
let respCitiesTimeLineCacheMap: HttpResponse<types.CityQuery> = {} as HttpResponse<types.CityQuery>;

// Fetches city options to determine the city name from the visualization "Timeline"
export const getCitiesToTimeLine = (dispatch: DispatchFn) => {
  return async (city:string, state: string) => {
    try {
      dispatch(actions.getCitiesRequest());

      if(!citiesTimeLineCacheMap.has(city)) {
        respCitiesTimeLineCacheMap = await HttpFetch<types.CityQuery>(api.getCitiesQueryToLine(city, state));
        citiesTimeLineCacheMap.set(city, respCitiesTimeLineCacheMap);
      } else {
        respCitiesTimeLineCacheMap = citiesTimeLineCacheMap.get(city) as HttpResponse<types.CityQuery>;
      }

      if (respCitiesTimeLineCacheMap.status === 200) {
        dispatch(actions.getCitiesSuccess(respCitiesTimeLineCacheMap));
      }
    } catch (error) {
      console.warn(error)
      // eslint-disable-next-line prettier/prettier
      dispatch(actions.getCitiesFailure((error as RequestError)?.status || 500));
    }
  };
};

const regionsTimeLineCacheMap: Map<string, HttpResponse<types.RegionQuery>> = new Map();
let respRegionsTimeLineCacheMap: HttpResponse<types.RegionQuery> = {} as HttpResponse<types.RegionQuery>;

// Fetches region options to determine the region name from the visualization "Timeline"
export const getRegionsToTimeLine = (dispatch: DispatchFn) => {
  return async (region:string) => {
    try {
      dispatch(actions.getRegionsRequest());

      if(!regionsTimeLineCacheMap.has(region)) {
        respRegionsTimeLineCacheMap = await HttpFetch<types.RegionQuery>(api.getRegionsQueryToLine(region));
        regionsTimeLineCacheMap.set(region, respRegionsTimeLineCacheMap);
      } else {
        respRegionsTimeLineCacheMap = regionsTimeLineCacheMap.get(region) as HttpResponse<types.RegionQuery>;
      }

      if (respRegionsTimeLineCacheMap.status === 200) {
        dispatch(actions.getRegionsSuccess(respRegionsTimeLineCacheMap));
      }
    } catch (error) {
      console.warn(error)
      // eslint-disable-next-line prettier/prettier
      dispatch(actions.getRegionsFailure((error as RequestError)?.status || 500));
    }
  };
};

// Fetches region options to determine the region name from the visualization "Timeline"
export const getRegionsToTimeLineByState = (dispatch: DispatchFn) => {
  return async (region:string) => {
    try {
      dispatch(actions.getRegionsRequest());

      if(!regionsTimeLineCacheMap.has(region)) {
        respRegionsTimeLineCacheMap = await HttpFetch<types.RegionQuery>(api.getRegionsQueryToLineByState(region));
        regionsTimeLineCacheMap.set(region, respRegionsTimeLineCacheMap);
      } else {
        respRegionsTimeLineCacheMap = regionsTimeLineCacheMap.get(region) as HttpResponse<types.RegionQuery>;
      }

      if (respRegionsTimeLineCacheMap.status === 200) {
        dispatch(actions.getRegionsSuccess(respRegionsTimeLineCacheMap));
      }
    } catch (error) {
      console.warn(error)
      // eslint-disable-next-line prettier/prettier
      dispatch(actions.getRegionsFailure((error as RequestError)?.status || 500));
    }
  };
};

const macrosTimeLineCacheMap: Map<string, HttpResponse<types.MacroQuery>> = new Map();
let respMacrosTimeLineCacheMap: HttpResponse<types.MacroQuery> = {} as HttpResponse<types.MacroQuery>;

// Fetches macro options to determine the macro name from the visualization "Timeline"
export const getMacrosToTimeLine = (dispatch: DispatchFn) => {
  return async (macro:string) => {
    try {
      dispatch(actions.getMacrosRequest());

      if(!macrosTimeLineCacheMap.has(macro)) {
        respMacrosTimeLineCacheMap = await HttpFetch<types.MacroQuery>(api.getMacroQueryToLine(macro));
        macrosTimeLineCacheMap.set(macro, respMacrosTimeLineCacheMap);
      } else {
        respMacrosTimeLineCacheMap = macrosTimeLineCacheMap.get(macro) as HttpResponse<types.MacroQuery>;
      }

      if (respMacrosTimeLineCacheMap.status === 200) {
        dispatch(actions.getMacrosSuccess(respMacrosTimeLineCacheMap));
      }
    } catch (error) {
      console.warn(error)
      // eslint-disable-next-line prettier/prettier
      dispatch(actions.getMacrosFailure((error as RequestError)?.status || 500));
    }
  };
};

export const getMacrosToTimeLineByState = (dispatch: DispatchFn) => {
  return async (macro:string) => {
    try {
      dispatch(actions.getMacrosRequest());

      if(!macrosTimeLineCacheMap.has(macro)) {
        respMacrosTimeLineCacheMap = await HttpFetch<types.MacroQuery>(api.getMacroQueryToLineByState(macro));
        macrosTimeLineCacheMap.set(macro, respMacrosTimeLineCacheMap);
      } else {
        respMacrosTimeLineCacheMap = macrosTimeLineCacheMap.get(macro) as HttpResponse<types.MacroQuery>;
      }

      if (respMacrosTimeLineCacheMap.status === 200) {
        dispatch(actions.getMacrosSuccess(respMacrosTimeLineCacheMap));
      }
    } catch (error) {
      console.warn(error)
      // eslint-disable-next-line prettier/prettier
      dispatch(actions.getMacrosFailure((error as RequestError)?.status || 500));
    }
  };
};

const statesTimeLineCacheMap: Map<string, HttpResponse<types.StateQuery>> = new Map();
let respStatesTimeLineCacheMap: HttpResponse<types.StateQuery> = {} as HttpResponse<types.StateQuery>;

// Fetches state options to determine the state name from the visualization "Timeline"
export const getStatesToTimeLine = (dispatch: DispatchFn) => {
  return async (state:string) => {
    try {
      dispatch(actions.getStateSRequest());

      if(!statesTimeLineCacheMap.has(state)) {
        respStatesTimeLineCacheMap = await HttpFetch<types.StateQuery>(api.getStateQueryToLine(state));
        statesTimeLineCacheMap.set(state, respStatesTimeLineCacheMap);
      } else {
        respStatesTimeLineCacheMap = statesTimeLineCacheMap.get(state) as HttpResponse<types.StateQuery>;
      }

      if (respStatesTimeLineCacheMap.status === 200) {
        dispatch(actions.getStatesSuccess(respStatesTimeLineCacheMap));
      }
    } catch (error) {
      console.warn(error)
      // eslint-disable-next-line prettier/prettier
      dispatch(actions.getStatesFailure((error as RequestError)?.status || 500));
    }
  };
};

export const getCityByCityCode = (dispatch: DispatchFn) => {
  return async (cityCode:string, year: string) => {
    try {
      dispatch(actions.getCitiesRequest());


      const response = await HttpFetch<types.CityQuery>(api.getCityByCityCode(cityCode, year));

      if (response.status === 200) {
        dispatch(actions.getCitiesSuccess(response));
      }
    } catch (error) {
      console.warn(error)
      // eslint-disable-next-line prettier/prettier
      dispatch(actions.getCitiesFailure((error as RequestError)?.status || 500));
    }
  };
};

const cityTimeLineCacheMap: Map<string, HttpResponse<types.CityVisualization>> = new Map();
const countryTimeLineCacheMap: Map<string, HttpResponse<types.CountryVisualization>> = new Map();
const macroTimeLineCacheMap: Map<string, HttpResponse<types.MacroRegionVisualization>> = new Map();
const stateTimeLineCacheMap: Map<string, HttpResponse<types.StateVisualization>> = new Map();
const regionTimeLineCacheMap: Map<string, HttpResponse<types.RegionVisualization>> = new Map();
const indicatorCacheMap: Map<string, HttpResponse<any>> = new Map();

let respCityTimeLine: HttpResponse<types.CityVisualization> = {} as HttpResponse<types.CityVisualization>;
let respCountryTimeLine: HttpResponse<types.CountryVisualization> = {} as HttpResponse<types.CountryVisualization>;
let respMacroTimeLine: HttpResponse<types.MacroRegionVisualization> = {} as HttpResponse<types.MacroRegionVisualization>;
let respStateTimeLine: HttpResponse<types.StateVisualization> = {} as HttpResponse<types.StateVisualization>;
let respRegionTimeLine: HttpResponse<types.RegionVisualization> = {} as HttpResponse<types.RegionVisualization>;

export const getDataToTimeLine = (dispatch: DispatchFn) => {
  return async (indicatorName: string, state: string, cityCode?:string, macroRegion?: string,  region?: string) => {
    try {
      dispatch(actions.getCitiesRequest());

      const cityMapKey = `${cityCode}_${indicatorName}`;
      const macroMapKey = `${macroRegion}_${indicatorName}`;
      const stateMapKey = `${state}_${indicatorName}`;
      const regionMapKey = `${region}_${indicatorName}`;

      if(
        !cityTimeLineCacheMap.has(cityMapKey) ||
        !countryTimeLineCacheMap.has(indicatorName) ||
        !macroTimeLineCacheMap.has(macroMapKey) ||
        !stateTimeLineCacheMap.has(stateMapKey) ||
        !regionTimeLineCacheMap.has(regionMapKey)
      ) { 

        respCountryTimeLine = await HttpFetch<types.CountryVisualization>(api.getCountryToLine(indicatorName));
        countryTimeLineCacheMap.set(indicatorName, respCountryTimeLine);

        respStateTimeLine = await HttpFetch<types.StateVisualization>(api.getStateToLine(state, indicatorName));
        stateTimeLineCacheMap.set(state, respStateTimeLine);

        if(cityCode)
        {
          respCityTimeLine= await HttpFetch<types.CityVisualization>(api.getCityToLine(cityCode, indicatorName));
          cityTimeLineCacheMap.set(cityCode, respCityTimeLine);
        }

        if(macroRegion)
        {
          respMacroTimeLine = await HttpFetch<types.MacroRegionVisualization>(api.getMacroRegionToLine(macroRegion, indicatorName));
          macroTimeLineCacheMap.set(macroRegion, respMacroTimeLine);
        }
        
        if(region)
        {
          respRegionTimeLine = await HttpFetch<types.RegionVisualization>(api.getRegionToLine(region, indicatorName));
          regionTimeLineCacheMap.set(region, respRegionTimeLine);
        }



      } else {
        respCountryTimeLine = countryTimeLineCacheMap.get(indicatorName) as HttpResponse<types.CountryVisualization>;
        respStateTimeLine = stateTimeLineCacheMap.get(state) as HttpResponse<types.StateVisualization>;
        if(cityCode)
          respCityTimeLine = cityTimeLineCacheMap.get(cityCode) as HttpResponse<types.CityVisualization>;

        if(macroRegion)
          respMacroTimeLine = macroTimeLineCacheMap.get(macroRegion) as HttpResponse<types.MacroRegionVisualization>;

        if(region)
          respRegionTimeLine = regionTimeLineCacheMap.get(region) as HttpResponse<types.RegionVisualization>;
      }


      if (
        respCityTimeLine.status === 200 ||
        respCountryTimeLine.status === 200 ||
        respMacroTimeLine.status === 200 ||
        respStateTimeLine.status === 200 ||
        respRegionTimeLine.status === 200
      ) {
        dispatch(
          actions.getDataToTimeLineSuccess(
            respCountryTimeLine,
            indicatorName,
            respCityTimeLine,
            respMacroTimeLine,
            respStateTimeLine,
            respRegionTimeLine,
          )
        );
      }
    } catch (error) {
      console.warn(error)
      // eslint-disable-next-line prettier/prettier
      dispatch(actions.getCitiesFailure((error as RequestError)?.status || 500));
    }
  };
};

export const getStates = (dispatch: DispatchFn) => {
  return async () => {
    try {
      dispatch(actions.getCitiesRequest());

      const response = await HttpFetch<types.StateQuery>(api.getStateQuery());

      if (response.status === 200) {
        dispatch(actions.getStatesSuccess(response));
      }
    } catch (error) {
      console.warn(error)
      // eslint-disable-next-line prettier/prettier
      dispatch(actions.getCitiesFailure((error as RequestError)?.status || 500));
    }
  };
};

const paramSearchStatesCacheMap: Map<string, HttpResponse<types.StateQuery>> = new Map();
const paramYearToSearchStatesCacheMap: Map<string, HttpResponse<any>> = new Map();

let respSearchStatesCacheMap: HttpResponse<types.StateQuery> = {} as HttpResponse<types.StateQuery>;

export const searchStates = (dispatch: DispatchFn) => {
  return async (stateName:string, year: string) => {
    try {
      dispatch(actions.getCitiesRequest());

      if(
        !paramSearchStatesCacheMap.has(stateName) ||
        !paramYearToSearchStatesCacheMap.has(year)
      ) {
        respSearchStatesCacheMap = await HttpFetch<types.StateQuery>(api.searchStateQuery(stateName, year));
        paramSearchStatesCacheMap.set(stateName, respSearchStatesCacheMap)
        paramYearToSearchStatesCacheMap.set(year, respSearchStatesCacheMap)
      } else {
        respSearchStatesCacheMap = paramSearchStatesCacheMap.get(stateName) as HttpResponse<types.StateQuery>;
      }

      if (respSearchStatesCacheMap.status === 200) {
        dispatch(actions.getStatesSuccess(respSearchStatesCacheMap));
      }
    } catch (error) {
      console.warn(error)
      // eslint-disable-next-line prettier/prettier
      dispatch(actions.getCitiesFailure((error as RequestError)?.status || 500));
    }
  };
};

const stateMapRankingCacheMap : Map<string, HttpResponse<types.StateVisualization>>  = new Map;
const countryMapRankingCacheMap : Map<string, HttpResponse<types.CountryVisualization>>  = new Map;
const dataMapRankingCacheMap : Map<string, HttpResponse<types.MapRankingResponse>>  = new Map;

let respStateMapRankingCacheMap : HttpResponse<types.StateVisualization> = {} as HttpResponse<types.StateVisualization>;
let respCountryMapRankingCacheMap : HttpResponse<types.CountryVisualization> = {} as HttpResponse<types.CountryVisualization>;
let respDataMapRankingCacheMap : HttpResponse<types.MapRankingResponse> = {} as HttpResponse<types.MapRankingResponse>;

export const getMapRankingData = (dispatch: DispatchFn) => {
  return async (stateId:string, year: string, indicator: string, granularity: string) => {
    try {
      dispatch(actions.getCitiesRequest());

      const dataKey = stateId + year + granularity + indicator;

      if(
        !stateMapRankingCacheMap.has(stateId) ||
        !countryMapRankingCacheMap.has(year) ||
        !dataMapRankingCacheMap.has(dataKey) ||
        !indicatorCacheMap.has(indicator)
      ) {
        [respStateMapRankingCacheMap, respCountryMapRankingCacheMap] = await Promise.all([
          HttpFetch<types.StateVisualization>(api.getStateToMapRanking(stateId, year, indicator)),
          HttpFetch<types.CountryVisualization>(api.getCountryToMapRanking(year, indicator))
        ]);

        switch (true) {
          case granularity === 'viz':
            respDataMapRankingCacheMap = await HttpFetch<types.MapRankingResponse>(api.getCitiesToMapRanking(stateId, year, indicator))
            break;
          case granularity === 'vizReg':
            respDataMapRankingCacheMap = await HttpFetch<types.MapRankingResponse>(api.getRegionsToMapRanking(stateId, year, indicator))
            break;
          case granularity === 'vizMacro':
            respDataMapRankingCacheMap = await HttpFetch<types.MapRankingResponse>(api.getMacroRegionsToMapRanking(stateId, year, indicator))
            break;
          default:
            break;
        }

        stateMapRankingCacheMap.set(stateId, respStateMapRankingCacheMap)
        countryMapRankingCacheMap.set(year, respCountryMapRankingCacheMap)
        dataMapRankingCacheMap.set(dataKey, respDataMapRankingCacheMap)
        indicatorCacheMap.set(indicator, respDataMapRankingCacheMap)
      } else {
        respStateMapRankingCacheMap = stateMapRankingCacheMap.get(stateId) as HttpResponse<types.StateVisualization>;
        respCountryMapRankingCacheMap = countryMapRankingCacheMap.get(year) as HttpResponse<types.CountryVisualization>;
        respDataMapRankingCacheMap = dataMapRankingCacheMap.get(dataKey) as HttpResponse<types.MapRankingResponse>;
      }


      if (
        respDataMapRankingCacheMap.status === 200,
        respStateMapRankingCacheMap.status === 200,
        respCountryMapRankingCacheMap.status === 200
      ) {
        dispatch(
          actions.getDataToMapRankingSuccess(
            respDataMapRankingCacheMap,
            respStateMapRankingCacheMap,
            respCountryMapRankingCacheMap,
            indicator,
            granularity
          )
        );
      }
    } catch (error) {
      console.warn(error)
      // eslint-disable-next-line prettier/prettier
      dispatch(actions.getCitiesFailure((error as RequestError)?.status || 500));
    }
  };
};

const stateMapRankingBrazilCacheMap : Map<string, HttpResponse<types.StateVisualization>>  = new Map;
const dataMapRankingBrazilCacheMap : Map<string, HttpResponse<types.MapRankingBrazilResponse>>  = new Map;

let respStateMapRankingBrazilCacheMap : HttpResponse<types.StateVisualization> = {} as HttpResponse<types.StateVisualization>;
let respDataMapRankingBrazilCacheMap : HttpResponse<types.MapRankingBrazilResponse> = {} as HttpResponse<types.MapRankingBrazilResponse>;

export const getMapRankingBrazilData = (dispatch: DispatchFn) => {
  return async (year: string, indicator: string) => {
    try {
      dispatch(actions.getCitiesRequest());

      const dataKey = year + indicator;

      if(
        !stateMapRankingBrazilCacheMap.has(year) ||
        !indicatorCacheMap.has(indicator)
      ) {
        [respStateMapRankingBrazilCacheMap, respDataMapRankingBrazilCacheMap] = await Promise.all([
          HttpFetch<types.StateVisualization>(api.getStatesToMapRankingBrazil(year, indicator)),
          HttpFetch<types.MapRankingBrazilResponse>(api.getStatesToMapRankingBrazil(year, indicator))
        ]);

        stateMapRankingBrazilCacheMap.set(year, respStateMapRankingBrazilCacheMap)
        dataMapRankingBrazilCacheMap.set(dataKey, respDataMapRankingBrazilCacheMap)
        indicatorCacheMap.set(indicator, respDataMapRankingBrazilCacheMap)
      } else {
        respStateMapRankingCacheMap = stateMapRankingCacheMap.get(year) as HttpResponse<types.StateVisualization>;
        respDataMapRankingBrazilCacheMap = dataMapRankingBrazilCacheMap.get(dataKey) as HttpResponse<types.MapRankingBrazilResponse>;
      }

      if (
        respDataMapRankingBrazilCacheMap.status === 200,
        respStateMapRankingBrazilCacheMap.status === 200
      ) {
        dispatch(
          actions.getDataToMapRankingBrazilSuccess(
            respDataMapRankingBrazilCacheMap,
            respStateMapRankingBrazilCacheMap,
            indicator,
          )
        );
      }
    } catch (error) {
      console.warn(error)
      // eslint-disable-next-line prettier/prettier
      dispatch(actions.getCitiesFailure((error as RequestError)?.status || 500));
    }
  };
};

const stateCirclePackingCacheMap : Map<string, HttpResponse<any>>  = new Map;
const dataCirclePackingCacheMap : Map<string, HttpResponse<types.CirclePackingResponse>>  = new Map;
const yearCirclePackingCacheMap : Map<string, HttpResponse<any>>  = new Map;

let respDataCirclePackingCacheMap : HttpResponse<types.CirclePackingResponse> = {} as HttpResponse<types.CirclePackingResponse>;

export const getCirclePackingData = (dispatch: DispatchFn) => {
  return async (stateId:string, year: string, indicator: string, granularity: string) => {
    try {
      dispatch(actions.getCitiesRequest());

      const dataKey = stateId + year + granularity + indicator;

      if(
        !dataCirclePackingCacheMap.has(dataKey) ||
        !stateCirclePackingCacheMap.has(stateId) ||
        !indicatorCacheMap.has(indicator) ||
        !yearCirclePackingCacheMap.has(year)
      ) {
        switch (true) {
          case granularity === 'viz':
            respDataCirclePackingCacheMap = await HttpFetch<types.CirclePackingResponse>(api.getDataVizToCirclePacking(stateId, year, indicator))
            break;
          case granularity === 'vizReg':
            respDataCirclePackingCacheMap = await HttpFetch<types.CirclePackingResponse>(api.getDataVizRegToCirclePacking(stateId, year, indicator))
            break;
          case granularity === 'vizMacro':
            respDataCirclePackingCacheMap = await HttpFetch<types.CirclePackingResponse>(api.getDataVizMacroToCirclePacking(stateId, year, indicator))
            break;
          default:
            break;
        }
        dataCirclePackingCacheMap.set(dataKey, respDataCirclePackingCacheMap);
        stateCirclePackingCacheMap.set(stateId, respDataCirclePackingCacheMap);
        indicatorCacheMap.set(indicator, respDataCirclePackingCacheMap);
        yearCirclePackingCacheMap.set(year, respDataCirclePackingCacheMap);
      } else {
        respDataCirclePackingCacheMap = dataCirclePackingCacheMap.get(dataKey) as HttpResponse<types.CirclePackingResponse>;
      }



      if (
        respDataCirclePackingCacheMap.status === 200
      ) {
        dispatch(actions.getDataCirclePackingSuccess(respDataCirclePackingCacheMap, indicator));
      }
    } catch (error) {
      console.warn(error)
      // eslint-disable-next-line prettier/prettier
      dispatch(actions.getCitiesFailure((error as RequestError)?.status || 500));
    }
  };
};

export const clearContext = (dispatch: DispatchFn) => {
  return async () => {
    try {
      dispatch(actions.clearContext());
    } catch (error) {
      console.warn(error)
      // eslint-disable-next-line prettier/prettier
    }
  };
};

