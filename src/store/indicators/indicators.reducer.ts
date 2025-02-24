import { Action, InitialActionsStatus } from '../types';
import { adaptIndicatorsBlocks, adaptIndicators } from './indicators.adapters';
import * as types from './indicators.types';

const InitialState: types.IndicatorsStates = {
  error: {},
  actionsStatus: InitialActionsStatus,
  indicators: [],
  indicatorsBlock: {},
  munIndicators: undefined,
  downloadSuccess: false,
};

const indicatorsReducer = (
  state = InitialState,
  action: Action
): types.IndicatorsStates => {
  switch (action.type) {
    case types.GET_INDICATORS_REQUEST:
      return {
        ...state,
        actionsStatus: {
          ...state.actionsStatus,
          isGettingEntry: true,
        },
      };

    case types.GET_INDICATORS_SUCCESS:
      return {
        ...state,
        indicators: adaptIndicators(action.payload),
        indicatorsBlock: adaptIndicatorsBlocks(action.payload),
        actionsStatus: {
          ...state.actionsStatus,
          isGettingEntry: false,
        },
      };

    case types.GET_INDICATORS_FAILURE:
      return {
        ...state,
        actionsStatus: {
          ...state.actionsStatus,
          isGettingEntry: false,
        },
      };

    case types.GET_MUN_INDICATORS_REQUEST:
      return {
        ...state,
        munIndicators: undefined,
        downloadSuccess: false,
        actionsStatus: {
          ...state.actionsStatus,
          isGettingAll: true,
        },
      };

    case types.GET_MUN_INDICATORS_SUCCESS:
      return {
        ...state,
        munIndicators: action.payload.data,
        downloadSuccess: true,
        actionsStatus: {
          ...state.actionsStatus,
          isGettingAll: false,
        },
      };

    case types.GET_MUN_INDICATORS_FAILURE:
      return {
        ...state,
        downloadSuccess: false,
        actionsStatus: {
          ...state.actionsStatus,
          isGettingAll: false,
        },
      };

    default:
      return state;
  }
};

export default indicatorsReducer;
