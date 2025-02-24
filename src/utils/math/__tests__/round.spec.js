import round from '../round';

describe('utis: round()', () => {
  describe('When any param is null ', () => {
    it('should round "d" to zero places', () => {
      const c = 33.33;
      expect(round(c)).toBe(33);
    });
    it('should round "a" to zero places', () => {
      expect(round(null, 1)).toBe(0);
    });

    it('should round "b" to zero places', () => {
      const b = null;
      expect(round(b, 1)).toBe(0);
    });

    it('should round "c" to zero places', () => {
      const c = 33.33;
      expect(round(c, 0)).toBe(33);
    });

    it('should round "c" to zero places', () => {
      const c = 33.33;
      expect(round(c, 'asas')).toBe(33);
    });

    it('should round "d" to zero places', () => {
      const c = 33.33;
      expect(round(c)).toBe(33);
    });
  });

  describe('When param is null or NaN', () => {
    it('should round zero - 1', () => {
      expect(round()).toBe(0);
    });

    it('should round zero - 2', () => {
      expect(round('a')).toBe(0);
    });

    it('should round zero - 3', () => {
      expect(round('')).toBe(0);
    });
  });
  describe('When use round default ', () => {
    it('should round "a" to zero places', () => {
      const a = 123.123;
      expect(round(a)).toBe(123);
    });

    it('should round "b" to zero places', () => {
      const b = 33.123;
      expect(round(b)).toBe(33);
    });

    it('should round "c" to zero places', () => {
      const c = 33;
      expect(round(c)).toBe(33);
    });
  });

  describe('When use round to 1 ', () => {
    it('should round "a" to one places', () => {
      const a = 123.123;
      expect(round(a, 1)).toBe(123.1);
    });

    it('should round "b" to one places', () => {
      const b = 33.123;
      expect(round(b, 1)).toBe(33.1);
    });

    it('should round "c" to one places', () => {
      const c = 33;
      expect(round(c, 1)).toBe(33);
    });
  });

  describe('When use round to 2 ', () => {
    it('should round "a" to two places', () => {
      const a = 123.123;
      expect(round(a, 2)).toBe(123.12);
    });

    it('should round "b" to two places', () => {
      const b = 33.12;
      expect(round(b, 2)).toBe(33.12);
    });

    it('should round "c" to two places', () => {
      const c = 33;
      expect(round(c, 2)).toBe(33);
    });
  });

  describe('When use round to 3 ', () => {
    it('should round "a" to two places', () => {
      const a = 123.123;
      expect(round(a, 3)).toBe(123.123);
    });

    it('should round "b" to two places', () => {
      const b = 33.12;
      expect(round(b, 3)).toBe(33.12);
    });

    it('should round "c" to two places', () => {
      const c = 33;
      expect(round(c, 3)).toBe(33);
    });

    it('should round "d" to two places', () => {
      const a = 123.1234;
      expect(round(a, 3)).toBe(123.123);
    });
  });
});
