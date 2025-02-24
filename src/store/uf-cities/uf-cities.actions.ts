import { HttpResponse } from '../../utils/HttpFetch';
import * as types from './uf-cities.types';

export const getCitiesRequest = (): types.GetCitiesActionRequest => ({
  type: types.GET_CITIES_REQUEST,
});

export const getCitiesSuccess = (
  data: HttpResponse<types.CityQuery>
): types.GetCitiesActionSuccess => ({
  type: types.GET_CITIES_SUCCESS,
  payload: data,
});

export const getCitiesFailure = (
  params: number
): types.GetCitiesActionFailure => ({
  type: types.GET_CITIES_FAILURE,
  payload: params,
});

export const getUfMapDataRequest = (): types.GetUfDataForMapActionRequest => ({
  type: types.GET_UF_DATA_FOR_MAP_REQUEST,
});

export const getUfMapDataSuccess = (
  data: HttpResponse<types.UfMapData>
): types.GetUfDataForMapActionSuccess => ({
  type: types.GET_UF_DATA_FOR_MAP_SUCCESS,
  payload: data,
});

export const getUfMapDataFailure = (
  params: number
): types.GetUfDataForMapActionFailure => ({
  type: types.GET_UF_DATA_FOR_MAP_FAILURE,
  payload: params,
});
