import * as types from './types';
import * as actions from './balance';

it('creates an ation to set the balance', () => {

    const balance = 0;
    const expectedAction = { type: types.SET_BALANCE, balance };

    expect(actions.setBalance(balance)).toEqual(expectedAction);
});