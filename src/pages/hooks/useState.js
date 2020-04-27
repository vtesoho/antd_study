import React,{useState, useEffect} from 'react'

function MyCountFunc(){
    const [count,setCount] = useState(0)

    // setCount(1)   //直接设置一个新的值
    // setCount((c) => c+1)  //这里的c是在setCount执行的时候取到最新的count的值
    // useEffect(()=> {
    //     console.log('refresh')
    // })

    return (
        <div>
            <h3>useState</h3>
            <p>{count}</p>
            <button onClick={()=>{setCount((c) => c+1)}}>在当前值+1</button>
            <button onClick={()=>{setCount(1)}}>直接设置1</button>
        </div>
    )
}

//useState是对象的情况下
function StateObject(){
    const [obj,setobj] = useState([
        {name:'testA'},
        {name:'testB'},
        {name:'testC'},
        {name:'testD'},
    ])

    useEffect(()=> {
        console.log('能否检查到obj变化？',obj)
    },[obj])

    const [refresh,setRefresh] = useState(false);
    const refreshAction = () => {
        setRefresh((old) => !old)
    }

    const newObjAction = ()=>{
        obj[0].name = 'new testA'
        console.log(obj)
        setobj(obj)
        // refreshAction()
    }

    const objPushAction = ()=>{
        obj.push({name:`push ${Math.random()}`})
        console.log(obj)
        // refreshAction()
    }


    return (
        <div>
            <h3>对象数组更新问题</h3>
            <ul>
                {
                    obj.map((item,index) => {
                        return (
                            <li key={`obj_${index}`}>{item.name}</li>
                        )
                    })
                }
                
            </ul>
            <button onClick={()=>{newObjAction()}}>设置新值</button>

            <button onClick={()=>{objPushAction()}}>push</button>
        </div>
    )

}



export default StateObject