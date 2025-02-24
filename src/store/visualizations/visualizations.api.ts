import { HttpRequest, HttpMethodEnum } from '../../utils/HttpFetch';

export const getFirstIndicatorsToDispersion = (): HttpRequest => {
  return {
    method: HttpMethodEnum.GET,
    url: '/nomes_indicadores_ieps/select?fl=id%2Cnome_indicadores%2Cvariable%2Cdec_places%2Cformat%2Cbloco&fq=-bloco%3A"Indicadores%20Socioeconômicos"%2C&fq=viz%3A"1"&fq=-viz_uf%3A"1.0"&q=*%3A*&rows=189',
  };
};

export const getSecondIndicatorsToDispersion = (): HttpRequest => {
  return {
    method: HttpMethodEnum.GET,
    url: '/nomes_indicadores_ieps/select?fl=id%2Cnome_indicadores%2Cvariable%2Cdec_places%2Cformat%2Cbloco&fq=bloco%3A"Indicadores%20Socioeconômicos"%2C&fq=viz%3A"1"&fq=-viz_uf%3A"1.0"&q=*%3A*&rows=189',
  };
};

export const searchFirstIndicatorsToDispersion = (
  indicatorName: string
): HttpRequest => {
  return {
    method: HttpMethodEnum.GET,
    url: `/nomes_indicadores_ieps/select?fl=id%2Cnome_indicadores%2Cvariable%2Cdec_places%2Cformat%2Cbloco&fq=-bloco%3A"Indicadores%20Socioeconômicos"%2C&fq=viz%3A"1"&fq=-viz_uf%3A"1.0"&q=nome_indicadores%3A*${indicatorName}*`,
  };
};

export const searchSecondIndicatorsToDispersion = (
  indicatorName: string
): HttpRequest => {
  return {
    method: HttpMethodEnum.GET,
    url: `/nomes_indicadores_ieps/select?fl=id%2Cnome_indicadores%2Cvariable%2Cdec_places%2Cformat%2Cbloco&fq=bloco%3A"Indicadores%20Socioeconômicos"&fq=viz%3A"1"&fq=-viz_uf%3A"1.0"&q=nome_indicadores%3A*${indicatorName}*`,
  };
};

export const getCityToDispersion = (
  cityCode: string,
  year: string,
  state: string,
  firstIndicator: string,
  secondIndicator: string
): HttpRequest => {
  const yearFormatted = year.replace('em ', '');

  return {
    method: HttpMethodEnum.GET,
    url: `/mun_data_ieps/select?fl=id_munic_7%2Cnomemun%2Cano%2Cno_regiao%2C${firstIndicator}%2C${secondIndicator}&fq=estado_abrev%3A${state}%2C%20ano%3A${yearFormatted}&q=codmun%3A%22${cityCode}%22`,
  };
};

export const getCitiesToDispersion = (
  citySelectedCode: string,
  year: string,
  state: string,
  firstIndicator: string,
  secondIndicator: string
): HttpRequest => {
  const yearFormatted = year.replace('em ', '');

  return {
    method: HttpMethodEnum.GET,
    url: `/mun_data_ieps/select?fl=id_munic_7%2Cnomemun%2Cestado_abrev%2Cano%2Cno_regiao%2C${firstIndicator}%2C${secondIndicator}&fq=ano%3A${yearFormatted}%20-codmun%3A${citySelectedCode}&q=estado_abrev%3A%22${state}%22&rows=1000`,
  };
};

export const getCountryToDispersion = (
  year: string,
  firstIndicator: string,
  secondIndicator: string
): HttpRequest => {
  const yearFormatted = year.replace('em ', '');

  return {
    method: HttpMethodEnum.GET,
    url: `/brazil_data_ieps/select?fl=${firstIndicator}%2C${secondIndicator}%2Cano%2Cid&q=ano%3A%22${yearFormatted}%22`,
  };
};

export const getStateToDispersion = (
  state: string,
  year: string,
  firstIndicator: string,
  secondIndicator: string
): HttpRequest => {
  const yearFormatted = year.replace('em ', '');

  return {
    method: HttpMethodEnum.GET,
    url: `/state_data_ieps/select?fl=estado%2Cid%2C${firstIndicator}%2C${secondIndicator}&fq=ano%3A${yearFormatted}&q=estado_abrev%3A%22${state}%22`,
  };
};

export const getRegionToDispersion = (
  regionCode: string,
  year: string,
  firstIndicator: string,
  secondIndicator: string
): HttpRequest => {
  const yearFormatted = year.replace('em ', '');

  return {
    method: HttpMethodEnum.GET,
    url: `/reg_data_ieps/select?fl=id%2Cno_regiao%2C${firstIndicator}%2C${secondIndicator}&fq=ano%3A${yearFormatted}&q=regiao%3A%22${regionCode}%22`,
  };
};

export const getMacroRegionToDispersion = (
  macroRegionCode: string,
  year: string,
  firstIndicator: string,
  secondIndicator: string
): HttpRequest => {
  const yearFormatted = year.replace('em ', '');

  return {
    method: HttpMethodEnum.GET,
    url: `/macro_data_ieps/select?fl=macrorregiao%2Cno_macro%2C${firstIndicator}%2C${secondIndicator}&fq=ano%3A${yearFormatted}&q=macrorregiao%3A%22${macroRegionCode}%22`,
  };
};

