import React, { useState } from 'react'
import './counter.css'

function Counter() {
  const[count,setCount]=useState(0)
  return (
    <>
    <div className='container'>
      
<div id='box'>
  <h1 className='text-2xl'>Count: {count}</h1>
  <div id='button'>
    <button onClick={()=>{setCount(count+1)}}>Increment</button>
    <button onClick={()=>{setCount(count-1)}}>Decrement</button>
    <button onClick={()=>{setCount(0)}}>Reset</button>
  </div>

</div>

    </div>
    
    </>
  )
}

export default Counter