import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProfileCard from './components/ProfileCard'

function App() {


  return (
    <div className='container'>
  <ProfileCard name="Zee" age='26' occupation="IT Manager" profileImage='https://images.unsplash.com/photo-1606814893907-c2e42943c91f?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>


<ProfileCard name="Yidne" age='46' occupation="IT Manager" profileImage='https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'/>

<ProfileCard name="Tina" age='36' occupation="IT Manager" profileImage='https://images.unsplash.com/photo-1606814893907-c2e42943c91f?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>

    </div>
  )
}

export default App
