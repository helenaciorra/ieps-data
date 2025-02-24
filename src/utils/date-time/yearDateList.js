import moment from './moment';

const dayMonth = (date) => {
  const [day, month, year] = date.split('-');
  return {
    day,
    month,
    year,
  };
};

export default (period = 12) => {
  const dates = Array(period)
    .fill(moment().add(1, 'month'))
    .map((date) => date.add(-1, 'month').format('DD-MM-YYYY'))
    .map((date) => ({
      label: date,
      value: `${dayMonth(date).month}-${dayMonth(date).year}`,
      month: `${dayMonth(date).month}/${dayMonth(date).year}`,
      monthDate: moment(`${dayMonth(date).year}-${dayMonth(date).month}-01`),
      year: dayMonth(date).year,
    }));

  return dates;
};
