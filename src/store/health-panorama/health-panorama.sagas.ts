import { HttpFetch, HttpResponse, RequestError } from '../../utils/HttpFetch';
import { DispatchFn } from '../types';
import * as actions from './health-panorama.actions';
import * as api from './health-panorama.api';
import * as types from './health-panorama.types';

const cityCacheMap: Map<string, HttpResponse<types.HealthPanorama>> = new Map();
const regionCacheMap: Map<string, HttpResponse<types.HealthPanorama>> = new Map();
const yearCacheMap: Map<string, HttpResponse<types.HealthPanorama>> = new Map();
const ufCacheMap: Map<string, HttpResponse<types.HealthPanorama>> = new Map();
 
// eslint-disable-next-line prettier/prettier
let responseCity: HttpResponse<types.HealthPanorama> = {} as HttpResponse<types.HealthPanorama>;
let responseRegion: HttpResponse<types.HealthPanorama> = {} as HttpResponse<types.HealthPanorama>;
let responseState: HttpResponse<types.HealthPanorama> = {} as HttpResponse<types.HealthPanorama>;
let responseCountry: HttpResponse<types.HealthPanorama> = {} as HttpResponse<types.HealthPanorama>;

export const getHealthPanorama = (dispatch: DispatchFn) => {
  return async (city:string, year: string, uf:string, region:string) => { 
    try {
      const yearFormatted = year.replace('em ', '');
      dispatch(actions.getHealthPanoramaRequest());
      const cityKey = `${city}_${yearFormatted}`
      const regionKey = `${region}_${yearFormatted}` 
      const ufKey = `${uf}_${yearFormatted}` 

      if(
        !cityCacheMap.has(cityKey) ||
        !regionCacheMap.has(regionKey) ||
        !yearCacheMap.has(yearFormatted) ||
        !ufCacheMap.has(uf)
      ) {

        [responseCity, responseRegion, responseState, responseCountry] = await Promise.all([
          HttpFetch<types.HealthPanorama>(api.getCityHealthPanoramaQuery(city, yearFormatted)),
          HttpFetch<types.HealthPanorama>(api.getRegionHealthPanoramaQuery(region, yearFormatted)),
          HttpFetch<types.HealthPanorama>(api.getStateHealthPanoramaQuery(uf, yearFormatted)),
          HttpFetch<types.HealthPanorama>(api.getCountryHealthPanoramaQuery(yearFormatted))
        ]);

        cityCacheMap.set(cityKey, responseCity)
        regionCacheMap.set(regionKey, responseRegion)
        ufCacheMap.set(ufKey, responseState)
        yearCacheMap.set(yearFormatted, responseCountry)
      } else {
        responseCity = cityCacheMap.get(cityKey) as HttpResponse<types.HealthPanorama>;
        responseRegion = regionCacheMap.get(regionKey) as HttpResponse<types.HealthPanorama>;
        responseState = ufCacheMap.get(ufKey) as HttpResponse<types.HealthPanorama>;
        responseCountry = yearCacheMap.get(yearFormatted) as HttpResponse<types.HealthPanorama>;
      }

      if (
        responseCity.status === 200  &&
        responseRegion.status === 200 &&
        responseState.status === 200 &&
        responseCountry.status === 200
      ) {
        dispatch(actions.getHealthPanoramaSuccess(responseCity, responseRegion, responseState, responseCountry));
      }
    } catch (error) {
      console.warn(error)
      // eslint-disable-next-line prettier/prettier
      dispatch(actions.getHealthPanoramaFailure((error as RequestError)?.status || 500));
    }
  };
};

