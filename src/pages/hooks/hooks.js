import React, { useState } from 'react'

import {HashRouter as Router,Route} from "react-router-dom"

import MuseState from './useState'
import MuseStatePrinciple from './useStatePrinciple'
import MuseEffect from './useEffect'
import MuseReducer from './useReducer'
import MuseContext from './useContext'
import MuseRef from './useRef'

import MyContext from './my_context'

import TopNav from './nav'
// class MyCount extends React.Component{
//     state = {
//         count: 0
//     }

//     componentDidMount(){
//         // this.refs.abc //通过refs获取到指定名的dom对象，这种用法将会在17版本删除掉
//         this.interval = setInterval(()=> {
//             this.setState({count:this.state.count + 1})
//         },1000)
//     }

//     componentWillMount(){
//         if(this.interval){
//             clearInterval(this.interval)
//         }
//     }

//     render(){
//         return <span ref="abc">{this.state.count}</span>
//     }
// }


// function countReducer(state,action){
//     switch (action.type){
//         case 'add':
//             return state + 1
//         case 'minus':
//             return state - 1
//         default:
//             return state
//     }
// }


// function MyCountFunc(){
//     // const [count,setCount] = useState(0)

//     const [count,dispatchCount] = useReducer(countReducer,0)
//     const [name,setName] = useState('jokcy')
//     const [testarray,setTextarray] = useState(['aaa','bbb','ccc'])

//     const context = useContext(MyContext)

//     const inputRef = useRef()

//     // setCount(1)   //直接设置一个新的值
//     // setCount((c) => c+1)  //这里的c是在setCount执行的时候最新的count的值

//     // useEffect(()=> {
//     //     const interval = setInterval(()=> {
//     //         // setCount(c => c + 1)
//     //         dispatchCount({type: 'add'})
//     //     },1000)

//     //     return () => clearInterval(interval)
//     // },[])


//     //useEffect 的第二个参数作用是设置的这个值有变化才会执行第一个参数里面的回调
//     //react官网上建议是只要你在方法里面用到的依赖，就必须放到第二个参数里
//     // 会在dom更新后回执行回调
//     useEffect(()=>{
//         // console.log('effect invoked')
//         console.log(inputRef)
//         return () => console.log('effect deteched')
        
//     },[name,testarray])



//     // useLayouteffect 会在dom更新前执行回调
//     // 建议少用useLayoutEffect，因为是在dom更新前执行，如果执行时间过长，会影响dom的渲染。
//     useLayoutEffect(()=>{
//         console.log('useLayoutEffect invoked')
//         return () => console.log('useLayoutEffect deteched')
//     },[name,testarray])


//     return (
//         <div>
//             <input ref={inputRef} value={name} onChange={(e) => setName(e.target.value)} />
//             <button onClick={()=> dispatchCount({type:'add'})}>{count}</button>
//             <p>----------------------</p>
//             <p>{testarray}</p>
//             <button onClick={()=> setTextarray((a) => a[2] = 'ddd')}>修改array</button>
//             <p>----------------------</p>
//             <p>{context}</p>
//             <p>----------------------</p>
//             <p><Child></Child></p>

//         </div>
//     )
// }



const HooksRouter = () => {

    const [testContext,setTestContext] = useState('22222')


    


    return (
        <div>
            <Router>
                <MyContext.Provider value={testContext} >
                    <TopNav></TopNav>
                    <hr />
                    
                    <Route path="/useState" component={MuseState}></Route>
                    <Route path="/useStatePrinciple" component={MuseStatePrinciple}></Route>
                    <Route path="/useEffect" component={MuseEffect}></Route>
                    <Route path="/useReducer" component={MuseReducer}></Route>
                    <Route path="/useContext" component={MuseContext}></Route>
                    <Route path="/useRef" component={MuseRef}></Route>
                </MyContext.Provider>
            </Router>
        </div>
    )
}


export default HooksRouter