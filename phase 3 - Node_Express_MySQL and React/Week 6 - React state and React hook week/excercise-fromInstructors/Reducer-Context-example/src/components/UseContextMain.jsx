import React,{ useState, createContext, useContext } from "react";
import Component2 from './component2';
import Component3 from './component3';
import Component4 from './component4';



export  const UserContext = createContext()//export the created context so that it can be consumed by others

function UseContextMain() {

    const [user, setUser] = useState("Room 3");

    return (
      <UserContext.Provider value={user}>

        <h1>{`Hello ${user}!`} from provider</h1>
        <Component2 user={user} />
        <Component3 user={user} />
        <Component4 user={user} />

      </UserContext.Provider>
    );
}


export default UseContextMain;
