import React from 'react'
import { Sweaters } from '../components/'

class Home extends React.Component {
    render() {
        return (
            <div className="container">
                <h1>Nice to meet you.</h1>
                <Sweaters/>
            </div>
        )
    }
}

export default Home;