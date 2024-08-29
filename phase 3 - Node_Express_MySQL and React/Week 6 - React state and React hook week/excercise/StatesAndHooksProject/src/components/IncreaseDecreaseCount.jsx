import React, {useState} from 'react'

function IncreaseDecreaseCount() {

    const [count,setCount]=useState(0);

    function resetCount(){
        setCount(0)
    }
    
    function increaseCount(){
        setCount(count + 1)
    }
    
    // function decreaseCount(){
    //     setCount(count - 1)
    // }
    
      return (
        <div>
            <h2>Initial click count: {count}</h2>
          <button onClick={resetCount}>Reset Count</button>
          <button onClick={increaseCount}>Increase Count</button>
          <button onClick={()=>setCount(count-1)}>Decrease Count</button>
        </div>
      )
}

export default IncreaseDecreaseCount
