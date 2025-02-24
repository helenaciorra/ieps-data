import { HttpResponse } from '../../utils/HttpFetch';
import * as types from './health-panorama.types';

export const getHealthPanoramaRequest =
  (): types.GetHealthPanoramaActionRequest => ({
    type: types.GET_HEALTH_PANORAMA_REQUEST,
  });

export const getHealthPanoramaSuccess = (
  dataCity: HttpResponse<types.HealthPanorama>,
  dataRegion: HttpResponse<types.HealthPanorama>,
  dataState: HttpResponse<types.HealthPanorama>,
  dataCountry: HttpResponse<types.HealthPanorama>
): types.GetHealthPanoramaActionSuccess => ({
  type: types.GET_HEALTH_PANORAMA_SUCCESS,
  payload: {
    dataCity,
    dataRegion,
    dataState,
    dataCountry,
  },
});

export const getHealthPanoramaFailure = (
  params: number
): types.GetHealthPanoramaActionFailure => ({
  type: types.GET_HEALTH_PANORAMA_FAILURE,
  payload: params,
});
