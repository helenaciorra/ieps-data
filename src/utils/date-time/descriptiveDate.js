import moment from './moment';

const descriptiveDate = (date, format) => {
  const dateTime = moment(date, format || '');

  return {
    month: dateTime.format('MMMM'),
    year: dateTime.year(),
  };
};

export default descriptiveDate;
