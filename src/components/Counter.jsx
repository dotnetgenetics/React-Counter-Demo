import React, { useState } from 'react'
import CustomButton from './Button'
import Count from './Count'

const Counter = () => {
  const [count, setCount] = useState(0);

  const addOne = () =>{
    setCount(count + 1);
  }

  const subtractOne = () =>{
    setCount(count - 1);
  }

  const resetCount = () => {
    setCount(0);
  }
  
  return (
    <>      
      <div>
          <Count count={count}/>
          <CustomButton onClick={addOne}>+1</CustomButton>
          <CustomButton onClick={subtractOne}>-1</CustomButton>
      </div>
      <div style={{margin: "1rem"}}>
          <CustomButton onClick={resetCount}>Reset</CustomButton>
      </div>
    </>
  )
}

export default Counter