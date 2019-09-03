import React, { Component } from 'react';
import { connect } from 'react-redux';

export class Wallet extends Component {
    constructor() {
        super();
        this.state = {
            balance: ''
        }
    }
    render() {
        return (
            <div>
                <h3 className='balance'>Wallet balance: {this.props.balance}</h3>
                <br />
                <input className="input-wallet" type='text' onChange={this.updateBalance} />
            </div>
        )
    }

    updateBalance = e => {
        this.setState({ balance: parseInt(e.target.value, 10) })
    }
}

export default connect(state => { return { balance: state.balance } }, null)(Wallet);