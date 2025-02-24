import React, { ReactNode } from 'react';
import { theme } from '../constants/theme';

export type Themes =
  | 'home'
  | 'panorama'
  | 'visualization'
  | 'methods'
  | 'downloads'
  | 'projects';

export type DispatchFn = (params: { type: string, payload?: any }) => void;

export type Theme = ReturnType<typeof theme>;
export interface Action {
  type: any;
  payload?: any;
}

export type ActionsStatus = {
  isGettingAll?: boolean,
  isGettingEntry?: boolean,
  isCreating?: boolean,
  isUpdating?: boolean,
  isDeleting?: boolean,
};

export type StateError = {
  hasError?: boolean,
  msg?: string,
  status?: number,
};

export const InitialActionsStatus: ActionsStatus = {
  isGettingAll: false,
  isGettingEntry: false,
  isCreating: false,
  isUpdating: false,
  isDeleting: false,
};

export const ACCESS_DATA = {
  username: 'ieps@ieps.org.br',
  password: 'iepsdatasaudebrasil',
  token: 'ieps-token-357951258456',
  tokenKey: 'ieps-token',
};

export type PathLocation = {
  hash: string,
  host: string,
  hostname: string,
  href: string,
  key: string,
  origin: string,
  pathname: string,
  port: string,
  protocol: string,
  search: string,
  state: { key: string },
};

export type SelectOption = {
  label: string,
  alternativeLabel?: string,
  componentData?: any,
  componentNode?: boolean,
  value: string,
  data?: any,
};

export type UfCod =
  | 'UF12MU'
  | 'UF27MU'
  | 'UF16MU'
  | 'UF13MU'
  | 'UF29MU'
  | 'BRUF'
  | 'UF23MU'
  | 'UF53MU'
  | 'UF32MU'
  | 'UF52MU'
  | 'UF21MU'
  | 'UF51MU'
  | 'UF50MU'
  | 'UF31MU'
  | 'UF15MU'
  | 'UF41MU'
  | 'UF11MU'
  | 'UF25MU'
  | 'UF26MU'
  | 'UF22MU'
  | 'UF33MU'
  | 'UF24MU'
  | 'UF43MU'
  | 'UF14MU'
  | 'UF35MU'
  | 'UF28MU'
  | 'UF42MU'
  | 'UF17MU'
  | '12'
  | '27'
  | '16'
  | '13'
  | '29'
  | '23'
  | '53'
  | '32'
  | '52'
  | '21'
  | '51'
  | '50'
  | '31'
  | '15'
  | '41'
  | '11'
  | '25'
  | '26'
  | '22'
  | '33'
  | '24'
  | '43'
  | '14'
  | '35'
  | '28'
  | '42'
  | '17';
