import React ,{useContext} from 'react'
import { UserContext } from './UseContextMain'; // Import the context

export default function component3() {
  const user = useContext(UserContext);

  return (
    <div>     
        <h2>hello {user} from component 3</h2>
    </div>
  )
}

