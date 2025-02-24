import { RootState } from '../rootReducer';
import { ActionsStatus } from '../types';
import * as types from './health-panorama.types';

export const selectLoadings = (state: RootState): ActionsStatus =>
  state.healthPanorama?.actionsStatus || {};

export const selectHealthPanorama = (state: RootState): types.HealthPanorama =>
  state.healthPanorama?.healthPanorama || {};

const isHeathPanoramaEmpty = (state: RootState): boolean => {
  return (
    !state?.healthPanorama ||
    !state?.healthPanorama?.healthPanorama ||
    !Object.keys(state?.healthPanorama?.healthPanorama).length
  );
};

export const selectBasicAttention = (
  state: RootState
): types.BasicAttentionPanorama => {
  if (isHeathPanoramaEmpty(state)) {
    return {
      country: {
        cobAb: 0,
        cobVacPolio: 0,
        pctPrenatalAdeq: 0,
      },
      state: {
        cobAb: 0,
        cobVacPolio: 0,
        pctPrenatalAdeq: 0,
      },
      region: {
        cobAb: 0,
        cobVacPolio: 0,
        pctPrenatalAdeq: 0,
      },
      city: {
        cobAb: 0,
        cobVacPolio: 0,
        pctPrenatalAdeq: 0,
      },
    };
  }

  const {
    healthPanorama,
    healthPanoramaState,
    healthPanoramaRegion,
    healthPanoramaCountry,
  }: types.HealthPanoramaState = state.healthPanorama;

  let cobAbCountry;
  let pctPrenatalAdeqCountry;
  let cobVacPolioCountry;

  let cobAbState;
  let pctPrenatalAdeqState;
  let cobVacPolioState;

  let cobAbRegion;
  let pctPrenatalAdeqRegion;
  let cobVacPolioRegion;

  let cobAb;
  let pctPrenatalAdeq;
  let cobVacPolio;

  if (typeof healthPanoramaCountry.pctPrenatalAdeq === 'string') {
    pctPrenatalAdeqCountry =
      healthPanoramaCountry.pctPrenatalAdeq === ' '
        ? -1
        : Number(`${healthPanoramaCountry.pctPrenatalAdeq}`.replace(',', '.'));
  }

  if (typeof healthPanoramaCountry.cobAb === 'string') {
    cobAbCountry =
      healthPanoramaCountry.cobAb === ' '
        ? -1
        : Number(`${healthPanoramaCountry.cobAb}`.replace(',', '.'));
  }

  if (typeof healthPanoramaCountry.cobVacPolio === 'string') {
    cobVacPolioCountry =
      healthPanoramaCountry.cobVacPolio === ' '
        ? -1
        : Number(`${healthPanoramaCountry.cobVacPolio}`.replace(',', '.'));
  }

  if (typeof healthPanoramaState.pctPrenatalAdeq === 'string') {
    pctPrenatalAdeqState =
      healthPanoramaState.pctPrenatalAdeq === ' '
        ? -1
        : Number(`${healthPanoramaState.pctPrenatalAdeq}`.replace(',', '.'));
  }

  if (typeof healthPanoramaState.cobAb === 'string') {
    cobAbState =
      healthPanoramaState.cobAb === ' '
        ? -1
        : Number(`${healthPanoramaState.cobAb}`.replace(',', '.'));
  }

  if (typeof healthPanoramaState.cobVacPolio === 'string') {
    cobVacPolioState =
      healthPanoramaState.cobVacPolio === ' '
        ? -1
        : Number(`${healthPanoramaState.cobVacPolio}`.replace(',', '.'));
  }

  if (typeof healthPanoramaRegion.pctPrenatalAdeq === 'string') {
    pctPrenatalAdeqRegion =
      healthPanoramaRegion.pctPrenatalAdeq === ' '
        ? -1
        : Number(`${healthPanoramaRegion.pctPrenatalAdeq}`.replace(',', '.'));
  }

  if (typeof healthPanoramaRegion.cobAb === 'string') {
    cobAbRegion =
      healthPanoramaRegion.cobAb === ' '
        ? -1
        : Number(`${healthPanoramaRegion.cobAb}`.replace(',', '.'));
  }

  if (typeof healthPanoramaRegion.cobVacPolio === 'string') {
    cobVacPolioRegion =
      healthPanoramaRegion.cobVacPolio === ' '
        ? -1
        : Number(`${healthPanoramaRegion.cobVacPolio}`.replace(',', '.'));
  }

  if (typeof healthPanorama.pctPrenatalAdeq === 'string') {
    pctPrenatalAdeq =
      healthPanorama.pctPrenatalAdeq === ' '
        ? -1
        : Number(`${healthPanorama.pctPrenatalAdeq}`.replace(',', '.'));
  }

  if (typeof healthPanorama.cobAb === 'string') {
    cobAb =
      healthPanorama.cobAb === ' '
        ? -1
        : Number(`${healthPanorama.cobAb}`.replace(',', '.'));
  }

  if (typeof healthPanorama.cobVacPolio === 'string') {
    cobVacPolio =
      healthPanorama.cobVacPolio === ' '
        ? -1
        : Number(`${healthPanorama.cobVacPolio}`.replace(',', '.'));
  }

  return {
    country: {
      cobAb: cobAbCountry,
      cobVacPolio: cobVacPolioCountry,
      pctPrenatalAdeq: pctPrenatalAdeqCountry,
    },
    state: {
      cobAb: cobAbState,
      cobVacPolio: cobVacPolioState,
      pctPrenatalAdeq: pctPrenatalAdeqState,
    },
    region: {
      cobAb: cobAbRegion,
      cobVacPolio: cobVacPolioRegion,
      pctPrenatalAdeq: pctPrenatalAdeqRegion,
    },
    city: {
      cobAb: cobAb,
      cobVacPolio: cobVacPolio,
      pctPrenatalAdeq: pctPrenatalAdeq,
    },
  };
};

