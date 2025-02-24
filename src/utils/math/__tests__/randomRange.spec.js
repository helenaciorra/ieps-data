import randomRange from '../randomRange';

describe('utis: randomRange()', () => {
  describe('When params are null', () => {
    it('should return 0', () => {
      expect(randomRange()).toBe(0);
    });
  });

  describe('When param "a" is NaN', () => {
    it('should return 0', () => {
      expect(randomRange('a', 1)).toBe(0);
    });
  });

  describe('When param "a" is null', () => {
    it('should return 0', () => {
      expect(randomRange(null, 1)).toBe(0);
    });
  });

  describe('When param "b" is null', () => {
    it('should return 0', () => {
      expect(randomRange(1, null)).toBe(0);
    });
  });

  describe('When set a base interval', () => {
    it('should return a value between "a" and "b" - 1', () => {
      const a = 0;
      const b = 1;
      expect(randomRange(a, b)).toBe(0);
    });

    it('should return a value between "a" and "b" - 2', () => {
      const a = 0;
      const b = 10;

      expect(randomRange(a, b)).toBeGreaterThanOrEqual(a);
      expect(randomRange(a, b)).toBeLessThan(b);
    });

    it('should return a value between "a" and "b" - 3', () => {
      const a = 12;
      const b = 30;

      expect(randomRange(a, b)).toBeGreaterThanOrEqual(a);
      expect(randomRange(a, b)).toBeLessThan(b);
    });
  });

  describe('When "a" is greater than "b"', () => {
    it('should return a', () => {
      const a = 10;
      const b = 1;
      expect(randomRange(a, b)).toBe(a);
    });
  });
});
