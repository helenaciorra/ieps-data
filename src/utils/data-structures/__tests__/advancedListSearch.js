import advancedObjectSearch from '../advancedListSearch';

describe('TEST:advancedListSearch', () => {
  describe('CONTEXT: Find many items with exact=false', () => {
    it('should find 2 state=PE items', () => {
      const query = { status: 1 };
      const EXPECTED = [MOCK[0], MOCK[3], MOCK[4]];
      expect(advancedObjectSearch(MOCK, query, { exact: false })).toEqual(
        EXPECTED
      );
    });

    it('should find 4 to status=2 and state=PE', () => {
      const query = { status: 1, state: 'PE' };
      const EXPECTED = [MOCK[0], MOCK[1], MOCK[3], MOCK[4]];
      expect(advancedObjectSearch(MOCK, query, { exact: false })).toEqual(
        EXPECTED
      );
    });
  });

  describe('CONTEXT: Find many items with exact=true', () => {
    it('should find 3 status=1 items', () => {
      const query = { status: 1 };
      const EXPECTED = [MOCK[0], MOCK[3], MOCK[4]];
      expect(advancedObjectSearch(MOCK, query, { exact: true })).toEqual(
        EXPECTED
      );
    });

    it('should find 1 to status=1 and state=PE', () => {
      const query = { status: 1, state: 'PE' };
      const EXPECTED = [MOCK[0]];
      expect(advancedObjectSearch(MOCK, query, { exact: true })).toEqual(
        EXPECTED
      );
    });
  });

  describe('CONTEXT: find unique=true', () => {
    describe('CONTEXT: item with unitque=true', () => {
      it('should find the first state: CE item', () => {
        const query = { status: 1, state: 'CE' };

        const EXPECTED = MOCK[4];
        expect(
          advancedObjectSearch(MOCK, query, { exact: true, unique: true })
        ).toEqual(EXPECTED);
      });

      it('should find 1 to status=1 and state=PE', () => {
        const query = { status: 1, state: 'PE' };
        const EXPECTED = MOCK[0];
        expect(
          advancedObjectSearch(MOCK, query, { exact: true, unique: true })
        ).toEqual(EXPECTED);
      });
    });
  });

  describe('CONTEXT: dont has any object found', () => {
    describe('CONTEXT: Find a empty array ', () => {
      it('should return an empty object', () => {
        const query = { status: 1, state: 'CE', name: 'Not found name' };
        const EXPECTED = {};
        expect(advancedObjectSearch(MOCK, query, { unique: true })).toEqual(
          EXPECTED
        );
      });

      it('should return an empty object 2', () => {
        const query = { state: 'SP' };
        const EXPECTED = {};
        expect(advancedObjectSearch(MOCK, query, { unique: true })).toEqual(
          EXPECTED
        );
      });

      it('should return a empty array', () => {
        const query = { status: 11, states: 'SP' };
        const EXPECTED = [];
        expect(advancedObjectSearch(MOCK, query)).toEqual(EXPECTED);
      });
    });
  });
});

const MOCK = [
  {
    id: 1,
    distName: 'Some Dist 1',
    state: 'PE',
    status: 1,
  },
  {
    id: 2,
    distName: 'Some Dist 2',
    state: 'PE',
    status: 2,
  },
  {
    id: 3,
    distName: 'Some Dist 3',
    state: 'RS',
    status: 3,
  },
  {
    id: 4,
    distName: 'Some Dist 4 Winery',
    state: 'RS',
    status: 1,
  },
  {
    id: 5,
    distName: 'Some Dist 5 Winery',
    state: 'CE',
    status: 1,
  },
];
