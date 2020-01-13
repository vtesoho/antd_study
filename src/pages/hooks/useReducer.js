import React,{useReducer} from 'react'


function countReducer(state,action){
    switch (action.type) {
        case 'add':
            return state + 1
        case 'minus' :
            return state - 1
        default:
            return state
    }
}

function MyCountFunc(){
    // const [count,setCount] = useState(0)

    const [count, dispatchCount] = useReducer(countReducer,0)

    // setCount(1)   //直接设置一个新的值
    // setCount((c) => c+1)  //这里的c是在setCount执行的时候取到最新的count的值

    return (
        <div>
            <h3>useReducer</h3>
            <p>{count}</p>
            <button onClick={()=>{dispatchCount({type:'add'})}}>在当前值+1</button>
            <button onClick={()=>{dispatchCount({type:'minus'})}}>当前值-1</button>
        </div>
    )
}

export default MyCountFunc