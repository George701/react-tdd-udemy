import * as types from '../actions/types';

const balance = (state = 0, action) => {
    switch (action.type) {
        case types.SET_BALANCE:
            return action.balance;
        default:
            return balance;
    }
}

export default balance;