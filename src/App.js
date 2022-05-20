import React, { useState } from 'react';

function App() {
 
  const [count, setCount]=useState(0);

  function incr(){
    setCount(count+1)
  }
  function decr(){
    setCount(count-1)
  }
    return ( <>
    <h3>Count:{count}</h3>
    <button 
    onClick={incr}
    className="btn btn-success">Incr</button>
    <button 
    onClick={decr}
    className="btn btn-danger">Decr</button>
    </>
    )
}

export default App;