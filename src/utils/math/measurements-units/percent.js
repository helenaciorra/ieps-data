import { isNullOrNaN } from '../index';

const formatter = new Intl.NumberFormat('pt-BR', {
  style: 'percent',
  minimumFractionDigits: 0,
  maximumFractionDigits: 1,
});

/*
  Value is divided by 100 because percentages are fractions of 100.
  If you had 100% it would be 100/100 which is equal to 1. So 25.1% is 25/100 or 0.251
*/

const percent = (value = 0, options = {}) => {
  const { dealWithNull = true, dealWithNullMsg = 'Desconhecido' } = options;

  if (dealWithNull && isNullOrNaN(value)) {
    return dealWithNullMsg;
  }

  const percentValue = value / 100;

  return value === -1 ? '-1%' : formatter.format(percentValue);
};

export default percent;
