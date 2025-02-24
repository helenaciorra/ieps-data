import { HttpResponse } from '../../utils/HttpFetch';
import * as types from './indicators.types';

export const adaptIndicators = (
  response: HttpResponse<types.Indicator>
): types.Indicator[] => {
  return response.data.response.docs;
};

export const adaptIndicatorsBlocks = (
  response: HttpResponse<types.Indicator>
): { [key: string]: { name: string, variable: string }[] } => {
  const indicators = adaptIndicators(response);

  return indicators.reduce((total, current) => {
    const entryIndicators = total?.[current.bloco] || [];
    return {
      ...total,
      [current.bloco]: [
        ...entryIndicators,
        { name: current.nomeIndicadores, variable: current.variable },
      ],
    };
  }, {});
};
