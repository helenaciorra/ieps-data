import { Action, InitialActionsStatus } from '../types';
import {
  adaptCitiesOptions,
  adaptCitiesVisualization,
  adaptCityVisualization,
  adaptCountryToMapRankingVisualization,
  adaptCountryVisualization,
  adaptDataToCirclePackingVisualization,
  adaptDataToMapRankingVisualization,
  adaptDataToTimeLineVisualization,
  adaptMacroRegionVisualization,
  adaptRegionVisualization,
  adaptStatesOptions,
  adaptStateToMapRankingVisualization,
  adaptStateVisualization,
  adaptVisualizationIndicators,
  adaptDataToMapRankingBrazilVisualization,
  adaptRegionsOptions,
  adaptMacrosOptions
} from './visualizations.adapters';
import * as types from './visualizations.types';

const InitialState: types.VisualizationState = {
  error: {},
  indicators: [],
  firstIndicators: [],
  secondIndicators: [],
  timeLineIndicators: [],
  cityOptions: [],
  regionOptions: [],
  macroOptions:[],
  stateOptions: [],
  dataToMapRanking: [],
  dataToMapRankingBrazil: [],
  // eslint-disable-next-line prettier/prettier
  dataToCirclePacking: {} as types.CirclePackingData,
  dataToTimeLine: {} as types.DataToTimeLine,
  city: {} as types.DataToDispersion,
  country: {} as types.LocalToMapRanking,
  countryDispersion: {} as types.DataToDispersion,
  state: {} as types.LocalToMapRanking,
  stateDispersion: {} as types.DataToDispersion,
  region: {} as types.DataToDispersion,
  macroRegion: {} as types.DataToDispersion,
  cities: [],
  actionsStatus: InitialActionsStatus,
};