export const selectDemographicPopulation = (
  state: RootState
): types.DemographicPopulationPanorama => {
  if (isHeathPanoramaEmpty(state)) {
    return {
      country: {
        expVida: 0,
        pctPop65m: 0,
        pctSanAdeq: 0,
      },
      state: {
        expVida: 0,
        pctPop65m: 0,
        pctSanAdeq: 0,
      },
      region: {
        expVida: 0,
        pctPop65m: 0,
        pctSanAdeq: 0,
      },
      city: {
        expVida: 0,
        pctPop65m: 0,
        pctSanAdeq: 0,
      },
    };
  }

  const {
    healthPanorama,
    healthPanoramaState,
    healthPanoramaRegion,
    healthPanoramaCountry,
  }: types.HealthPanoramaState = state.healthPanorama;

  let expVidaCountry;
  let pctPop65mCountry;
  let pctSanAdeqCountry;

  let expVidaState;
  let pctPop65mState;
  let pctSanAdeqState;

  let expVidaRegion;
  let pctPop65mRegion;
  let pctSanAdeqRegion;

  let expVida;
  let pctPop65m;
  let pctSanAdeq;

  if (typeof healthPanoramaCountry.expVida === 'string') {
    expVidaCountry =
      healthPanoramaCountry.expVida === ' '
        ? -1
        : Number(`${healthPanoramaCountry.expVida}`.replace(',', '.'));
  }

  if (typeof healthPanoramaCountry.pctPop65m === 'string') {
    pctPop65mCountry =
      healthPanoramaCountry.pctPop65m === ' '
        ? -1
        : Number(`${healthPanoramaCountry.pctPop65m}`.replace(',', '.'));
  }

  if (typeof healthPanoramaCountry.pctSanAdeq === 'string') {
    pctSanAdeqCountry =
      healthPanoramaCountry.pctSanAdeq === ' '
        ? -1
        : Number(`${healthPanoramaCountry.pctSanAdeq}`.replace(',', '.'));
  }

  if (typeof healthPanoramaState.expVida === 'string') {
    expVidaState =
      healthPanoramaState.expVida === ' '
        ? -1
        : Number(`${healthPanoramaState.expVida}`.replace(',', '.'));
  }

  if (typeof healthPanoramaState.pctPop65m === 'string') {
    pctPop65mState =
      healthPanoramaState.pctPop65m === ' '
        ? -1
        : Number(`${healthPanoramaState.pctPop65m}`.replace(',', '.'));
  }

  if (typeof healthPanoramaState.pctSanAdeq === 'string') {
    pctSanAdeqState =
      healthPanoramaState.pctSanAdeq === ' '
        ? -1
        : Number(`${healthPanoramaState.pctSanAdeq}`.replace(',', '.'));
  }

  if (typeof healthPanoramaRegion.expVida === 'string') {
    expVidaRegion =
      healthPanoramaRegion.expVida === ' '
        ? -1
        : Number(`${healthPanoramaRegion.expVida}`.replace(',', '.'));
  }

  if (typeof healthPanoramaRegion.pctPop65m === 'string') {
    pctPop65mRegion =
      healthPanoramaRegion.pctPop65m === ' '
        ? -1
        : Number(`${healthPanoramaRegion.pctPop65m}`.replace(',', '.'));
  }

  if (typeof healthPanoramaRegion.pctSanAdeq === 'string') {
    pctSanAdeqRegion =
      healthPanoramaRegion.pctSanAdeq === ' '
        ? -1
        : Number(`${healthPanoramaRegion.pctSanAdeq}`.replace(',', '.'));
  }

  if (typeof healthPanorama.expVida === 'string') {
    expVida =
      healthPanorama.expVida === ' '
        ? -1
        : Number(`${healthPanorama.expVida}`.replace(',', '.'));
  }

  if (typeof healthPanorama.pctPop65m === 'string') {
    pctPop65m =
      healthPanorama.pctPop65m === ' '
        ? -1
        : Number(`${healthPanorama.pctPop65m}`.replace(',', '.'));
  }

  if (typeof healthPanorama.pctSanAdeq === 'string') {
    pctSanAdeq =
      healthPanorama.pctSanAdeq === ' '
        ? -1
        : Number(`${healthPanorama.pctSanAdeq}`.replace(',', '.'));
  }

  return {
    country: {
      expVida: expVidaCountry,
      pctPop65m: pctPop65mCountry,
      pctSanAdeq: pctSanAdeqCountry,
    },
    state: {
      expVida: expVidaState,
      pctPop65m: pctPop65mState,
      pctSanAdeq: pctSanAdeqState,
    },
    region: {
      expVida: expVidaRegion,
      pctPop65m: pctPop65mRegion,
      pctSanAdeq: pctSanAdeqRegion,
    },
    city: {
      expVida: expVida,
      pctPop65m: pctPop65m,
      pctSanAdeq: pctSanAdeq,
    },
  };
};

