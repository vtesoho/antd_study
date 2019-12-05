import React from 'react'

import Main from './../route1/Main'
import About from './../route1/about'
import Topic from './../route1/topic'
import Home from './Home'
import {HashRouter as Router,Route,Link} from "react-router-dom"

export default class IRoute extends React.Component{
    render(){
        return (
            <Router>
                <Home>
                    {/* <Route exact={true} path="/" component={Main}></Route> */}
                    <Route path="/main/" render={()=>
                        <Main>
                            <div>this is sub child element</div>
                            <Route path="/main/a" component={About}></Route>
                        </Main>
                    }></Route>
                    <Route path="/about" component={About}></Route>
                    <Route path="/topics" component={Topic}></Route>
                </Home>
            </Router>
        );
    }
}