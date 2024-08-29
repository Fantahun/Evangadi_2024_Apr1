import React, { Component } from 'react';

class CounterDisplayer extends Component {
    render() {

const {count} = this.props;

        return (
            <div>
                <h2>All clicks counter: {count} </h2>
            </div>
        );
    }
}

export default CounterDisplayer;
