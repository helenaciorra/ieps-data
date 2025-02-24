import { HttpResponse } from '../../utils/HttpFetch';
import { ActionsStatus, SelectOption, StateError } from '../types';

export type Indicator = {
  variable: string,
  variabledOld: string,
  nomeIndicadores: string,
  bloco: string,
  direction: string,
  denominator: string,
  format: string,
  apenasDownload: string,
  shortdLabel: string,
  decPlaces: string,
  viz: string,
  vizReg: string,
  vizUf: string,
  bloqAnos: string,
  bloqViz: string,
  alerta: string,
  id: string,
  AbreviaEs: string[],
};

export type IndicatorsStates = {
  indicators: Indicator[],
  indicatorsBlock: { [key: string]: { name: string, variable: string }[] },
  actionsStatus: ActionsStatus & { isLoadingUfMapData?: boolean, isDownloading?: boolean },
  munIndicators?: string,
  downloadSuccess: boolean
  error: StateError,
};

export const scope = 'indicators';

export const GET_INDICATORS_REQUEST = `@${scope}:GET_INDICATORS_REQUEST`;
export const GET_INDICATORS_SUCCESS = `@${scope}:GET_INDICATORS_SUCCESS`;
export const GET_INDICATORS_FAILURE = `@${scope}:GET_INDICATORS_FAILURE`;

export const GET_MUN_INDICATORS_REQUEST = `@${scope}:GET_MUN_INDICATORS_REQUEST`;
export const GET_MUN_INDICATORS_SUCCESS = `@${scope}:GET_MUN_INDICATORS_SUCCESS`;
export const GET_MUN_INDICATORS_FAILURE = `@${scope}:GET_MUN_INDICATORS_FAILURE`;

export interface GetIndicatorsBlocksRequest {
  type: typeof GET_INDICATORS_REQUEST;
}

export interface GetIndicatorsBlocksSuccess {
  type: typeof GET_INDICATORS_SUCCESS;
  payload: any;
}

export interface GetIndicatorsBlocksFailure {
  type: typeof GET_INDICATORS_FAILURE;
  payload: number;
}

export interface GetMunIndicatorsBlocksRequest {
  type: typeof GET_MUN_INDICATORS_REQUEST;
}

export interface GetMunIndicatorsBlocksSuccess {
  type: typeof GET_MUN_INDICATORS_SUCCESS;
  payload: any;
}

export interface GetMunIndicatorsBlocksFailure {
  type: typeof GET_MUN_INDICATORS_FAILURE;
  payload: number;
}

export type HealthPanoramaActionTypes =
  | GetIndicatorsBlocksRequest
  | GetIndicatorsBlocksSuccess
  | GetIndicatorsBlocksFailure
  | GetMunIndicatorsBlocksRequest
  | GetMunIndicatorsBlocksSuccess
  | GetMunIndicatorsBlocksFailure;
