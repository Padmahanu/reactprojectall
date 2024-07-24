import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
      <h1 className='bg-green-300 p-30 rounded-md text-3xl'>Vite + React + TailwindCSS</h1>
    <Card/>
    <Card username="Hanuman" post="Proffesor"/>
    <Card username="Kannya" post="Nursery"/>
    <Card/>
    </>
  )
}

export default App
