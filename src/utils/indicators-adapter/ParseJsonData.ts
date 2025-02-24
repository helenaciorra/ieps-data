import data from '../../assets/indicadores_alerta.json';

export interface IndicatorAlert {
  nome_variavel: string;
  descricao: string;
  fonte: string;
  mensagem_alerta: string;
}

export const parseJsonData = () => {
  const str = JSON.stringify(data);
  const indicatorDocs: IndicatorAlert[] = JSON.parse(str);

  return indicatorDocs;
};
