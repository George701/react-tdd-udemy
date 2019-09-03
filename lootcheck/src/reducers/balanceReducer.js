import * as types from '../actions/types';

const balance = (state = 0, action) => {
    switch (action.type) {
        case types.SET_BALANCE:
            return action.balance;
        case types.DEPOSIT:
            return state + action.deposit;
        case types.WITHDRAW:
            return state - action.withdraw;
        default:
            return state;
    }
}

export default balance;