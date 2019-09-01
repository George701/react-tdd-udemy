import React, { Component } from 'react';
import { Provider } from 'react-redux';

import store from '../store';

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <div>
                    <h2>Loot Check</h2>
                </div>
            </Provider>
        )
    }
}

export default App;