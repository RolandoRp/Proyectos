import React, { useState } from 'react'

const CounterApp = () => {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <button onClick={() => setCounter(counter+1)}>
        Increment
      </button>
      <button onClick={() => setCounter(counter-1)}>
        Decrement
      </button>
      <h1>Clicks: {counter}</h1>
    </div>
  )
}

export default CounterApp