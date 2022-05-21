import React,{useState} from "react";


export default function Input(){
    const [value, setValue]=useState("") 

    return(
        <>
        <p>Value: {value}</p>
    <input type="text" 
    onChange={(event)=>setValue(event.target.value)}/>
        </>
    )
}