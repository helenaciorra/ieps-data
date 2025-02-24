import { HttpResponse } from '../../utils/HttpFetch';
import { ActionsStatus, SelectOption, StateError, UfCod } from '../types';

export type Uf = {
  id: string,
  estado: string,
  estadoAbrev: string,
  id_estado: string,
};

export type CityQuery = {
  ano: string,
  codmun: string,
  nomemun: string,
  estadoAbrev: string,
  regiao: string,
  macrorregiao: string,
};

export type UfMapData = {
  regiao: string,
  idMunic7: string,
};

export type UfCitiesState = {
  error: StateError,
  years: number[],
  ufs: Uf[],
  cityOptions: SelectOption[],
  actionsStatus: ActionsStatus & { isLoadingUfMapData?: boolean },
  ufMapData: UfMapData[],
};

export const scope = 'ufCities';

export const GET_CITIES_REQUEST = `@${scope}:GET_CITIES_REQUEST`;
export const GET_CITIES_SUCCESS = `@${scope}:GET_CITIES_SUCCESS`;
export const GET_CITIES_FAILURE = `@${scope}:GET_CITIES_FAILURE`;

export const GET_UF_DATA_FOR_MAP_REQUEST = `@${scope}:GET_UF_DATA_FOR_MAP_REQUEST`;
export const GET_UF_DATA_FOR_MAP_SUCCESS = `@${scope}:GET_UF_DATA_FOR_MAP_SUCCESS`;
export const GET_UF_DATA_FOR_MAP_FAILURE = `@${scope}:GET_UF_DATA_FOR_MAP_FAILURE`;

export interface GetCitiesActionRequest {
  type: typeof GET_CITIES_REQUEST;
}

export interface GetCitiesActionSuccess {
  type: typeof GET_CITIES_SUCCESS;
  payload: HttpResponse<CityQuery>;
}

export interface GetCitiesActionFailure {
  type: typeof GET_CITIES_FAILURE;
  payload: number;
}

export interface GetUfDataForMapActionRequest {
  type: typeof GET_UF_DATA_FOR_MAP_REQUEST;
}

export interface GetUfDataForMapActionSuccess {
  type: typeof GET_UF_DATA_FOR_MAP_SUCCESS;
  payload: HttpResponse<UfMapData>;
}

export interface GetUfDataForMapActionFailure {
  type: typeof GET_UF_DATA_FOR_MAP_FAILURE;
  payload: number;
}
export type UfCitiesActionTypes =
  | GetCitiesActionRequest
  | GetCitiesActionSuccess
  | GetCitiesActionFailure
  | GetUfDataForMapActionRequest
  | GetUfDataForMapActionSuccess
  | GetUfDataForMapActionFailure;