// Fetches city options to determine the city name from the visualization "Timeline"
export const getCitiesQueryToLine = (
  city: string,
  state: string
): HttpRequest => {
  return {
    method: HttpMethodEnum.GET,
    url: `/mun_data_ieps/select?fl=codmun%2C%20nomemun%2C%20regiao%2C%20estado_abrev%2C%20ano%2C%20macrorregiao&fq=ano%3A2020&fq=id_estado%3A%22${state}%22&q=nomemun%3A"${city}"&rows=1000`,
  };
};

// Fetches region options to determine the region name from the visualization "Timeline"
export const getRegionsQueryToLine = (region: string): HttpRequest => {
  return {
    method: HttpMethodEnum.GET,
    url: `/reg_data_ieps/select?fl=regiao%2C%20no_regiao%2C%20estado_abrev%2C%20ano%2C%20macrorregiao&fq=no_regiao%3A*${region}*&q=ano%3A2020&rows=1000`,
  };
};

// Fetches region options to determine the region name from the visualization "Timeline"
export const getRegionsQueryToLineByState = (region: string): HttpRequest => {
  return {
    method: HttpMethodEnum.GET,
    url: `/reg_data_ieps/select?fl=regiao%2C%20no_regiao%2C%20estado_abrev%2C%20ano%2C%20macrorregiao%2C%20no_macro&fq=ano%3A2020&q=id_estado%3A%22${region}%22&rows=1000`,
  };
};

// Fetches macro-region options to determine the macro-region name from the visualization "Timeline"
export const getMacroQueryToLine = (macro: string): HttpRequest => {
  return {
    method: HttpMethodEnum.GET,
    url: `/macro_data_ieps/select?fl=macrorregiao%2C%20no_macro%2C%20estado_abrev%2C%20ano&fq=ano%3A2020&q=no_macro%3A"${macro}"&rows=1000`,
  };
};

export const getMacroQueryToLineByState = (macro: string): HttpRequest => {
  return {
    method: HttpMethodEnum.GET,
    url: `/macro_data_ieps/select?fl=macrorregiao%2C%20no_macro%2C%20estado_abrev%2C%20ano&fq=ano%3A2020&q=estado_abrev%3A%22${macro}%22&rows=1000`,
  };
};

// Fetches state options to determine the state name from the visualization "Timeline"
export const getStateQueryToLine = (state: string): HttpRequest => {
  return {
    method: HttpMethodEnum.GET,
    url: `/state_data_ieps/select?fl=id_estado%2C%20estado_abrev%2C%20estado%2C%20ano&fq=ano%3A2020&q=estado%3A%22${state}%22&rows=1000`,
  };
};

export const getCityToLine = (
  cityCode: string,
  indicatorName: string
): HttpRequest => {
  return {
    method: HttpMethodEnum.GET,
    url: `/mun_data_ieps/select?fl=nomemun%2C%20${indicatorName}%2C%20ano&q=codmun%3A"${cityCode}"&rows=14`,
  };
};

export const getCountryToLine = (indicatorName: string): HttpRequest => {
  return {
    method: HttpMethodEnum.GET,
    url: `/brazil_data_ieps/select?fl=ano%2C%20${indicatorName}&q=*%3A*&rows=14`,
  };
};

export const getMacroRegionToLine = (
  macroCode: string,
  indicatorName: string
): HttpRequest => {
  return {
    method: HttpMethodEnum.GET,
    url: `/macro_data_ieps/select?fl=ano%2C%20no_macro%2C%20${indicatorName}&q=macrorregiao%3A"${macroCode}"&rows=14`,
  };
};

export const getStateToLine = (
  state: string,
  indicatorName: string
): HttpRequest => {
  return {
    method: HttpMethodEnum.GET,
    url: `/state_data_ieps/select?fl=ano%2C%20estado%2C%20${indicatorName}&q=estado_abrev%3A"${state}"&rows=14`,
  };
};

export const getRegionToLine = (
  regionCode: string,
  indicatorName: string
): HttpRequest => {
  return {
    method: HttpMethodEnum.GET,
    url: `/reg_data_ieps/select?fl=ano%2C%20no_regiao%2C%20${indicatorName}&q=regiao%3A"${regionCode}"&rows=14`,
  };
};

export const getIndicatorsToVisualization = (): HttpRequest => {
  return {
    method: HttpMethodEnum.GET,
    url: '/nomes_indicadores_ieps/select?fq=viz%3A"1"&q=*%3A*&rows=67',
  };
};

export const searchIndicatorsToVisualization = (
  indicatorName: string
): HttpRequest => {
  return {
    method: HttpMethodEnum.GET,
    url: `/nomes_indicadores_ieps/select?fq=viz%3A"1"&q=nome_indicadores%3A*${indicatorName}*`,
  };
};

export const searchIndicatorsByVariableNameToVisualization = (
  indicator: string
): HttpRequest => {
  return {
    method: HttpMethodEnum.GET,
    url: `/nomes_indicadores_ieps/select?q=variable%3A"${indicator}"`,
  };
};

