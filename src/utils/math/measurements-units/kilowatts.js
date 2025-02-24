import { round, isNullOrNaN } from '../index';

const formatter = new Intl.NumberFormat('pt-BR', {
  minimumFractionDigits: 0,
});

const kilowatts = (valueInWatts = 0, decimalRoundPlaces = 1, options = {}) => {
  const { dealWithNull = true, dealWithNullMsg = 'Desconhecido' } = options;

  if (dealWithNull && isNullOrNaN(valueInWatts)) {
    return dealWithNullMsg;
  }

  const roundedValue = round(valueInWatts / 1000, decimalRoundPlaces);
  return `${formatter.format(roundedValue)} kW`;
};

export default kilowatts;
