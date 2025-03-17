import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {

  return (
    <>
      <h1 className='bg-green-400 text-black p-5 rounded-xl'>Tailiwnd test</h1>
      <Card username="HELLO" address="Moon"/>
      <Card username="WORLD" address="Mars"/>
      <Card username="JUNNI" address="Space"/>
    </>
  )
}

export default App
