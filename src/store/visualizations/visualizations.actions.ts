import { HttpResponse } from '../../utils/HttpFetch';
import * as types from './visualizations.types';

export const getVisualizationsRequest =
  (): types.GetVisualizationsActionRequest => ({
    type: types.GET_VISUALIZATIONS_REQUEST,
  });

export const getFirstIndicatorsToDispersionSuccess = (
  indicators: HttpResponse<types.Indicators>
): types.GetVisualizationsActionSuccess => ({
  type: types.GET_FIRST_INDICATORS_SUCCESS,
  payload: {
    indicators,
  },
});

export const getIndicatorsToTimeLineSuccess = (
  indicators: HttpResponse<types.Indicators>
): types.GetIndicatorsToTimeLineSuccess => ({
  type: types.GET_TIME_LINE_INDICATORS_SUCCESS,
  payload: {
    indicators,
  },
});

export const getIndicatorsToVisualizationSuccess = (
  indicators: HttpResponse<types.Indicators>
): types.GetIndicatorsToVisualizationSuccess => ({
  type: types.GET_INDICATORS_SUCCESS,
  payload: {
    indicators,
  },
});

export const getSecondIndicatorsToDispersionSuccess = (
  indicators: HttpResponse<types.Indicators>
): types.GetSecondIndicatorsToDispersionSuccess => ({
  type: types.GET_SECOND_INDICATORS_SUCCESS,
  payload: {
    indicators,
  },
});

export const getDispersionDataSuccess = (
  city: HttpResponse<types.CityVisualization>,
  country: HttpResponse<types.CountryVisualization>,
  state: HttpResponse<types.StateVisualization>,
  region: HttpResponse<types.RegionVisualization>,
  macroRegion: HttpResponse<types.MacroRegionVisualization>,
  cities: HttpResponse<types.CityVisualization>,
  firstIndicator: string,
  secondIndicator: string
): types.getDispersionDataSuccess => ({
  type: types.GET_DISPERSION_DATA_SUCCESS,
  payload: {
    city,
    country,
    state,
    region,
    macroRegion,
    cities,
    firstIndicator,
    secondIndicator,
  },
});

export const getVisualizationsFailure = (
  params: number
): types.GetVisualizationsActionFailure => ({
  type: types.GET_VISUALIZATIONS_FAILURE,
  payload: params,
});

export const searchFirstIndicatorSuccess = (
  indicators: HttpResponse<types.Indicators>
): types.getFirstIndicatorsSuccess => ({
  type: types.GET_FIRST_INDICATORS_SUCCESS,
  payload: {
    indicators,
  },
});

export const searchSecondIndicatorSuccess = (
  indicators: HttpResponse<types.Indicators>
): types.getSecondIndicatorsSuccess => ({
  type: types.GET_SECOND_INDICATORS_SUCCESS,
  payload: {
    indicators,
  },
});

export const getCitiesRequest = (): types.GetCitiesActionRequest => ({
  type: types.GET_CITIES_REQUEST,
});

export const getRegionsRequest = (): types.GetRegionsActionRequest => ({
  type: types.GET_REGIONS_REQUEST,
});

export const getMacrosRequest = (): types.GetMacrosActionRequest => ({
  type: types.GET_MACROS_REQUEST,
});

export const getStateSRequest = (): types.GetStatesActionRequest => ({
  type: types.GET_STATES_REQUEST,
});

export const getCitiesSuccess = (
  data: HttpResponse<types.CityQuery>
): types.GetCitiesActionSuccess => ({
  type: types.GET_CITIES_SUCCESS,
  payload: data,
});

export const getRegionsSuccess = (
  data: HttpResponse<types.RegionQuery>
): types.GetRegionsActionSuccess => ({
  type: types.GET_REGIONS_SUCCESS,
  payload: data,
});

export const getMacrosSuccess = (
  data: HttpResponse<types.MacroQuery>
): types.GetMacrosActionSuccess => ({
  type: types.GET_MACROS_SUCCESS,
  payload: data,
});

export const getStatesSuccess = (
  data: HttpResponse<types.StateQuery>
): types.GetStatesActionSuccess => ({
  type: types.GET_STATES_SUCCESS,
  payload: data,
});

export const getDataToMapRankingSuccess = (
  data: HttpResponse<types.MapRankingResponse>,
  state: HttpResponse<types.StateVisualization>,
  country: HttpResponse<types.CountryVisualization>,
  indicator: string,
  granularity: string
): types.GetDataToMapRankingSuccess => ({
  type: types.GET_MAP_RANKING_DATA_SUCCESS,
  payload: {
    data,
    state,
    country,
    indicator,
    granularity,
  },
});

export const getDataToMapRankingBrazilSuccess = (
  data: HttpResponse<types.MapRankingBrazilResponse>,
  state: HttpResponse<types.StateVisualization>,
  indicator: string
): types.GetDataToMapRankingBrazilSuccess => ({
  type: types.GET_MAP_RANKING_BRAZIL_DATA_SUCCESS,
  payload: {
    data,
    state,
    indicator,
  },
});

export const getDataCirclePackingSuccess = (
  data: HttpResponse<types.CirclePackingResponse>,
  indicator: string
): types.GetDataToPackingSuccess => ({
  type: types.GET_PACKING_DATA_SUCCESS,
  payload: {
    data,
    indicator,
  },
});

export const getDataToTimeLineSuccess = (
  country: HttpResponse<types.CountryVisualization>,
  indicator: string,
  city?: HttpResponse<types.CityVisualization>,
  macroRegion?: HttpResponse<types.MacroRegionVisualization>,
  state?: HttpResponse<types.StateVisualization>,
  region?: HttpResponse<types.RegionVisualization>
): types.GetDataToTimeLineSuccess => ({
  type: types.GET_TIME_LINE_DATA_SUCCESS,
  payload: {
    country,
    indicator,
    city,
    state,
    region,
    macroRegion,
  },
});

export const getCitiesFailure = (
  params: number
): types.GetCitiesActionFailure => ({
  type: types.GET_CITIES_FAILURE,
  payload: params,
});

export const getRegionsFailure = (
  params: number
): types.GetRegionsActionFailure => ({
  type: types.GET_REGIONS_FAILURE,
  payload: params,
});

export const getMacrosFailure = (
  params: number
): types.GetMacrosActionFailure => ({
  type: types.GET_MACROS_FAILURE,
  payload: params,
});

export const getStatesFailure = (
  params: number
): types.GetStatesActionFailure => ({
  type: types.GET_STATES_FAILURE,
  payload: params,
});

export const clearContext = (): types.ClearContextAction => ({
  type: types.CLEAR_CONTEXT,
});