export const selectRegionHealthResources = (
  state: RootState
): types.RegionHealthResourcesPanorama => {
  if (isHeathPanoramaEmpty(state)) {
    return {
      country: {
        txMed: 0,
        txEnf: 0,
        txLeitoSus: 0,
        txLeitoNsus: 0,
      },
      state: {
        txMed: 0,
        txEnf: 0,
        txLeitoSus: 0,
        txLeitoNsus: 0,
      },
      region: {
        txMed: 0,
        txEnf: 0,
        txLeitoSus: 0,
        txLeitoNsus: 0,
      },
      city: {
        txMed: 0,
        txEnf: 0,
        txLeitoSus: 0,
        txLeitoNsus: 0,
      },
    };
  }

  const {
    healthPanorama,
    healthPanoramaState,
    healthPanoramaRegion,
    healthPanoramaCountry,
  }: types.HealthPanoramaState = state.healthPanorama;

  let txMedCountry;
  let txEnfCountry;
  let txLeitoSusCountry;
  let txLeitoNsusCountry;

  let txMedState;
  let txEnfState;
  let txLeitoSusState;
  let txLeitoNsusState;

  let txMedRegion;
  let txEnfRegion;
  let txLeitoSusRegion;
  let txLeitoNsusRegion;

  let txMed;
  let txEnf;
  let txLeitoSus;
  let txLeitoNsus;

  if (typeof healthPanoramaCountry.txMed === 'string') {
    txMedCountry =
      healthPanoramaCountry.txMed === ' '
        ? -1
        : Number(`${healthPanoramaCountry.txMed}`.replace(',', '.'));
  }

  if (typeof healthPanoramaCountry.txEnf === 'string') {
    txEnfCountry =
      healthPanoramaCountry.txEnf === ' '
        ? -1
        : Number(`${healthPanoramaCountry.txEnf}`.replace(',', '.'));
  }

  if (typeof healthPanoramaCountry.txLeitoSus === 'string') {
    txLeitoSusCountry =
      healthPanoramaCountry.txLeitoSus === ' '
        ? -1
        : Number(`${healthPanoramaCountry.txLeitoSus}`.replace(',', '.'));
  }

  if (typeof healthPanoramaCountry.txLeitoNsus === 'string') {
    txLeitoNsusCountry =
      healthPanoramaCountry.txLeitoNsus === ' '
        ? -1
        : Number(`${healthPanoramaCountry.txLeitoNsus}`.replace(',', '.'));
  }

  if (typeof healthPanoramaState.txMed === 'string') {
    txMedState =
      healthPanoramaState.txMed === ' '
        ? -1
        : Number(`${healthPanoramaState.txMed}`.replace(',', '.'));
  }

  if (typeof healthPanoramaState.txEnf === 'string') {
    txEnfState =
      healthPanoramaState.txEnf === ' '
        ? -1
        : Number(`${healthPanoramaState.txEnf}`.replace(',', '.'));
  }

  if (typeof healthPanoramaState.txLeitoSus === 'string') {
    txLeitoSusState =
      healthPanoramaState.txLeitoSus === ' '
        ? -1
        : Number(`${healthPanoramaState.txLeitoSus}`.replace(',', '.'));
  }

  if (typeof healthPanoramaState.txLeitoNsus === 'string') {
    txLeitoNsusState =
      healthPanoramaState.txLeitoNsus === ' '
        ? -1
        : Number(`${healthPanoramaState.txLeitoNsus}`.replace(',', '.'));
  }

  if (typeof healthPanoramaRegion.txMed === 'string') {
    txMedRegion =
      healthPanoramaRegion.txMed === ' '
        ? -1
        : Number(`${healthPanoramaRegion.txMed}`.replace(',', '.'));
  }

  if (typeof healthPanoramaRegion.txEnf === 'string') {
    txEnfRegion =
      healthPanoramaRegion.txEnf === ' '
        ? -1
        : Number(`${healthPanoramaRegion.txEnf}`.replace(',', '.'));
  }

  if (typeof healthPanoramaRegion.txLeitoSus === 'string') {
    txLeitoSusRegion =
      healthPanoramaRegion.txLeitoSus === ' '
        ? -1
        : Number(`${healthPanoramaRegion.txLeitoSus}`.replace(',', '.'));
  }

  if (typeof healthPanoramaRegion.txLeitoNsus === 'string') {
    txLeitoNsusRegion =
      healthPanoramaRegion.txLeitoNsus === ' '
        ? -1
        : Number(`${healthPanoramaRegion.txLeitoNsus}`.replace(',', '.'));
  }

  if (typeof healthPanorama.txMed === 'string') {
    txMed =
      healthPanorama.txMed === ' '
        ? -1
        : Number(`${healthPanorama.txMed}`.replace(',', '.'));
  }

  if (typeof healthPanorama.txEnf === 'string') {
    txEnf =
      healthPanorama.txEnf === ' '
        ? -1
        : Number(`${healthPanorama.txEnf}`.replace(',', '.'));
  }

  if (typeof healthPanorama.txLeitoSus === 'string') {
    txLeitoSus =
      healthPanorama.txLeitoSus === ' '
        ? -1
        : Number(`${healthPanorama.txLeitoSus}`.replace(',', '.'));
  }

  if (typeof healthPanorama.txLeitoNsus === 'string') {
    txLeitoNsus =
      healthPanorama.txLeitoNsus === ' '
        ? -1
        : Number(`${healthPanorama.txLeitoNsus}`.replace(',', '.'));
  }

  return {
    country: {
      txMed: txMedCountry,
      txEnf: txEnfCountry,
      txLeitoSus: txLeitoSusCountry,
      txLeitoNsus: txLeitoNsusCountry,
    },
    state: {
      txMed: txMedState,
      txEnf: txEnfState,
      txLeitoSus: txLeitoSusState,
      txLeitoNsus: txLeitoNsusState,
    },
    region: {
      txMed: txMedRegion,
      txEnf: txEnfRegion,
      txLeitoSus: txLeitoSusRegion,
      txLeitoNsus: txLeitoNsusRegion,
    },
    city: {
      txMed: txMed,
      txEnf: txEnf,
      txLeitoSus: txLeitoSus,
      txLeitoNsus: txLeitoNsus,
    },
  };
};

