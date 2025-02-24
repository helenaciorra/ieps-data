import { RootState } from '../rootReducer';
import { ActionsStatus } from '../types';
import * as types from './indicators.types';

export const selectLoadings = (state: RootState): ActionsStatus =>
  state.indicators?.actionsStatus || {};

export const selectIndicators = (state: RootState): types.Indicator[] =>
  state.indicators?.indicators || [];

export const selectIndicatorsBlock = (
  state: RootState
): { [key: string]: string[] } => state.indicators?.indicatorsBlock || {};

export const selectMunIndicators = (state: RootState): string =>
  state.indicators?.munIndicators || '';
