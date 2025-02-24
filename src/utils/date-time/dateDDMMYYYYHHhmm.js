import moment from 'moment';

export default (informDate, invalidDateMsg) => {
  const date = moment(informDate);
  if (!date.isValid()) {
    return invalidDateMsg || '';
  }
  return date.format('DD/MM/YYYY HH[h]mm');
};
