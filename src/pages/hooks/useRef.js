import React,{useState, useRef, useEffect} from 'react'

import RefComponents from './refComponents'

function MyCountFunc(){
    const [count,setCount] = useState(0)

    const inputRef = useRef()

    let componentsRef = useRef()

    useEffect(()=>{
        console.log(componentsRef)
    })

    return (
        <div>
            <h3>useRef</h3>
            <p>{count}</p>
            <input ref={inputRef} onChange={()=>{setCount((e)=>{return e+1})}}></input>
            <hr></hr>
            <RefComponents ref={componentsRef}></RefComponents>
        </div>
    )
}

export default MyCountFunc