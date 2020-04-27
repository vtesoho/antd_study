import React,{useState} from 'react'


let memoizedState;	
function useStateA (initialState) {	
  memoizedState = memoizedState || initialState	
  function setStateB (newState) {	
    memoizedState = newState
    // render()
    console.log('memoizedState',memoizedState,'刷新')
  }	
  return [memoizedState, setStateB]	
}




function Counter() {
  
    const [	
      number,	
      setNumber	
    ] = useStateA(0)	
    const [	
      title,	
      setTitle	
    ] = useStateA('随机标题')	
    const [refresh,setRefresh] = useState(false);
    const refreshAction = () => {
        setRefresh((old) => !old)
    }
    return (
        <div>
        <h1>{title}</h1>
        <p>{number}</p>
        <button	
          onClick={	
            () => setNumber(number + 1)	
          }	
        >	
          改数字	
        </button>	
        <button	
          onClick={	
            () => setTitle(`随机标题${Math.random()}`)	
          }
        >	
          改标题	
        </button>	
        </div>
    )	
}

// function render() {	
//     let index = 0	
//     ReactDOM.render(<Counter />, document.getElementById('root'));	
// }	
// render()

export default Counter