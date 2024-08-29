import React, { Component } from 'react';
import CounterDisplayer from './CounterDisplayer';
import EvenCounterDisplayer from './EvenCounterDisplayer';

class MyCounter extends Component {
constructor() {
  super()

this.state={
    count:0,
    evenCount:0,
}

}

// allClicksCounter = ()=>{

//     this.setState((prevState) =>(
//     const updateCount = prevState.count + 1

//         {count: updateCount,evenCount: updateCount % 2 === 0 ? prevState.evenCount + 2 : prevState.evenCount}
//         // {evenCount:prevEvenState.evenCount +2 }
        
//     ));
        
//     console.log(this.state.count);
// }

allClicksCounter = () => {
    this.setState((prevState) => {
      const updateCount = prevState.count + 1;//0+1=1
      // Update the evenCount only if the upadateCount is even
      return {
        count: updateCount,
      };
    });
  };

  evenClicksCounter = () => {
    this.setState((prevState) => {
      const updateCount = prevState.count + 1;//0+1=1

      // Update the evenCount only if the upadateCount is even
      return {
        evenCount: updateCount % 2 === 0 ? prevState.count -1 : prevState.count,
    };
    });
  };


    render() {
        return (
            <div>
                {/* <button onClick={this.allClicksCounter :this.evenClicksCounter}>Click Here</button>
                 */}

<button onClick={event => {
          this.allClicksCounter();
          this.evenClicksCounter();
        }}>Click Here</button>

                
                <CounterDisplayer count={this.state.count} />
                <EvenCounterDisplayer evenCount={this.state.evenCount} />
            </div>
        );
    }
}

export default MyCounter;
