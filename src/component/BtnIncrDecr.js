import React,{useState} from "react";

export default function BtnIncrDecr(){
    const [count, setCount]=useState(0);
    const [toggleBtn, setToggle]=useState(false);
    function incr(){
        setCount(count+1)
      }
      function decr(){
        setCount(count-1)
      }
return(
    <>
    <h3>Count:{count}</h3>
    <button 
    onClick={incr}
    className="btn btn-success">Incr</button>
    <button 
    onClick={decr}
    className="btn btn-danger">Decr</button>
    <button 
    onClick={()=>{setToggle(!toggleBtn)}}
    className='toggleBtn'>Toggle Btn</button>
    {
      toggleBtn ? <p className="lead">
      YouTube Content
    </p>
    : null
    }
    <hr/>
    </>
    
)
}