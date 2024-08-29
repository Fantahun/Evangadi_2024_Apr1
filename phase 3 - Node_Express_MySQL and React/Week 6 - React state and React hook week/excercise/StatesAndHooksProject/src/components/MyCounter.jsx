import React, { Component } from 'react';
import CounterDisplayer from './CounterDisplayer';
import EvenCounterDisplayer from './EvenCounterDisplayer';
class MyCounter extends Component {
    
    constructor(){
super();
this.state={
    count:0,
}
    }

 allClicksCounter =()=>{
    this.setState(prevState => ({
        count:prevState.count + 1
 }));
 }

//  resetCount = ()=>{
//     this.setState({count:0})
//  }

    
    render() {
        return (
            <div className='container'>
                <button className='increment-btn' onClick={this.allClicksCounter}>Click Here</button>
                <CounterDisplayer count={this.state.count}/>
                {/* <button onClick={this.resetCount}>Reset</button> */}
                <EvenCounterDisplayer count={this.state.count} />
            </div>
        );
    }
}

export default MyCounter;