const visualizationIndicatorsReducer = (
  state = InitialState,
  action: Action
): types.VisualizationState => {

  switch (action.type) {
    case types.GET_VISUALIZATIONS_REQUEST:
      return {
        ...state,
        actionsStatus: {
          ...state.actionsStatus,
          isGettingEntry: true,
          isLoadingUfMapData: true,
        },
      };

    case types.GET_VISUALIZATIONS_SUCCESS:
      return {
        ...state,
        firstIndicators: adaptVisualizationIndicators(
          action.payload.indicators
        ),
        actionsStatus: {
          ...state.actionsStatus,
          isGettingEntry: false,
          isLoadingUfMapData: false,
        },
      };

    case types.GET_INDICATORS_SUCCESS:
      return {
        ...state,
        indicators: adaptVisualizationIndicators(
          action.payload.indicators
        ),
        actionsStatus: {
          ...state.actionsStatus,
          isGettingEntry: false,
        },
      };

    case types.GET_FIRST_INDICATORS_SUCCESS:
      return {
        ...state,
        firstIndicators: adaptVisualizationIndicators(
          action.payload.indicators
        ),
        actionsStatus: {
          ...state.actionsStatus,
          isGettingEntry: false,
        },
      };

    case types.GET_SECOND_INDICATORS_SUCCESS:
      return {
        ...state,
        secondIndicators: adaptVisualizationIndicators(
          action.payload.indicators
        ),
        actionsStatus: {
          ...state.actionsStatus,
          isGettingEntry: false,
        },
      };

    case types.GET_TIME_LINE_INDICATORS_SUCCESS:
      return {
        ...state,
        timeLineIndicators: adaptVisualizationIndicators(
          action.payload.indicators
        ),
        actionsStatus: {
          ...state.actionsStatus,
          isGettingEntry: false,
        },
      };

    case types.GET_CITIES_SUCCESS:
      return {
        ...state,
        cityOptions: adaptCitiesOptions(
          action.payload
        ),
        actionsStatus: {
          ...state.actionsStatus,
          isGettingEntry: false,
        },
      };

    case types.GET_REGIONS_SUCCESS:
      return {
        ...state,
        regionOptions: adaptRegionsOptions(
          action.payload
        ),
        actionsStatus: {
          ...state.actionsStatus,
          isGettingEntry: false,
        },
      };

    case types.GET_MACROS_SUCCESS:
      return {
        ...state,
        macroOptions: adaptMacrosOptions(
          action.payload
        ),
        actionsStatus: {
          ...state.actionsStatus,
          isGettingEntry: false,
        },
      };

    case types.GET_STATES_SUCCESS:
      return {
        ...state,
        stateOptions: adaptStatesOptions(
          action.payload
        ),
        actionsStatus: {
          ...state.actionsStatus,
          isGettingEntry: false,
        },
      };

    case types.GET_DISPERSION_DATA_SUCCESS:
      return {
        ...state,
        city: adaptCityVisualization(action.payload.city, action.payload.firstIndicator, action.payload.secondIndicator),
        countryDispersion: adaptCountryVisualization(action.payload.country, action.payload.firstIndicator, action.payload.secondIndicator),
        stateDispersion: adaptStateVisualization(action.payload.state, action.payload.firstIndicator, action.payload.secondIndicator),
        region: adaptRegionVisualization(action.payload.region, action.payload.firstIndicator, action.payload.secondIndicator),
        macroRegion: adaptMacroRegionVisualization(action.payload.macroRegion, action.payload.firstIndicator, action.payload.secondIndicator),
        cities: adaptCitiesVisualization(action.payload.cities, action.payload.firstIndicator, action.payload.secondIndicator),
        actionsStatus: {
          ...state.actionsStatus,
          isGettingEntry: false,
        },
      };

    case types.GET_MAP_RANKING_DATA_SUCCESS:
      return {
        ...state,
        dataToMapRanking: adaptDataToMapRankingVisualization(action.payload.data, action.payload.indicator, action.payload.granularity),
        state: adaptStateToMapRankingVisualization(action.payload.state, action.payload.indicator),
        country: adaptCountryToMapRankingVisualization(action.payload.country, action.payload.indicator),
        actionsStatus: {
          ...state.actionsStatus,
          isLoadingUfMapData: false,
        },
      };

    case types.GET_MAP_RANKING_BRAZIL_DATA_SUCCESS:
      return {
        ...state,
        state: adaptStateToMapRankingVisualization(action.payload.state, action.payload.indicator),
        dataToMapRankingBrazil: adaptDataToMapRankingBrazilVisualization(action.payload.data, action.payload.indicator),
        actionsStatus: {
          ...state.actionsStatus,
          isLoadingUfMapData: false,
        },
      };

    case types.GET_PACKING_DATA_SUCCESS:
      return {
        ...state,
        dataToCirclePacking: adaptDataToCirclePackingVisualization(action.payload.data, action.payload.indicator),
        actionsStatus: {
          ...state.actionsStatus,
        },
      };

    case types.GET_TIME_LINE_DATA_SUCCESS:
      return {
        ...state,
        dataToTimeLine: adaptDataToTimeLineVisualization(action.payload.country, action.payload.indicator, action.payload.state, action.payload.city, action.payload.region, action.payload.macroRegion),
        actionsStatus: {
          ...state.actionsStatus,
          isGettingEntry: false,
        },
      };

    case types.GET_VISUALIZATIONS_FAILURE:
      return {
        ...state,
        actionsStatus: {
          ...state.actionsStatus,
          isGettingEntry: false,
        },
      };

    case types.CLEAR_CONTEXT:
      return {
        ...state,
        indicators: [],
        firstIndicators: [],
        secondIndicators: [],
        timeLineIndicators: [],
        cityOptions: [],
        stateOptions: [],
        dataToMapRanking: [],
        dataToCirclePacking: {} as types.CirclePackingData,
        dataToTimeLine: {} as types.DataToTimeLine,
        city: {} as types.DataToDispersion,
        country: {} as types.LocalToMapRanking,
        countryDispersion: {} as types.DataToDispersion,
        state: {} as types.LocalToMapRanking,
        stateDispersion: {} as types.DataToDispersion,
        region: {} as types.DataToDispersion,
        macroRegion: {} as types.DataToDispersion,
        cities: [],
        actionsStatus: {
          ...state.actionsStatus,
          isGettingEntry: false,
        },
      };

    default:
      return state;
  }
};

export default visualizationIndicatorsReducer;
