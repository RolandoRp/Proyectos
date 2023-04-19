import React, { useState } from 'react'

const ConditionApp = () => {
  const [condition, setCondition] = useState(true);

  return (
    <div>
      <button onClick={() => setCondition(!condition)}>
        El boton
      </button>
      
      {/*{
        condition
        ?<h1>No Presiones el boton</h1>
        :<h1>Te dije que no presionaras el boton 7_7</h1>
      }*/}
      
      <h1>Estado es: {condition.toString()}</h1>
      
      <h1>ConditionApp</h1>
    </div>
  )
}

export default ConditionApp