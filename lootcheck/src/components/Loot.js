import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchBitcoin } from '../actions/bitcoin';
import PropTypes from 'prop-types';

export class Loot extends Component {

    componentDidMount() {
        console.log(this.props.fetchBitcoin())
        this.props.fetchBitcoin();
    }

    render() {
        return (
            <h3>
                Bitcoin balance:
            </h3>
        )
    }
}

Loot.propType = {
    fetchBitcoin: PropTypes.func.isRequired,
}

export default connect(state => state, { fetchBitcoin })(Loot);
