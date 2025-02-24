import React from 'react';
import {
  MoratalidadeInfantilUfModel,
  MortalidadeBrutaPor100000Hab,
  HospitalizacoesPor100000Hab,
  HospitalizacoesPorCondicoesSensiveisAtencaoPrimariaPor100000Hab,
  MortalidadeAjustadaPor100000Hab,
  MortalidadeAjustadaPorCausasEvitaveisPor100000Hab,
  MortalidadeAjustadaPorCondicoesSensiveisAtencaoPrimariaPor100000Hab,
  MortalidadeBrutaPorCausasEvitaveisPor100000Hab,
  MortalidadeBrutaPorCausasMalDefinidas,
  MortalidadeBrutaPorCondicoesSensiveisAtencaoPrimariaPor100000Hab,
} from '../../DocumentModels/mortalidade_e_morbidade';

import {
  EnfermeirosPadronizadosPorCargaHorariaPor1000Hab,
  EnfermeirosUnicamenteIdentificadosPorLocalidadePor1000Hab,
  LeitosSusPor100000Hab,
  LeitosUtiSus,
  MedicosPadronizadosPorCargaHorariaPor1000Hab,
  MedicosUnicamenteIdentificadosPorLocalidadePor1000Hab,
} from '../../DocumentModels/recursos';

import {
  CoberturaPlanosDeSaude,
  LeitosNaoSus,
  LeitosUtiNaoSus,
} from '../../DocumentModels/saude_suplementar';

import {
  PerDaPopulacaoCom65Anos,
  PerDaPopulacaoCom75Anos,
  PerDaPopulacaoCom04Anos,
  PerDaPopulacaoCom514anos,
  PerDaPopulacaoEmIdadeAtiva1564,
  PerDeMulheresEmIdadeFertil1049Anos,
  RazaoDeSexos,
} from '../../DocumentModels/demografia';

import {
  DespesaEmSaudeUtilizandoRecursosPropriosDoEstadoPorHabDe2019,
  DespesaEmSaudeUtilizandoRecursosPropriosDoMunicipioPorHabDe2019,
  DespesaTotalComSaudeSobResponsabilidadeDoEstadoPorHabDe2019,
  DespesaTotalComSaudeSobResponsabilidadeDoMunicipioPorHabDe2019,
  ParticipacaoDaReceitaPropriaEstadualAplicadaEmSaudeEC29,
  ParticipacaoDaReceitaPropriaMunicipalAplicadaEmSaudeEC29,
} from '../../DocumentModels/gastos';

import {
  IndiceDesenvolvimentoHumanoMunicipal,
  IndiceDesenvolvimentoHumanoMunicipalDimensaoEducacao,
  IndiceDesenvolvimentoHumanoMunicipalDimensaoLongevidade,
  IndiceDesenvolvimentoHumanoMunicipalDimensaoRenda,
} from '../../DocumentModels/indicadores_socioeconomicos';

interface ComponenSelectorProps {
  indicator: string;
}

export const ComponenSelector = ({ indicator }: ComponenSelectorProps) => {
  switch (indicator) {
    case 'i17':
      return <MoratalidadeInfantilUfModel />;
    case 'i18':
      return <MortalidadeBrutaPor100000Hab />;
    case 'i19':
      return <MortalidadeBrutaPorCausasEvitaveisPor100000Hab />;
    case 'i20':
      return <MortalidadeBrutaPorCondicoesSensiveisAtencaoPrimariaPor100000Hab />;
    case 'i21':
      return <MortalidadeBrutaPorCausasMalDefinidas />;
    case 'i22':
      return <MortalidadeAjustadaPor100000Hab />;
    case 'i23':
      return <MortalidadeAjustadaPorCausasEvitaveisPor100000Hab />;
    case 'i24':
      return <MortalidadeAjustadaPorCondicoesSensiveisAtencaoPrimariaPor100000Hab />;
    case 'i25':
      return <HospitalizacoesPor100000Hab />;
    case 'i26':
      return <HospitalizacoesPorCondicoesSensiveisAtencaoPrimariaPor100000Hab />;
    case 'i27':
      return <MedicosUnicamenteIdentificadosPorLocalidadePor1000Hab />;
    case 'i28':
      return <MedicosPadronizadosPorCargaHorariaPor1000Hab />;
    case 'i29':
      return <EnfermeirosUnicamenteIdentificadosPorLocalidadePor1000Hab />;
    case 'i30':
      return <EnfermeirosPadronizadosPorCargaHorariaPor1000Hab />;
    case 'i31':
      return <LeitosSusPor100000Hab />;
    case 'i32':
      return <LeitosUtiSus />;
    case 'i33':
      return <CoberturaPlanosDeSaude />;
    case 'i34':
      return <LeitosNaoSus />;
    case 'i35':
      return <LeitosUtiNaoSus />;
    case 'i36':
      return <PerDaPopulacaoCom65Anos />;
    case 'i37':
      return <PerDaPopulacaoCom75Anos />;
    case 'i38':
      return <PerDaPopulacaoCom04Anos />;
    case 'i39':
      return <PerDaPopulacaoCom514anos />;
    case 'i40':
      return <PerDaPopulacaoEmIdadeAtiva1564 />;
    case 'i41':
      return <RazaoDeSexos />;
    case 'i42':
      return <PerDeMulheresEmIdadeFertil1049Anos />;
    case 'i43':
      return <ParticipacaoDaReceitaPropriaMunicipalAplicadaEmSaudeEC29 />;
    case 'i44':
      return <DespesaEmSaudeUtilizandoRecursosPropriosDoMunicipioPorHabDe2019 />;
    case 'i45':
      return <DespesaTotalComSaudeSobResponsabilidadeDoMunicipioPorHabDe2019 />;
    case 'i46':
      return <ParticipacaoDaReceitaPropriaEstadualAplicadaEmSaudeEC29 />;
    case 'i47':
      return <DespesaEmSaudeUtilizandoRecursosPropriosDoEstadoPorHabDe2019 />;
    case 'i48':
      return <DespesaTotalComSaudeSobResponsabilidadeDoEstadoPorHabDe2019 />;
    case 'i49':
      return <IndiceDesenvolvimentoHumanoMunicipal />;
    case 'i50':
      return <IndiceDesenvolvimentoHumanoMunicipalDimensaoEducacao />;
    case 'i51':
      return <IndiceDesenvolvimentoHumanoMunicipalDimensaoRenda />;
    case 'i52':
      return <IndiceDesenvolvimentoHumanoMunicipalDimensaoLongevidade />;
    default:
      return <></>;
  }
};
