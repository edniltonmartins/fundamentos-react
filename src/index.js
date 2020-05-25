import './index.css'

import ReactDOM from 'react-dom'
import React from 'react'

import First from './components/basics/First'
import WithParameter from './components/basics/WithParameters'

ReactDOM.render(
    <div>
        <First/>
        <WithParameter 
            subtitle="Its cool" 
            title="Second Component"/>
    </div>, 
    document.getElementById('root'))