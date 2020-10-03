import React from 'react';
import nike from '../images/nike-logo.png';

import { Link } from 'react-router-dom'

function Main() {
    return (
        <div className="Main">
            <Link to="/home"><img src={nike}></img></Link>
        </div>
    )
}

export default Main;