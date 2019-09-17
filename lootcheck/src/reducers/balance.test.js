import balanceReducer from './balanceReducer';
import balanceReducer2 from './balanceReducer';
import * as types from '../actions/types';

describe('balanceReducer', () => {
    describe('when initializing', () => {
        const balance = 10;

        it('sets a balance', () => {

            expect(balanceReducer(undefined, {
                type: types.SET_BALANCE,
                balance
            }))
                .toEqual(balance);
        });

        describe('then re-initializing', () => {
            it('reads the balance from cookies', () => {
                expect(balanceReducer2(undefined, {})).toEqual(balance);
            });
        });
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