import { HttpResponse } from '../../utils/HttpFetch';
import { ActionsStatus, SelectOption, StateError, UfCod } from '../types';

export type HealthPanorama = {
  Version: number,
  ano: string,
  cobAb: number, //Cobertura da Atenção Básica (%)
  cobAcs: number,
  cobEsf: number,
  cobPriv: number,
  cobVacBcg: number,
  cobVacHepa: number,
  cobVacHepb: number,
  cobVacMenin: number,
  cobVacPenta: number,
  cobVacPolio: number, //Cobertura Vacinal de Poliomielite (%)
  cobVacPneumo: number,
  cobVacRota: number,
  cobVacTvd1: number,
  codmun: string,
  despRecpSaudePcMun: number,
  despRecpSaudePcMunDef: number,
  despTotSaudePcMun: number,
  despTotSaudePcMunDef: number,
  estado: UfCod,
  estadoAbrev: string,
  expVida: number,
  expVidaAux: number,
  gastoPbfPcDef: number,
  id: string,
  idEstado: UfCod,
  idMunic7: string,
  ideb5ano: number,
  ideb9ano: number,
  idhm: number,
  idhmEduc: number,
  idhmLong: number,
  idhmRenda: number,
  macrorregiao: string,
  nEnf: number,
  nEnfCh: string,
  nHosp: number,
  nHospCsap: number,
  nHospMaldef: number,
  nLeitoNsus: number,
  nLeitoSus: number,
  nLeitoutiNsus: number,
  nLeitoutiSus: number,
  nMed: number,
  nMedCh: string,
  nObitos: number,
  nObitosCsap: number,
  nObitosEvit: number,
  nObitosMaldef: number,
  noMacro: string,
  noRegiao: string,
  nomemun: string,
  numFamiliasBf: number,
  pctDespRecpSaudeMun: number,
  pctHospMaldef: number,
  pctMortMaldef: number,
  pctPop0a4: number,
  pctPop0a4Fem: number,
  pctPop0a4Masc: number,
  pctPop5a9: number,
  pctPop5a9Fem: number,
  pctPop5a9Masc: number,
  pctPop5a14: number,
  pctPop10a14: number,
  pctPop10a14Fem: number,
  pctPop10a14Masc: number,
  pctPop10a49Fem: number,
  pctPop15a19: number,
  pctPop15a19Fem: number,
  pctPop15a19Masc: number,
  pctPop15a64: number,
  pctPop20a24: number,
  pctPop20a24Fem: number,
  pctPop20a24Masc: number,
  pctPop25a29: number,
  pctPop25a29Fem: number,
  pctPop25a29Masc: number,
  pctPop30a34: number,
  pctPop30a34Fem: number,
  pctPop30a34Masc: number,
  pctPop35a39: number,
  pctPop35a39Fem: number,
  pctPop35a39Masc: number,
  pctPop40a44: number,
  pctPop40a44Fem: number,
  pctPop40a44Masc: number,
  pctPop45a49: number,
  pctPop45a49Fem: number,
  pctPop45a49Masc: number,
  pctPop50a54: number,
  pctPop50a54Fem: number,
  pctPop50a54Masc: number,
  pctPop55a59: number,
  pctPop55a59Fem: number,
  pctPop55a59Masc: number,
  pctPop60a64: number,
  pctPop60a64Fem: number,
  pctPop60a64Masc: number,
  pctPop65a69: number,
  pctPop65a69Fem: number,
  pctPop65a69Masc: number,
  pctPop65m: number,
  pctPop70a74: number,
  pctPop70a74Fem: number,
  pctPop70a74Masc: number,
  pctPop75a79: number,
  pctPop75a79Fem: number,
  pctPop75a79Masc: number,
  pctPop75m: number,
  pctPop80m: number,
  pctPop80mFem: number,
  pctPop80mMasc: number,
  pctPopFem: number,
  pctPopMasc: number,
  pctPrenatal1a6: number,
  pctPrenatal7m: number,
  pctPrenatalAdeq: number, // Nascidos Vivos com Pré-Natal Adequado (%)
  pctPrenatalZero: number,
  pctRural: number,
  pctSanAdeq: number,
  pibCtePc: number,
  pop: number,
  pop0a4: number,
  pop0a4Fem: number,
  pop0a4Masc: number,
  pop5a9: number,
  pop5a9Fem: number,
  pop5a9Masc: number,
  pop10a14: number,
  pop10a14Fem: number,
  pop10a14Masc: number,
  pop15a19: number,
  pop15a19Fem: number,
  pop15a19Masc: number,
  pop20a24: number,
  pop20a24Fem: number,
  pop20a24Masc: number,
  pop25a29: number,
  pop25a29Fem: number,
  pop25a29Masc: number,
  pop30a34: number,
  pop30a34Fem: number,
  pop30a34Masc: number,
  pop35a39: number,
  pop35a39Fem: number,
  pop35a39Masc: number,
  pop40a44: number,
  pop40a44Fem: number,
  pop40a44Masc: number,
  pop45a49: number,
  pop45a49Fem: number,
  pop45a49Masc: number,
  pop50a54: number,
  pop50a54Fem: number,
  pop50a54Masc: number,
  pop55a59: number,
  pop55a59Fem: number,
  pop55a59Masc: number,
  pop60a64: number,
  pop60a64Fem: number,
  pop60a64Masc: number,
  pop65a69: number,
  pop65a69Fem: number,
  pop65a69Masc: number,
  pop70a74: number,
  pop70a74Fem: number,
  pop70a74Masc: number,
  pop75a79: number,
  pop75a79Fem: number,
  pop75a79Masc: number,
  pop80m: number,
  pop80mFem: number,
  pop80mMasc: number,
  popFem: number,
  popMasc: number,
  regiao: string,
  rendaDomPc: number,
  txEnf: number,
  txEnfCh: number,
  txHosp: number,
  txHospCsap: number,
  txLeitoNsus: number,
  txLeitoSus: number,
  txLeitoutiNsus: number,
  txLeitoutiSus: number,
  txMed: number,
  txMedCh: number,
  txMort: number,
  txMortAjCens: number,
  txMortAjOms: number,
  txMortCsap: number,
  txMortCsapAjCens: number,
  txMortCsapAjOms: number,
  txMortEvit: number,
  txMortEvitAjCens: number,
  txMortEvitAjOms: number,
  txMortInfIbge: number,
  txPopmf: number,
};

