import * as types from './types';

export const setBalance = balance => {
    return {
        type: types.SET_BALANCE,
        balance
    }
};

export const deposit = deposit => {
    return {
        type: types.DEPOSIT,
        deposit
    }
};

export const withdraw = withdraw => {
    return {
        type: types.WITHDRAW,
        withdraw
    }
};