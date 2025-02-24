import { parseJsonData } from './ParseJsonData';

const vizIndicatorDocs = (variableName: string) => {
  const docs = parseJsonData();

  const indicatorAlert = docs.filter(
    (item) => item.nome_variavel === variableName
  )[0];

  return indicatorAlert;
};

export default vizIndicatorDocs;
