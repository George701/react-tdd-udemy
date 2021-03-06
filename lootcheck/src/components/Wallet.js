import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deposit, withdraw } from '../actions/balance';
import Loot from './Loot'

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
                <button className="btn-deposit" onClick={this.deposit}>Deposit</button>
                <button className="btn-withdraw" onClick={this.withdraw}>Withdraw</button>
                <hr />
                <Loot />
            </div>
        )
    }

    updateBalance = e => {
        this.setState({ balance: parseInt(e.target.value, 10) })
    }

    deposit = () => {
        this.props.deposit(this.state.balance);
    }

    withdraw = () => {
        this.props.withdraw(this.state.balance);
    }
}

export default connect(state => { return { balance: state.balance } }, { deposit, withdraw })(Wallet);