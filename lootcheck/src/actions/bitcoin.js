import { FETCH_BITCOIN } from './types';
import axios from 'axios';

// export const fetchBitcoin = () => {
//     return dispatch => {
//         return fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
//             .then(response => response.json())
//             .then(json => dispatch({ type: FETCH_BITCOIN, bitcoin: json }));
//     }
// };

export const fetchBitcoin = () => async dispatch => {
    try {
        const res = await axios.get('https://api.coindesk.com/v1/bpi/currentprice.json');
        dispatch({
            type: FETCH_BITCOIN,
            bitcoin: res.data
        });
    } catch (err) {
        console.error(err.message);
    }
}