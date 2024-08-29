import React, { Component } from 'react';

class EvenCounterDisplayer extends Component {

    render() {
        const {count} = this.props;
        return (
            <div>
                
                   {count%2==0?<h2>Even Clicks Counter: {count}</h2>:<h2>Even Clicks Counter: {count-1}</h2>}
                
            </div>
        );
    }
}

export default EvenCounterDisplayer;
