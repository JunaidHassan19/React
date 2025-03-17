import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [counter, setCounter] = useState(0);

  // let counter = 0;

  const addValue = () => {

    if(counter === 20) {
      return;
    }

    // counter += 1;
    setCounter(counter + 1);
    // console.log('Add value', counter);
  }

  const removeValue = () => {

    if(counter === 0) {
      return;
    }

    setCounter(counter - 1);
  }
  
  return (
    <>
      <h1>Hello React | JH</h1>
      <h2>Counter Value: {counter}</h2>
      <button 
      onClick={addValue}
      // onClick={() => setCounter(counter + 1)} // Arrow function
      >Add value</button>
      <button
      onClick={removeValue}
      // onClick={() => setCounter(counter - 1)} // Arrow function
      >Remove value</button>
    </>
  )
}

export default App
