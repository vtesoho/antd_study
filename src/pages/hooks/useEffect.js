import React,{useState,useEffect} from 'react'

function MyCountFunc(){
    const [count,setCount] = useState(0)

    const [counta,setCounta] = useState(0)

    
    //不加第二个参数 
    useEffect(()=> {
        console.log('useEffect')
        return () => console.log('useEffect 销毁')
    })

    //加第二个参数
    useEffect(()=> {
        console.log('useEffect加空白参数')
        return () => console.log('useEffect加空白参数  销毁')
    },[])

    //设置具体到某个state更新页面
    useEffect(()=> {
        console.log('useEffect加具体参数')
        return () => console.log('useEffect加具体参数  销毁')
    },[counta])

    
    return (
        <div>
            <h3>useEffect</h3>
            <div>count :{count} <button onClick={()=>{setCount((c) => c+1)}}>count当前值+1</button> <button onClick={()=>{setCount(1)}}>count设置1</button></div>
            <div>counta :{counta} <button onClick={()=>{setCounta((c) => c+1)}}>counta当前值+1</button> <button onClick={()=>{setCounta(1)}}>counta直接设置1</button></div>
        </div>
    )
}

export default MyCountFunc