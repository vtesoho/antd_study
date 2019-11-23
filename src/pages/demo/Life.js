import React from 'react'
import Child from './Child'
import './index.less'

export default class Life extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            count:0
        };
    }

    // state = {
    //     count: 0
    // }

    handleAdd=()=>{
        this.setState({
            count:this.state.count + 1
        })
    }

    //用这种方式声明就必须得重新绑定一下this
    handleClick(){
        this.setState({
            count:this.state.count + 1
        })
    }

    render(){
        let style = {
            padding: 50
        }
        //return 必须是一个根元素，不能在出现一个兄弟元素
        return <div className="content">
            <p>react 生命周期介绍 </p>
            <button onClick={this.handleAdd}>点击一下</button>
            <button onClick={this.handleClick.bind(this)}>点击一下</button>
            <p>{this.state.count}</p>
            <Child name={this.state.count}></Child>
        </div>
    }
}