export const getStateQuery = (): HttpRequest => {
  return {
    method: HttpMethodEnum.GET,
    url: '/state_data_ieps/select?fl=id_estado%2C%20estado%2C%20estado_abrev&q=ano%3A"2020"&rows=27',
  };
};

export const searchStateQuery = (
  stateName: string,
  year: string
): HttpRequest => {
  const yearFormatted = year.replace('em ', '');

  return {
    method: HttpMethodEnum.GET,
    url: `/state_data_ieps/select?fl=id_estado%2C%20estado%2C%20estado_abrev%2C%20ano&fq=ano%3A${yearFormatted}&q=estado%3A"${stateName}"`,
  };
};

export const getCitiesToMapRanking = (
  stateId: string,
  year: string,
  indicator: string
): HttpRequest => {
  const yearFormatted = year.replace('em ', '');

  return {
    method: HttpMethodEnum.GET,
    url: `/mun_data_ieps/select?fl=id_munic_7%2C%20nomemun%2C%20${indicator}&fq=ano%3A${yearFormatted}&q=id_estado%3A"${stateId}"&rows=1000`,
  };
};

export const getRegionsToMapRanking = (
  stateId: string,
  year: string,
  indicator: string
): HttpRequest => {
  const yearFormatted = year.replace('em ', '');

  return {
    method: HttpMethodEnum.GET,
    url: `/reg_data_ieps/select?fl=regiao%2C%20no_regiao%2C%20${indicator}&fq=ano%3A${yearFormatted}&q=id_estado%3A"${stateId}"&rows=1000`,
  };
};

export const getMacroRegionsToMapRanking = (
  stateId: string,
  year: string,
  indicator: string
): HttpRequest => {
  const yearFormatted = year.replace('em ', '');

  return {
    method: HttpMethodEnum.GET,
    url: `/macro_data_ieps/select?fl=macrorregiao%2C%20no_macro%2C%20${indicator}&fq=ano%3A${yearFormatted}&q=id_estado%3A"${stateId}"&rows=1000`,
  };
};

export const getStateToMapRanking = (
  state: string,
  year: string,
  indicator: string
) => {
  const yearFormatted = year.replace('em ', '');

  return {
    method: HttpMethodEnum.GET,
    url: `/state_data_ieps/select?fl=id_estado%2C%20estado_abrev%2C%20${indicator}%2C%20ano&fq=ano%3A${yearFormatted}&q=id_estado%3A"${state}"`,
  };
};

export const getStatesToMapRankingBrazil = (
  year: string,
  indicator: string
) => {
  const yearFormatted = year.replace('em ', '');

  return {
    method: HttpMethodEnum.GET,
    url: `state_data_ieps/select?fl=estado_abrev%2Cid_estado%2Cestado%2C${indicator}%2Cano&q=ano%3A%22${yearFormatted}%22&rows=27&start=0`,
  };
};

export const getCountryToMapRanking = (year: string, indicator: string) => {
  const yearFormatted = year.replace('em ', '');

  return {
    method: HttpMethodEnum.GET,
    url: `/brazil_data_ieps/select?fl=id%2C%20${indicator}&q=ano%3A"${yearFormatted}"`,
  };
};

export const getDataVizToCirclePacking = (
  stateCode: string,
  year: string,
  indicator: string
) => {
  const yearFormatted = year.replace('em ', '');

  return {
    method: HttpMethodEnum.GET,
    url: `/mun_data_ieps/select?fl=${indicator}%2C%20estado_abrev%2Cnomemun%2C%20ano%2C%20pop%2C%20regiao%2C%20no_regiao%2C%20no_macro&fq=ano%3A${yearFormatted}&q=id_estado%3A"${stateCode}"&rows=1000`,
  };
};

export const getDataVizRegToCirclePacking = (
  stateCode: string,
  year: string,
  indicator: string
) => {
  const yearFormatted = year.replace('em ', '');

  return {
    method: HttpMethodEnum.GET,
    url: `/reg_data_ieps/select?fl=ano%2C%20no_regiao%2C%20${indicator}%2C%20pop%2C%20regiao%2C%20no_regiao&fq=ano%3A${yearFormatted}&q=regiao%3A${stateCode}*&rows=1000`,
  };
};

export const getDataVizMacroToCirclePacking = (
  stateCode: string,
  year: string,
  indicator: string
) => {
  const yearFormatted = year.replace('em ', '');

  return {
    method: HttpMethodEnum.GET,
    url: `/macro_data_ieps/select?fl=macro%2C%20no_macro%2C%20ano%2C%20${indicator}%2C%20pop&fq=ano%3A${yearFormatted}&q=id_estado%3A"${stateCode}"&rows=1000`,
  };
};

export const getCityByCityCode = (cityCode: string, year: string) => {
  const yearFormatted = year.replace('em ', '');

  return {
    method: HttpMethodEnum.GET,
    url: `/mun_data_ieps/select?fq=ano%3A${yearFormatted}&q=codmun%3A"${cityCode}"`,
  };
};
