import React from 'react'
import {Link} from 'react-router-dom'

export default class Home extends React.Component{

    render(){
        return (
            <div>
                <ul>
                    <li><Link to="/main">Home1</Link></li>
                    <li><Link to="/about">About1</Link></li>
                    <li><Link to="/topics">Topics1</Link></li>
                </ul>
                <hr />
                {this.props.children}
                {/* switch匹配到第一个之后会 break，就不会往后面执行了。
                设置exact={true}，会精准匹配。 */}
            </div>
        );
    }
}