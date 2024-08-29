import React ,{useContext} from 'react'
import { UserContext } from './UseContextMain'; // Import the context

export default function Component2() {
    const user = useContext(UserContext);
  return (
    <div>     
        <h2>hello from component 2</h2>
    </div>
  )
}


