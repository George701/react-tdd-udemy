import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Wallet from './Wallet'
import Loot from './Loot'

import store from '../store';

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <div>
                    <h2>Loot Check</h2>
                    <hr />
                    <Wallet />
                    <hr />
                    <Loot />
                </div>
            </Provider>
        )
    }
}

export default App;