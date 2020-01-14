import React,{useContext} from 'react'

import MyContext from "./my_context"

function MyCountFunc(){
    const context = useContext(MyContext)
    
    return (
        <div>
            <h3>useContext</h3>
            <h1>{context}</h1>
            
        </div>
    )
}

export default MyCountFunc