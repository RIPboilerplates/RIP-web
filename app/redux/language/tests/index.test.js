import {
  changeLocale,
} from '../';

import {
  CHANGE_LOCALE,
} from '../constants';

describe('Language actions', () => {
  describe('changeLocale(locale)', () => {
    it('has a type of CHANGE_LOCALE', () => {
      const expected = {
        type: CHANGE_LOCALE,
        locale: 'de',
      };
      expect(changeLocale('de')).toEqual(expected);
    });
  });
});
