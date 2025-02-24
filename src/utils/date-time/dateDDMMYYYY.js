import moment from 'moment';

export default (date) => {
  if (!date) {
    return 'Não Informado';
  }
  return moment(date).format('DD/MM/YYYY');
};
