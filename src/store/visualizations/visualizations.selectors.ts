import { RootState } from '../rootReducer';
import { ActionsStatus, SelectOption } from '../types';
import {
  CirclePackingData,
  DataToDispersion,
  DataToMapRanking,
  DataToMapRankingBrazil,
  DataToTimeLine,
} from './visualizations.types';

export const selectFirstIndicatorOptions = (state: RootState): SelectOption[] =>
  state?.visualization?.firstIndicators || [];

export const selectSecondIndicatorOptions = (
  state: RootState
): SelectOption[] => state?.visualization?.secondIndicators || [];

export const selectIndicatorOptions = (state: RootState): SelectOption[] =>
  state?.visualization?.indicators || [];

export const cityData = (
  state: RootState
): DataToDispersion | DataToTimeLine[] => state?.visualization?.city || {};

export const citiesData = (
  state: RootState
): DataToDispersion | DataToTimeLine[] => state?.visualization?.cities || [];

export const countryData = (
  state: RootState
): DataToDispersion | DataToTimeLine[] =>
  state?.visualization?.country || {} || [];

export const countryDispersionData = (
  state: RootState
): DataToDispersion | DataToTimeLine[] =>
  state?.visualization?.countryDispersion || {} || [];

export const stateData = (
  state: RootState
): DataToDispersion | DataToTimeLine[] =>
  state?.visualization?.state || {} || [];

export const stateDispersionData = (
  state: RootState
): DataToDispersion | DataToTimeLine[] =>
  state?.visualization?.stateDispersion || {} || [];

export const regionData = (
  state: RootState
): DataToDispersion | DataToTimeLine[] =>
  state?.visualization?.region || {} || [];

export const macroRegionData = (
  state: RootState
): DataToDispersion | DataToTimeLine[] =>
  state?.visualization?.macroRegion || {} || [];

export const cityOptions = (state: RootState): SelectOption[] =>
  state?.visualization?.cityOptions || [];

export const regionsOptions = (state: RootState): SelectOption[] =>
  state?.visualization?.regionOptions || [];

export const macrosOptions = (state: RootState): SelectOption[] =>
  state?.visualization?.macroOptions || [];

export const stateOptions = (state: RootState): SelectOption[] =>
  state?.visualization?.stateOptions || [];

export const timeLineIndicatorOptions = (state: RootState): SelectOption[] =>
  state?.visualization?.timeLineIndicators || [];

export const dataToMapRanking = (state: RootState): DataToMapRanking[] =>
  state?.visualization?.dataToMapRanking || [];

export const dataToMapRankingBrazil = (
  state: RootState
): DataToMapRankingBrazil[] =>
  state?.visualization?.dataToMapRankingBrazil || [];

export const dataToTimeLine = (state: RootState): DataToTimeLine =>
  state?.visualization?.dataToTimeLine || {};

export const dataToCirclePacking = (state: RootState): CirclePackingData =>
  state?.visualization?.dataToCirclePacking || {};

export const selectLoadings = (state: RootState): ActionsStatus =>
  state?.visualization?.actionsStatus || {};
