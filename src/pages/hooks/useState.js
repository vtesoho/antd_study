import React,{useState} from 'react'

function MyCountFunc(){
    const [count,setCount] = useState(0)

    setCount(1)   //直接设置一个新的值
    setCount((c) => c+1)  //这里的c是在setCount执行的时候取到最新的count的值

    return (
        <div>
            <span>{count}</span>
            <button onClick={()=>{setCount((c) => c+1)}}></button>
        </div>
    )
}

export default MyCountFunc