export const selectMortalityPanorama = (
  state: RootState
): types.MortalityPanorama => {
  if (isHeathPanoramaEmpty(state)) {
    return {
      country: {
        txMortEvitAjCens: 0,
        txHospCsap: 0,
      },
      state: {
        txMortEvitAjCens: 0,
        txHospCsap: 0,
      },
      region: {
        txMortEvitAjCens: 0,
        txHospCsap: 0,
      },
      city: {
        txMortEvitAjCens: 0,
        txHospCsap: 0,
      },
    };
  }

  const {
    healthPanorama,
    healthPanoramaState,
    healthPanoramaRegion,
    healthPanoramaCountry,
  }: types.HealthPanoramaState = state.healthPanorama;

  let txMortEvitAjCensCountry;
  let txHospCsapCountry;

  let txMortEvitAjCensState;
  let txHospCsapState;

  let txMortEvitAjCensRegion;
  let txHospCsapRegion;

  let txMortEvitAjCens;
  let txHospCsap;

  if (typeof healthPanoramaCountry.txMortEvitAjCens === 'string') {
    txMortEvitAjCensCountry =
      healthPanoramaCountry.txMortEvitAjCens === ' '
        ? -1
        : Number(`${healthPanoramaCountry.txMortEvitAjCens}`.replace(',', '.'));
  }

  if (typeof healthPanoramaCountry.txHospCsap === 'string') {
    txHospCsapCountry =
      healthPanoramaCountry.txHospCsap === ' '
        ? -1
        : Number(`${healthPanoramaCountry.txHospCsap}`.replace(',', '.'));
  }

  if (typeof healthPanoramaState.txMortEvitAjCens === 'string') {
    txMortEvitAjCensState =
      healthPanoramaState.txMortEvitAjCens === ' '
        ? -1
        : Number(`${healthPanoramaState.txMortEvitAjCens}`.replace(',', '.'));
  }

  if (typeof healthPanoramaState.txHospCsap === 'string') {
    txHospCsapState =
      healthPanoramaState.txHospCsap === ' '
        ? -1
        : Number(`${healthPanoramaState.txHospCsap}`.replace(',', '.'));
  }

  if (typeof healthPanoramaRegion.txMortEvitAjCens === 'string') {
    txMortEvitAjCensRegion =
      healthPanoramaRegion.txMortEvitAjCens === ' '
        ? -1
        : Number(`${healthPanoramaRegion.txMortEvitAjCens}`.replace(',', '.'));
  }

  if (typeof healthPanoramaRegion.txHospCsap === 'string') {
    txHospCsapRegion =
      healthPanoramaRegion.txHospCsap === ' '
        ? -1
        : Number(`${healthPanoramaRegion.txHospCsap}`.replace(',', '.'));
  }

  if (typeof healthPanorama.txMortEvitAjCens === 'string') {
    txMortEvitAjCens =
      healthPanorama.txMortEvitAjCens === ' '
        ? -1
        : Number(`${healthPanorama.txMortEvitAjCens}`.replace(',', '.'));
  }

  if (typeof healthPanorama.txHospCsap === 'string') {
    txHospCsap =
      healthPanorama.txHospCsap === ' '
        ? -1
        : Number(`${healthPanorama.txHospCsap}`.replace(',', '.'));
  }

  return {
    country: {
      txMortEvitAjCens: txMortEvitAjCensCountry,
      txHospCsap: txHospCsapCountry,
    },
    state: {
      txMortEvitAjCens: txMortEvitAjCensState,
      txHospCsap: txHospCsapState,
    },
    region: {
      txMortEvitAjCens: txMortEvitAjCensRegion,
      txHospCsap: txHospCsapRegion,
    },
    city: {
      txMortEvitAjCens: txMortEvitAjCens,
      txHospCsap: txHospCsap,
    },
  };
};

