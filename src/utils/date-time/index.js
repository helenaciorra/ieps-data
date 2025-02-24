import moment from 'moment';
import dayOfMonthFormat from './dayOfMonthFormat';
import todayTimeStamp from './todayTimeStamp';
import dateMMYYYY from './dateMMYYYY';
import dateDDMMYYYY from './dateDDMMYYYY';
import dateHHmmMMYYYY from './dateHHmmMMYYYY';
import yearDateList from './yearDateList';
import descriptiveDate from './descriptiveDate';
import lastMonth from './lastMonth';
import dateDDMMYYYYHHhmm from './dateDDMMYYYYHHhmm';

export const sortByMoment = (moment1, moment2) =>
  moment1.isBefore(moment2) ? -1 : 1;

export const sortByMomentFiled = (field) => (item1, item2) =>
  sortByMoment(item1[field], item2[field]);

export const momentFromMmYyyy = (dateString) => moment(dateString, 'MM/YYYY');

export default {
  dayOfMonthFormat,
  sortByMomentFiled,
  sortByMoment,
  momentFromMmYyyy,
  todayTimeStamp,
  dateMMYYYY,
  dateHHmmMMYYYY,
  dateDDMMYYYY,
  yearDateList,
  descriptiveDate,
  lastMonth,
  dateDDMMYYYYHHhmm,
};
