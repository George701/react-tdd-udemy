import React from 'react';
import { Provider } from 'react-redux';
import Wallet from './Wallet'
import Loot from './Loot'

import store from '../store';

const App = () => {
    return (
        <Provider store={store}>
            <div>
                <h2>Loot Check</h2>
                <hr />
                <Wallet />
                <hr />
                <Loot />
                <div>Powerd by <a rel="noopener noreferrer" href='https://www.coindesk.com/price' target='_blank'>Coindesk</a></div>
            </div>
        </Provider>
    )
}

export default App;