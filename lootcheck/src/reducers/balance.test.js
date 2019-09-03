import balanceReducer from './balanceReducer';
import * as types from '../actions/types';
import { constants } from 'zlib';

describe('balanceReducer', () => {
    it('sets a balance', () => {
        const balance = 10;

        expect(balanceReducer(undefined, {
            type: types.SET_BALANCE,
            balance
        }))
            .toEqual(balance);
    });

    it('deposits into the balance', () => {
        const deposit = 10;
        const initialState = 5;
        expect(balanceReducer(initialState, { type: types.DEPOSIT, deposit })).toEqual(initialState + deposit);
    });

    it('withdraws from the balance', () => {
        const withdrawl = 5;
        const initialState = 10;

        expect(balanceReducer(initialState, { type: types.WITHDRAW, withdraw: withdrawl })).toEqual(initialState - withdrawl);
    })
});