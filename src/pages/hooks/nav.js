import React from 'react'

import {Link} from 'react-router-dom'

import "./css.less"


const TopNav = () => {
    return (
        <div>
            <ul className="nav">
                <li><Link to="/useState">useState</Link></li>
                <li><Link to="/useEffect">useEffect</Link></li>
                <li><Link to="/useReducer">useReducer</Link></li>
            </ul>
        </div>
    )
}

export default TopNav