export type BasicAttention = {
  cobAb: number,
  cobVacPolio: number,
  pctPrenatalAdeq: number,
};

export type DemographicPopulation = {
  expVida: number,
  pctPop65m: number,
  pctSanAdeq: number,
};

export type RegionHealthResources = {
  txMed: number,
  txEnf: number,
  txLeitoSus: number,
  txLeitoNsus: number,
};

export type Mortality = {
  txMortEvitAjCens: number,
  txHospCsap: number,
};

export type HealthExpending = {
  despTotSaudePcMun: number,
  despTotSaudePcMunDef: number,
  despRecpSaudePcMun: number,
  despRecpSaudePcMunDef: number,
};

export type BasicAttentionPanorama = {
  country: BasicAttention,
  state: BasicAttention,
  region: BasicAttention,
  city: BasicAttention,
};

export type DemographicPopulationPanorama = {
  country: DemographicPopulation,
  state: DemographicPopulation,
  region: DemographicPopulation,
  city: DemographicPopulation,
};

export type MortalityPanorama = {
  country: Mortality,
  state: Mortality,
  region: Mortality,
  city: Mortality,
};

export type HealthExpendingPanorama = {
  country: HealthExpending,
  state: HealthExpending,
  region: HealthExpending,
  city: HealthExpending,
};

export type RegionHealthResourcesPanorama = {
  country: RegionHealthResources,
  state: RegionHealthResources,
  region: RegionHealthResources,
  city: RegionHealthResources,
};

export type HealthPanoramaState = {
  error: StateError,
  healthPanorama: Partial<HealthPanorama>,
  healthPanoramaRegion: Partial<HealthPanorama>,
  healthPanoramaState: Partial<HealthPanorama>,
  healthPanoramaCountry: Partial<HealthPanorama>,
  actionsStatus: ActionsStatus & { isLoadingUfMapData?: boolean },
};

export const scope = 'healthPanorama';

export const GET_HEALTH_PANORAMA_REQUEST = `@${scope}:GET_HEALTH_PANORAMA_REQUEST`;
export const GET_HEALTH_PANORAMA_SUCCESS = `@${scope}:GET_HEALTH_PANORAMA_SUCCESS`;
export const GET_HEALTH_PANORAMA_FAILURE = `@${scope}:GET_HEALTH_PANORAMA_FAILURE`;

export interface GetHealthPanoramaActionRequest {
  type: typeof GET_HEALTH_PANORAMA_REQUEST;
}

export interface GetHealthPanoramaActionSuccess {
  type: typeof GET_HEALTH_PANORAMA_SUCCESS;
  payload: {
    dataCity: HttpResponse<HealthPanorama>,
    dataRegion: HttpResponse<HealthPanorama>,
    dataState: HttpResponse<HealthPanorama>,
    dataCountry: HttpResponse<HealthPanorama>,
  };
}

export interface GetHealthPanoramaActionFailure {
  type: typeof GET_HEALTH_PANORAMA_FAILURE;
  payload: number;
}

export type HealthPanoramaActionTypes =
  | GetHealthPanoramaActionRequest
  | GetHealthPanoramaActionSuccess
  | GetHealthPanoramaActionFailure;
