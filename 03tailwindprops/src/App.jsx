import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './cmponents/Card'

function App() {
  const [count, setCount] = useState(0)

  let myObj={
    username: "saurabh",
    age:21
  }
  let newarr=[1,2,3]

  return (
    <>
    <h1 className='text-white bg-red-800 rounded-xl mb-4'>saurabh kumar</h1>

    <Card  username="ChaiaurCode" someObj={newarr} btnText="click me"/>
    <Card username="saurabh" btnText="visit me"/>

    </>
  )
}

export default App
