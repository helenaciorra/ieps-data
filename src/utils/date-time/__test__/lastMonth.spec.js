import lastMonth from '../lastMonth';
describe('lastMonth', () => {
  it('should return a formated date when passed the format', () => {
    const date = new Date();
    const monthValue = date.getMonth();

    let month = monthValue >= 10 ? monthValue : `0${monthValue}`;
    let year = date.getFullYear();

    if (month === '00') {
      month = '12';
      year -= 1;
    }

    expect(lastMonth('MM-YYYY')).toBe(`${month}-${year}`);
  });

  it('should return a not formated date', () => {
    const date = new Date();
    const monthValue = date.getMonth();

    let month = monthValue >= 10 ? monthValue : `0${monthValue}`;
    let year = date.getFullYear();

    if (month === '00') {
      month = '12';
      year -= 1;
    }

    expect(lastMonth().format('MM-YYYY')).toBe(`${month}-${year}`);
  });
});
