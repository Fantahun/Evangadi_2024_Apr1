import { useState } from 'react'
import MyCounter from './components/MyCounter'
import './app.css'
import IncreaseDecreaseCount from './components/IncreaseDecreaseCount'
import UseEffectForTitle from './components/UseEffectForTitle'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <p>test</p> */}
    {/* <MyCounter/> */}
    {/* <IncreaseDecreaseCount /> */}
    <UseEffectForTitle />
    </>
  )
}

export default App