export const selectHealthExpendingPanorama = (
  state: RootState
): types.HealthExpendingPanorama => {
  if (isHeathPanoramaEmpty(state)) {
    return {
      country: {
        despTotSaudePcMun: 0,
        despTotSaudePcMunDef: 0,
        despRecpSaudePcMun: 0,
        despRecpSaudePcMunDef: 0,
      },
      state: {
        despTotSaudePcMun: 0,
        despTotSaudePcMunDef: 0,
        despRecpSaudePcMun: 0,
        despRecpSaudePcMunDef: 0,
      },
      region: {
        despTotSaudePcMun: 0,
        despTotSaudePcMunDef: 0,
        despRecpSaudePcMun: 0,
        despRecpSaudePcMunDef: 0,
      },
      city: {
        despTotSaudePcMun: 0,
        despTotSaudePcMunDef: 0,
        despRecpSaudePcMun: 0,
        despRecpSaudePcMunDef: 0,
      },
    };
  }

  const {
    healthPanorama,
    healthPanoramaState,
    healthPanoramaRegion,
    healthPanoramaCountry,
  }: types.HealthPanoramaState = state.healthPanorama;

  let despRecpSaudePcMunDefCountry;
  let despTotSaudePcMunDefCountry;

  let despRecpSaudePcMunDefState;
  let despTotSaudePcMunDefState;

  let despRecpSaudePcMunDefRegion;
  let despTotSaudePcMunDefRegion;

  let despRecpSaudePcMunDef;
  let despTotSaudePcMunDef;

  if (typeof healthPanoramaCountry.despRecpSaudePcMunDef === 'string') {
    despRecpSaudePcMunDefCountry =
      healthPanoramaCountry.despRecpSaudePcMunDef === ' '
        ? -1
        : Number(
            `${healthPanoramaCountry.despRecpSaudePcMunDef}`.replace(',', '.')
          );
  }

  if (typeof healthPanoramaCountry.despTotSaudePcMunDef === 'string') {
    despTotSaudePcMunDefCountry =
      healthPanoramaCountry.despTotSaudePcMunDef === ' '
        ? -1
        : Number(
            `${healthPanoramaCountry.despTotSaudePcMunDef}`.replace(',', '.')
          );
  }

  if (typeof healthPanoramaState.despRecpSaudePcMunDef === 'string') {
    despRecpSaudePcMunDefState =
      healthPanoramaState.despRecpSaudePcMunDef === ' '
        ? -1
        : Number(
            `${healthPanoramaState.despRecpSaudePcMunDef}`.replace(',', '.')
          );
  }

  if (typeof healthPanoramaState.despTotSaudePcMunDef === 'string') {
    despTotSaudePcMunDefState =
      healthPanoramaState.despTotSaudePcMunDef === ' '
        ? -1
        : Number(
            `${healthPanoramaState.despTotSaudePcMunDef}`.replace(',', '.')
          );
  }

  if (typeof healthPanoramaRegion.despRecpSaudePcMunDef === 'string') {
    despRecpSaudePcMunDefRegion =
      healthPanoramaRegion.despRecpSaudePcMunDef === ' '
        ? -1
        : Number(
            `${healthPanoramaRegion.despRecpSaudePcMunDef}`.replace(',', '.')
          );
  }

  if (typeof healthPanoramaRegion.despTotSaudePcMunDef === 'string') {
    despTotSaudePcMunDefRegion =
      healthPanoramaRegion.despTotSaudePcMunDef === ' '
        ? -1
        : Number(
            `${healthPanoramaRegion.despTotSaudePcMunDef}`.replace(',', '.')
          );
  }

  if (typeof healthPanorama.despRecpSaudePcMunDef === 'string') {
    despRecpSaudePcMunDef =
      healthPanorama.despRecpSaudePcMunDef === ' '
        ? -1
        : Number(`${healthPanorama.despRecpSaudePcMunDef}`.replace(',', '.'));
  }

  if (typeof healthPanorama.despTotSaudePcMunDef === 'string') {
    despTotSaudePcMunDef =
      healthPanorama.despTotSaudePcMunDef === ' '
        ? -1
        : Number(`${healthPanorama.despTotSaudePcMunDef}`.replace(',', '.'));
  }

  return {
    city: {
      despTotSaudePcMun: 0 /* healthPanorama.despTotSaudePcMun || 0 */,
      despRecpSaudePcMun: 0 /*  healthPanorama.despTotSaudePcMunDef || 0 */,
      despTotSaudePcMunDef: despTotSaudePcMunDef,
      despRecpSaudePcMunDef: despRecpSaudePcMunDef,
    },
    region: {
      despTotSaudePcMun: /* healthPanoramaRegion.despTotSaudePcMun || */ 0,
      despRecpSaudePcMun: /* healthPanoramaRegion.despTotSaudePcMunDef || */ 0,
      despTotSaudePcMunDef: despTotSaudePcMunDefRegion,
      despRecpSaudePcMunDef: despRecpSaudePcMunDefRegion,
    },
    state: {
      despTotSaudePcMun: /* healthPanoramaState.despTotSaudePcMun || */ 0,
      despRecpSaudePcMun: /* healthPanoramaState.despTotSaudePcMunDef || */ 0,
      despTotSaudePcMunDef: despTotSaudePcMunDefState,
      despRecpSaudePcMunDef: despRecpSaudePcMunDefState,
    },
    country: {
      despTotSaudePcMun: /* healthPanoramaCountry.despTotSaudePcMun || */ 0,
      despRecpSaudePcMun: /* healthPanoramaCountry.despTotSaudePcMunDef || */ 0,
      despTotSaudePcMunDef: despTotSaudePcMunDefCountry,
      despRecpSaudePcMunDef: despRecpSaudePcMunDefCountry,
    },
  };
};
