import bitcoinReducer from './bitcoinReducer';
import { FETCH_BITCOIN } from '../actions/types';

describe('bitcoinReducer', () => {
    const bitcoinData = { bpi: 'bitcoin price index' };

    it('fetches and sets the bitcoin data', () => {
        expect(bitcoinReducer({}, { type: FETCH_BITCOIN, bitcoin: bitcoinData })).toEqual(bitcoinData);
    });
});