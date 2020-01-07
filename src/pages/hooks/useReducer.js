import React,{useReducer} from 'react'

function MyCountFunc(){
    const [count,setCount] = useState(0)

    // setCount(1)   //直接设置一个新的值
    // setCount((c) => c+1)  //这里的c是在setCount执行的时候取到最新的count的值

    return (
        <div>
            <h3>useState</h3>
            <p>{count}</p>
            <button onClick={()=>{setCount((c) => c+1)}}>在当前值+1</button>
            <button onClick={()=>{setCount(1)}}>直接设置1</button>
        </div>
    )
}

export default MyCountFunc