import React, { Component } from 'react';
import { Button } from 'react-bootstrap'
import Gift from './Gift';
import { max_number } from '../helper'

//coverage test command
// npm run test -- --coverage --watchALL

class App extends Component {
    constructor() {
        super();

        this.state = { gifts: [] };
    }
    render() {
        const { gifts } = this.state;
        return (
            <div>
                <h2>Gift Giver</h2>
                <div className='gift-list'>
                    {
                        gifts.map((gift, index) => {
                            return (
                                <Gift
                                    key={index}
                                    gift={gift}
                                    removeGift={this.removeGift}
                                />
                            )
                        })
                    }
                </div>
                <Button className='btn-add' onClick={this.addGift}>Add Gift</Button>
            </div>
        )
    }

    addGift = () => {
        const { gifts } = this.state;
        gifts.push({ id: max_number(this.state.gifts.map(gift => gift.id)) + 1 });
        this.setState({ gifts });
    };

    removeGift = id => {
        const gifts = this.state.gifts.filter(gift => gift.id !== id);
        this.setState({ gifts });
    }
}

export default App;
