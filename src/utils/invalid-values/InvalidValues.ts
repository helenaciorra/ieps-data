const invalidValues = (value: any) => {
  let valueToCheck = String(value);

  valueToCheck = valueToCheck.replace('%', '');

  if (valueToCheck === '-1') {
    return '-';
  } else {
    return value;
  }
};

export default invalidValues;
