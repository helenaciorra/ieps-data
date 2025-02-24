import isNullOrNaN from '../isNullOrNaN';

describe('utis: isNullOrNaN()', () => {
  describe('When input is null', () => {
    it('should return true - 1', () => {
      expect(isNullOrNaN()).toBe(true);
    });

    it('should return true - 2', () => {
      expect(isNullOrNaN('')).toBe(true);
    });

    it('should return true - 3', () => {
      expect(isNullOrNaN(null)).toBe(true);
    });

    it('should return true - 4', () => {
      expect(isNullOrNaN(undefined)).toBe(true);
    });

    it('should return true - 5', () => {
      expect(isNullOrNaN('abc')).toBe(true);
    });
  });

  describe('When input is not NULL', () => {
    it('should return false - 1', () => {
      expect(isNullOrNaN(10)).toBe(false);
    });

    it('should return false - 3', () => {
      expect(isNullOrNaN(0)).toBe(false);
    });
  });
});
