import { RootState } from '../rootReducer';
import { ActionsStatus, SelectOption } from '../types';
import * as types from './uf-cities.types';

export const selectUfs = (state: RootState): types.Uf[] =>
  state.ufCities?.ufs || [];

export const selectYears = (state: RootState): number[] =>
  (state?.ufCities?.years || []).map((year: number) => ({
    label: `em ${year}`,
    value: `em ${year}`,
  }));

export const selectCityOptions = (state: RootState): SelectOption[] =>
  state?.ufCities?.cityOptions || [];

export const selectLoadings = (state: RootState): ActionsStatus =>
  state?.ufCities?.actionsStatus || {};

export const selectUfMapData = (state: RootState): types.UfMapData[] =>
  state?.ufCities?.ufMapData || [];
