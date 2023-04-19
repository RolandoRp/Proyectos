import React, { useState } from 'react'

const CounterApp = () => {
  const [counter, setCounter] = useState(0);

  const increment = () =>{
    setCounter(counter+1)
  }
  
  const decrement = () =>{
    setCounter(counter-1)
  }
  
  return (
    <div>
      <button onClick={increment}>
        Increment
      </button>
      <button onClick={decrement}>
        Decrement
      </button>
      <h1>Clicks: {counter}</h1>
    </div>
  )
}

export default CounterApp