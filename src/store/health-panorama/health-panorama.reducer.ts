import { Action, InitialActionsStatus } from '../types';
import { adaptHealthPanorama } from './health-panorama.adapters';
import * as types from './health-panorama.types';

const InitialState: types.HealthPanoramaState = {
  error: {},
  actionsStatus: InitialActionsStatus,
  healthPanorama: {},
  healthPanoramaState: {},
  healthPanoramaRegion: {},
  healthPanoramaCountry: {},
};

const ufCitiesReducer = (
  state = InitialState,
  action: Action
): types.HealthPanoramaState => {
  switch (action.type) {
    case types.GET_HEALTH_PANORAMA_REQUEST:
      return {
        ...state,
        actionsStatus: {
          ...state.actionsStatus,
          isGettingEntry: true,
        },
      };

    case types.GET_HEALTH_PANORAMA_SUCCESS:
      return {
        ...state,
        healthPanorama: adaptHealthPanorama(action.payload.dataCity),
        healthPanoramaRegion: adaptHealthPanorama(action.payload.dataRegion),
        healthPanoramaState: adaptHealthPanorama(action.payload.dataState),
        healthPanoramaCountry: adaptHealthPanorama(action.payload.dataCountry),
        actionsStatus: {
          ...state.actionsStatus,
          isGettingEntry: false,
        },
      };

    case types.GET_HEALTH_PANORAMA_FAILURE:
      return {
        ...state,
        actionsStatus: {
          ...state.actionsStatus,
          isGettingEntry: false,
        },
      };

    default:
      return state;
  }
};

export default ufCitiesReducer;
