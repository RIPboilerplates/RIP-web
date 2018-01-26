import { reducer } from '../reducer';
import {
  CHANGE_LOCALE,
} from '../constants';

describe('language reducer', () => {
  it('returns the initial state', () => {
    expect(reducer(undefined, {}).toJS())
      .toEqual({
        locale: 'en',
      });
  });

  it('changes the locale', () => {
    expect(reducer(undefined, { type: CHANGE_LOCALE, locale: 'de' }).toJS())
      .toEqual({
        locale: 'de',
      });
  });
});
