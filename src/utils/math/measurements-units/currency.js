import { round, isNullOrNaN } from '../index';

const formatter = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
  minimumFractionDigits: 0,
});

/**
 @param dealWithNull - in Some cases a null value mean that back and don't know about the state
 of the monatary value, so it do not means it's automaticaly a Zero
*/
const currency = (value, options = {}) => {
  const {
    dealWithNull = true,
    dealWithNullMsg = 'Desconhecido',
    places = 2,
  } = options;

  if (dealWithNull && isNullOrNaN(value)) {
    return dealWithNullMsg;
  }

  const roundedValue = round(value || 0, places);

  return formatter.format(roundedValue);
};

export default currency;
