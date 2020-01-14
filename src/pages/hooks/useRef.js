import React,{useState, useRef, useEffect} from 'react'

function MyCountFunc(){
    const [count,setCount] = useState(0)

    const inputRef = useRef()

    useEffect(()=>{
        console.log(inputRef)
    })

    return (
        <div>
            <h3>useRef</h3>
            <p>{count}</p>
            <input ref={inputRef} onChange={()=>{setCount((e)=>{return e+1})}}></input>
        </div>
    )
}

export default MyCountFunc