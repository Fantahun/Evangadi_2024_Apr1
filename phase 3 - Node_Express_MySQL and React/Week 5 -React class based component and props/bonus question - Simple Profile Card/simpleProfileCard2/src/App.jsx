import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProfileCard from './components/ProfileCard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <ProfileCard name="Zee" age='26' occupation="IT Manager" profileImage='https://images.unsplash.com/photo-1606814893907-c2e42943c91f?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>


    <ProfileCard name="Yidne" age='26' occupation="IT Manager" profileImage='https://images.unsplash.com/photo-1606814893907-c2e42943c91f?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>

    <ProfileCard name="Zee" age='26' occupation="IT Manager" profileImage='https://images.unsplash.com/photo-1606814893907-c2e42943c91f?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>

    </>
  )
}

export default App
