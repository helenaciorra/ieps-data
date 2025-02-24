import round2 from '../round2';

describe('utis: round2()', () => {
  describe('When any param is null ', () => {
    it('should round2 "a" to zero places', () => {
      expect(round2(null)).toBe(0);
    });

    it('should round2 "b" to zero places', () => {
      const b = null;
      expect(round2(b)).toBe(0);
    });

    it('should round2 "c" to zero places', () => {
      const c = 33;
      expect(round2(c)).toBe(33);
    });
  });

  describe('When param is null or NaN', () => {
    it('should round2 zero - 1', () => {
      expect(round2()).toBe(0);
    });

    it('should round2 zero - 2', () => {
      expect(round2('a')).toBe(0);
    });

    it('should round2 zero - 3', () => {
      expect(round2('')).toBe(0);
    });
  });
  describe('When use round2 default ', () => {
    it('should round2 "a" to zero places', () => {
      const a = 123.123;
      expect(round2(a)).toBe(123.12);
    });

    it('should round2 "b" to zero places', () => {
      const b = 33.123;
      expect(round2(b)).toBe(33.12);
    });

    it('should round2 "c" to zero places', () => {
      const c = 33;
      expect(round2(c)).toBe(33);
    });
  });

  describe('When use round2 to 1 ', () => {
    it('should round2 "a" to one places', () => {
      const a = 123.123;
      expect(round2(a)).toBe(123.12);
    });

    it('should round2 "b" to one places', () => {
      const b = 33.123;
      expect(round2(b)).toBe(33.12);
    });

    it('should round2 "c" to one places', () => {
      const c = 33;
      expect(round2(c)).toBe(33);
    });
  });

  describe('When use round2 to 2 ', () => {
    it('should round2 "a" to two places', () => {
      const a = 123.123;
      expect(round2(a)).toBe(123.12);
    });

    it('should round2 "b" to two places', () => {
      const b = 33.12;
      expect(round2(b)).toBe(33.12);
    });

    it('should round2 "c" to two places', () => {
      const c = 33;
      expect(round2(c)).toBe(33);
    });
  });

  describe('When use round2 to 3 ', () => {
    it('should round2 "a" to two places', () => {
      const a = 123.123;
      expect(round2(a)).toBe(123.12);
    });

    it('should round2 "b" to two places', () => {
      const b = 33.12;
      expect(round2(b)).toBe(33.12);
    });

    it('should round2 "c" to two places', () => {
      const c = 33;
      expect(round2(c)).toBe(33);
    });

    it('should round2 "d" to two places', () => {
      const a = 123.1234;
      expect(round2(a)).toBe(123.12);
    });
  });
});
