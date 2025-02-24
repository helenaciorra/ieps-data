import { HttpFetch, HttpResponse, RequestError } from '../../utils/HttpFetch';
import { DispatchFn } from '../types';
import * as actions from './uf-cities.actions';
import * as api from './uf-cities.api';
import * as types from './uf-cities.types';

const cityCacheMap: Map<string, HttpResponse<types.CityQuery>> = new Map();
const ufCacheMap: Map<string, HttpResponse<types.UfMapData>> = new Map();
const yearCacheMap: Map<string, HttpResponse<any>> = new Map();

let responseCity: HttpResponse<types.CityQuery> = {} as HttpResponse<types.CityQuery>;
let responseUf: HttpResponse<types.UfMapData> = {} as HttpResponse<types.UfMapData>;


export const getCities = (dispatch: DispatchFn) => {
  return async (city:string, year: string) => {
    try {
      dispatch(actions.getCitiesRequest());

      const yearFormatted = year.replace('em ', '');

      if (!cityCacheMap.has(city) || !yearCacheMap.has(yearFormatted)) {
        responseCity = await HttpFetch<types.CityQuery>(api.getCitiesQuery(city, yearFormatted));
        cityCacheMap.set(city, responseCity);
        yearCacheMap.set(yearFormatted, responseCity);
      } else {
        responseCity = cityCacheMap.get(city) as HttpResponse<types.CityQuery>;
      }


      if (responseCity.status === 200) {
        dispatch(actions.getCitiesSuccess(responseCity));
      }
    } catch (error) {
      console.warn(error)
      // eslint-disable-next-line prettier/prettier
      dispatch(actions.getCitiesFailure((error as RequestError)?.status || 500));
    }
  };
};

export const getUfMapData = (dispatch: DispatchFn) => {
  return async (region:string, year: string) => {
    try {
      dispatch(actions.getUfMapDataRequest());

      const yearFormatted = year.replace('em ', '');

      if (!ufCacheMap.has(region) || !yearCacheMap.has(yearFormatted)) {
        responseUf = await HttpFetch<types.UfMapData>(api.getCitiesQuery(region, yearFormatted));
        ufCacheMap.set(region, responseUf);
        yearCacheMap.set(yearFormatted, responseUf);
      } else {
        responseUf = ufCacheMap.get(region) as HttpResponse<types.UfMapData>;
      }

      if (responseUf.status === 200) {
        dispatch(actions.getUfMapDataSuccess(responseUf));
      }
    } catch (error) {
      console.warn(error)
      // eslint-disable-next-line prettier/prettier
      dispatch(actions.getUfMapDataFailure((error as RequestError)?.status || 500));
    }
  };
};
