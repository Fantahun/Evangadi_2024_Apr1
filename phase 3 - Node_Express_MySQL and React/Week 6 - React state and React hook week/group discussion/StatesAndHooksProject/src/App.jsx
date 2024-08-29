import { useState } from 'react'
import './App.css'
import MyCounter from './components/MyCounter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <MyCounter />
    </>
  )
}

export default App
