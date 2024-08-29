import React, {useState,useEffect} from 'react'

function UseEffectForTitle() {
const [count, setCount] = useState(0);

// Empty dependency array means this runs once after initial render
useEffect(()=>{
    console.log("log 1");
alert("Component is mounted");
},[]);


// This runs whenever 'count' changes and changes the title
useEffect(()=>{
    console.log("log 2");

    document.title=`Title Count: ${count}`
},[count]);

function updateCount(){
    setCount(count + 1);
    console.log(count);
}


return(
    <div>
    
    {console.log("log 3");}
        <button onClick={updateCount}>Click Here</button>
        <h2>Count Display: {count}</h2>
    </div>
);

}

export default UseEffectForTitle
