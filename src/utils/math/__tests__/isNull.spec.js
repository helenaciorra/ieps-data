import isNull from '../isNull';

describe('utis: isNull()', () => {
  describe('When input is null', () => {
    it('should return true - 1', () => {
      expect(isNull()).toBe(true);
    });

    it('should return true - 2', () => {
      expect(isNull('')).toBe(false);
    });

    it('should return true - 3', () => {
      expect(isNull(null)).toBe(true);
    });

    it('should return true - 4', () => {
      expect(isNull(undefined)).toBe(true);
    });
  });

  describe('When input is not NULL', () => {
    it('should return false - 1', () => {
      expect(isNull(10)).toBe(false);
    });

    it('should return false - 2', () => {
      expect(isNull('')).toBe(false);
    });

    it('should return false - 2', () => {
      expect(isNull('abc')).toBe(false);
    });

    it('should return false - 3', () => {
      expect(isNull(0)).toBe(false);
    });
  });
});
