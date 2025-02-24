import { HttpRequest, HttpMethodEnum } from '../../utils/HttpFetch';

export const getUfsQuery = (): HttpRequest => {
  return {
    method: HttpMethodEnum.GET,
    url: '/state_data_ieps/select?fl=id_estado%2C%20estado_abrev%2C%20estado%2C%20id&fq=ano%3A2019&q=*%3A*&rows=28',
  };
};

export const getCitiesQuery = (city: string, year: string): HttpRequest => {
  return {
    method: HttpMethodEnum.GET,
    url: `/mun_data_ieps/select?fl=codmun%2Cnomemun%2Cregiao%2Cestado_abrev%2Cano%2Cmacrorregiao&fq=ano%3A${year}&fq=nomemun%3A"${city}"&q=*%3A*&rows=100`,
  };
};

export const getUfMapDataQuery = (
  region: string,
  year: string
): HttpRequest => {
  return {
    method: HttpMethodEnum.GET,
    url: `/mun_data_ieps/select?fl=nomemun%2C%20id_munic_7%2C%20regiao&fq=ano%3A${year}&fq=estado_abrev%3A${region}&q=*%3A*&rows=1000`,
  };
};
