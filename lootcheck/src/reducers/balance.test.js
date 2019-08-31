import balanceReducer from './balanceReducer';
import * as types from '../actions/types';

describe('balanceReducer', () => {
    it('sets a balance', () => {
        const balance = 10;

        expect(balanceReducer(undefined, {
            type: types.SET_BALANCE,
            balance
        }))
            .toEqual(balance);
    });
});