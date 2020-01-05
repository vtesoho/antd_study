import React from 'react'
import { Row, Col } from 'antd';
import Header from './components/Header'
import Footer from './components/Footer'
import NavLeft from './components/NavLeft'
import Home from './pages/home'
import Hooks from './pages/hooks/hooks'
import './style/common.less'

import MyContext from './my-context'

export default class Admin extends React.Component{
    state={
        context:'value'
    }
    render(){
        return (
            // <Row className="container">
            //     <Col span="3" className="nav-left">
            //         <NavLeft />
            //     </Col>
            //     <Col span="21" className="main">
            //         <Header>
            //             header
            //         </Header>
            //         <Row className="content">
            //             <Hooks />
            //             {/* <Home /> */}
            //             {/* content */}
            //             {/* {this.props.children} */}
            //         </Row>
            //         <Footer>
            //             footer
            //         </Footer>
            //     </Col>
            // </Row>
            <div>
                <MyContext.Provider value={this.state.context}>
                    <Hooks />
                    <button onClick={()=> this.setState({context: `${this.state.context}111`})}></button>
                </MyContext.Provider>
            </div>
        );
    }
}