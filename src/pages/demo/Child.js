import React from 'react'


export default class Child extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            count:0
        };
    }

    componentWillMount(){
        console.log('will mount')
    }

    componentDidMount(){
        console.log('did mount')
    }

    componentWillReceiveProps(newProps){
        console.log('will props' + newProps.name)
    }

    //调用setstate就会执行
    shouldComponentUpdate(){
        console.log('should upate')
        return true
    }

    componentWillUpdate(){
        console.log('will update')
    }

    componentDidUpdate(){
        console.log('did update')
    }
    
    render(){
        return <div>
            <p>{this.props.name}</p>
        </div>
    }
}