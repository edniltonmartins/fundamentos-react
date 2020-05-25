import './index.css'

import ReactDOM from 'react-dom'
import React from 'react'

import First from './components/basics/First'
import WithParameter from './components/basics/WithParameters'
import Fragment from './components/basics/Fragment'
import RandomNumber from './components/basics/RandomNumber'

ReactDOM.render(
    <div>
        <RandomNumber min={10} max={100}/>
        <Fragment/>
        <WithParameter 
            student="Pedro"
            grade="9.3" 
            title="Student's Situation"/>
        <WithParameter 
            student="Maria"
            grade={9.3} 
            title="Student's Situation"/>
        <First/>
    </div>, 
    document.getElementById('root')
)