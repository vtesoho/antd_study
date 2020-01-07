import React,{useState,useReducer,useLayoutEffect,useEffect,useContext,useRef,memo} from 'react'

function Child () {
    const [testA,setTestA] = useState('aaa')
    return (
        <div>
            hooksA
            {testA}
        </div>
    )
}

export default Child