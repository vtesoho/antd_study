import React,{useState, useRef, useEffect} from 'react'

function MyCountFunc(){
    const [count,setCount] = useState(0)
    const mapRef = useRef(null);
    function testRefFun (){
        setCount((c) => c+1)
    }

    useEffect(()=>{
        
    })

    return (
        <div>
            <h3>RefComponents</h3>
            <p>Components: {count}</p>
            <button onClick={()=>{testRefFun()}}></button>
        </div>
    )
}

export default MyCountFunc