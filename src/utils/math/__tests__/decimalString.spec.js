import decimalString from '../decimalString';

describe('utis: decimalString()', () => {
  describe('When input is not a number', () => {
    it('should return 00 - 1', () => {
      const input = 'abc';
      expect(decimalString(input)).toBe(input);
    });
  });

  describe('When input is null', () => {
    it('should return 00 - 1', () => {
      expect(decimalString()).toBe('00');
    });

    it('should return 00 - 2', () => {
      expect(decimalString('')).toBe('00');
    });

    it('should return 00 - 3', () => {
      expect(decimalString(0)).toBe('00');
    });

    it('should return 00 - 4', () => {
      expect(decimalString(null)).toBe('00');
    });
  });

  describe('When input is less than 10', () => {
    it('should return 08', () => {
      expect(decimalString(8)).toBe('08');
    });

    it('should return 09', () => {
      expect(decimalString(9)).toBe('09');
    });
  });

  describe('When input is 10', () => {
    it('should return 10', () => {
      expect(decimalString(10)).toBe('10');
    });
  });

  describe('When input is grater than 10', () => {
    it('should return 11', () => {
      expect(decimalString(11)).toBe('11');
    });
  });
});
