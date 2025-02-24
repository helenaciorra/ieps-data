import { Maybe } from '../functors';

const UF = {
  25: 'SP',
};

const COUNTRIES = {
  1: 'Brasil',
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const valueAt = (obj: any, key: any, empty?: any) => obj[key] || empty || '';

export default (params) => {
  const {
    city,
    state,
    complement,
    country,
    neighbourhood,
    number,
    street,
    zipCode,
  } = Maybe.of(params).get({});

  const uf = valueAt(UF, state);
  const countryName = valueAt(COUNTRIES, country);

  const adress = [
    { value: street, prev: '', next: ', ' },
    { value: number, prev: '', next: '' },
    { value: complement, prev: '(', next: ')' },
    { value: neighbourhood, prev: ' - ', next: ' - ' },
    { value: zipCode, prev: '', next: ' - ' },
    { value: city, prev: '', next: ', ' },
    { value: uf, prev: '', next: ', ' },
    { value: countryName, prev: '', next: '.' },
  ]
    .filter((item) => !!item.value)
    .map((item) => item.prev + item.value + item.next)
    .join('');

  return adress;
};
