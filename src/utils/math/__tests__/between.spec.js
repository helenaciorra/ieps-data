import between from '../between';

describe('utis: between()', () => {
  it('should "a" between "b" and "c" - 1', () => {
    const a = 2;
    const b = 1;
    const c = 3;

    expect(between(a, b, c)).toBeTruthy();
  });

  it('should "a" NOT between "b" and "c" - 2', () => {
    const a = 1;
    const b = 2;
    const c = 3;

    expect(between(a, b, c)).toBeFalsy();
  });

  describe('when params are null', () => {
    it('should "a" NOT between "b" and "c" - 3', () => {
      const a = 1;
      const b = 2;
      expect(between(a, b)).toBeFalsy();
    });

    it('should "a" NOT between "b" and "c" - 3', () => {
      const a = 1;
      const b = 2;
      expect(between(a, b)).toBeFalsy();
    });

    it('should "a" NOT between "b" and "c" - 4', () => {
      const a = 1;
      expect(between(a)).toBeFalsy();
    });

    it('should "a" NOT between "b" and "c" - 5', () => {
      expect(between()).toBeFalsy();
    });
  });
});
