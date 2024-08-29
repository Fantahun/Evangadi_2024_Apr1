import React, { Component } from 'react';

class EvenCounterDisplayer extends Component {
    constructor() {
      super()

    }
    
        render() {

            const {evenCount} = this.props;

        return (
            <div>

            {/* {
                count%2==0 ?  <h2>Even clicks counter {count} </h2>  : <h2>Even clicks counter {count-1} </h2> 
            } */}
            <h2>Even clicks counter {evenCount} </h2>

               
            </div>
        );
    }
}

export default EvenCounterDisplayer;

