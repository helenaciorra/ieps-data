import { HttpResponse } from '../../utils/HttpFetch';
import * as types from './indicators.types';

export const getIndicatorsRequest = (): types.GetIndicatorsBlocksRequest => ({
  type: types.GET_INDICATORS_REQUEST,
});

export const getIndicatorsSuccess = (
  data: HttpResponse<types.Indicator[]>
): types.GetIndicatorsBlocksSuccess => ({
  type: types.GET_INDICATORS_SUCCESS,
  payload: data,
});

export const getIndicatorsFailure = (
  status: number
): types.GetIndicatorsBlocksSuccess => ({
  type: types.GET_INDICATORS_FAILURE,
  payload: status,
});

export const getMunIndicatorsRequest =
  (): types.GetMunIndicatorsBlocksRequest => ({
    type: types.GET_MUN_INDICATORS_REQUEST,
  });

export const getMunIndicatorsSuccess = (
  data: HttpResponse<string>
): types.GetMunIndicatorsBlocksSuccess => ({
  type: types.GET_MUN_INDICATORS_SUCCESS,
  payload: data,
});

export const getMunIndicatorsFailure = (
  status: number
): types.GetMunIndicatorsBlocksSuccess => ({
  type: types.GET_MUN_INDICATORS_FAILURE,
  payload: status,
});
