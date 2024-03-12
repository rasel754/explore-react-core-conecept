
import { useState } from "react"

export default function Counterr(){
    const [count , setCount]=useState(0)

    const handelCount = () =>{
        const  newCount = count+10;
        setCount(newCount)
    }
    const handleReduce = () =>{
        const  newCount = count-8;
        setCount(newCount)
    }

    return (
        <div style={{border : '4px solid red'}}>
            <h3>counter: {count} </h3>
            <button onClick={handelCount}>update count</button>
            <button onClick={handleReduce}>reduce count</button>
        </div>
    )
}