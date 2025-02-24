import kilo from '../kilo';

describe('utis: kilo()', () => {
  describe('When input is not a number', () => {
    it('should return 0 to a string', () => {
      expect(kilo('asas')).toBe(0);
    });

    it('should return 0 to an empty string', () => {
      expect(kilo('')).toBe(0);
    });

    it('should return 0 to null', () => {
      expect(kilo()).toBe(0);
    });

    it('should return 0 to null', () => {
      expect(kilo(undefined)).toBe(0);
    });
  });

  describe('When input is null', () => {
    it('should return 0', () => {
      expect(kilo()).toBe(0);
    });
  });

  describe('When input is not NULL', () => {
    it('should convert 100000', () => {
      expect(kilo(100000)).toBe(100);
    });

    it('should convert 12345', () => {
      expect(kilo(12345)).toBe(12.345);
    });
  });
});
