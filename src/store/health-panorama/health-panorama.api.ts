import { HttpRequest, HttpMethodEnum } from '../../utils/HttpFetch';

export const getCityHealthPanoramaQuery = (
  city: string,
  year: string
): HttpRequest => {
  const yearFormatted = year.replace('em ', '');

  return {
    method: HttpMethodEnum.GET,
    url: `/mun_data_ieps/select?fq=ano%3A${yearFormatted}&fq=codmun%3A${city}&q=*%3A*`,
  };
};

export const getRegionHealthPanoramaQuery = (
  region: string,
  year: string
): HttpRequest => {
  const yearFormatted = year.replace('em ', '');

  return {
    method: HttpMethodEnum.GET,
    url: `/reg_data_ieps/select?fq=ano%3A${yearFormatted}&fq=regiao%3A${region}&q=*%3A*`,
  };
};

export const getStateHealthPanoramaQuery = (
  state: string,
  year: string
): HttpRequest => {
  const yearFormatted = year.replace('em ', '');

  return {
    method: HttpMethodEnum.GET,
    url: `/state_data_ieps/select?fq=ano%3A${yearFormatted}&fq=estado_abrev%3A${state}&q=*%3A*`,
  };
};

export const getCountryHealthPanoramaQuery = (year: string): HttpRequest => {
  const yearFormatted = year.replace('em ', '');

  return {
    method: HttpMethodEnum.GET,
    url: `/brazil_data_ieps/select?fq=ano%3A${yearFormatted}&q=*%3A*`,
  };
};
