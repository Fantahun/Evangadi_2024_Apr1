import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ReducerExample from './components/ReducerExample'
import UseContextMain from './components/UseContextMain'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <ReducerExample />
     <UseContextMain />
    </>
  )
}

export default App
