import React, { useState } from 'react'

const ConditionApp = () => {
  const [condition, setCondition] = useState(true);

  return (
    <div>
      <button onClick={() => setCondition(!condition)}>
        No presionar
      </button>
      {
        condition
        ?<h1>No Presiones el boton</h1>
        :<h1>G E Y</h1>
      }
      <h1>ConditionApp</h1>
    </div>
  )
}

export default ConditionApp