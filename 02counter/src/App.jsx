import { useState } from 'react'
import './App.css'

function App() {
 
  // let counter = 15
  const [counter, setCounter] = useState(true)
  
  const addValue = () => {
    setCounter(counter+1)
  } 
  const removeValue = () => {
    setCounter(counter-1)
  }
  return (
    
    <>
      
      <h1>React Course ONline {counter} </h1>
      <h2>Conuter Value: {counter}</h2>
      <button
        onClick={addValue}
      >Add Value</button>{"  "}
      <button
      onClick={removeValue}
      >Remove value</button>
      <p>footer: { counter}</p>
      
    </>
  )
}

export default App
