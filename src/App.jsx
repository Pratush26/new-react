import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='m-0 p-0 flex justify-center items-center flex-col h-screen w-screen bg-zinc-800'>
      <h1 className="text-3xl text-purple-400 font-bold underline">
        Hello world!
      </h1>
      <h1 className="text-3xl text-indigo-300">
        This is Pratush here.
      </h1>
  </div>
    </>
  )
}

export default App
