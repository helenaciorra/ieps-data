import { HttpRequest, HttpMethodEnum } from '../../utils/HttpFetch';

export const getIndicatorsQuery = (): HttpRequest => {
  return {
    method: HttpMethodEnum.GET,
    url: 'nomes_indicadores_ieps/select?q=*%3A*&rows=1000',
  };
};

export const getMunDataDownload = (
  _codemun: string,
  ano: string,
  granularidade: string,
  indicators: string[],
  columns: string[]
): HttpRequest => {
  const columnsQueryParams = columns.join('%2C%20');

  // indicators = indicators.map((item) => {
  //   return `${item}_str`;
  // });

  const indicatorsQueryParams = indicators.join('%2C%20');
  const yearQuery = ano
    .split(', ')
    .map((year) => `(ano%3A${year})`)
    .join('%2C%20');

  return {
    responseType: 'blob',
    method: HttpMethodEnum.GET,
    url: `${granularidade}/select?fl=${columnsQueryParams}%2C%20${indicatorsQueryParams}&fq=${yearQuery}&q=*%3A*&rows=1000000&wt=xlsx`,
  };
};

/* query com anos e o wt=csv
https://api.iepsdata.org.br/solr/mun_data_ieps/select?fl=ano&fq=ano%3A(2010%202013%202017)&fq=nomemun%3AAcrel%C3%A2ndia&q=*%3A*&wt=csv

 - botão amarelo vai baixar  aarquivo direto do solar
 - o lilas baxar so o selecionavel
 se selecinar todos os indicadores e todos os anos, baixarcomo no amarelo
 no select de anos, collocar o selecionar todos os anos


 Granularidade:
  Chama uma query específica
  brazil_data_ieps =>  Brasil
  macro_data_ieps  =>  Marco região de Saúde
  reg_data_ieps    =>  Região de Saúde
  state_data_ieps  =>  Estado de Saúde
  mun_data_ieps    =>  Município de Saúde

*/
