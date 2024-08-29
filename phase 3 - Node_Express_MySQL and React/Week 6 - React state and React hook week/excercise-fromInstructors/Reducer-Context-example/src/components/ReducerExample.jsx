import React,{useReducer} from 'react'

export default function ReducerExample() {

    
    const initialState = {
        count: 0,
    };

    const [state, dispatch] = useReducer(reducer, initialState);
      
      function reducer(state, action) {
        switch (action.type) {
          case 'INCREMENT':
            return { count: state.count + 1 };
          case 'DECREMENT':
            return { count: state.count - 1 };
            case 'reset':
                return {count:state.count=0}
          default:
            throw new Error();
        }
      }


    return (
        <div>
          Count: {state.count} <br/>
          <button onClick={() => dispatch({ type: 'DECREMENT' })}>-</button>
          <button onClick={() => dispatch({ type: 'INCREMENT' })}>+</button>
          <button onClick={() => dispatch({ type: 'reset' })}>reset</button>
        </div>
      );
}




  
