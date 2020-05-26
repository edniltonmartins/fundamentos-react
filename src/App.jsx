import "./App.css";
import React from 'react';

import First from './components/basics/First';
import WithParameter from './components/basics/WithParameters';
import Fragment from './components/basics/Fragment';
import RandomNumber from './components/basics/RandomNumber';
import Card from './components/layout/Card';

export default _ =>
        <div className="App">
            <h1>React fundamental</h1>
            <div className="Cards">
                <Card title="Challenger Random" color="orange" borderColor="pink">
                    <RandomNumber min={1} max={60}/>
                </Card>
                
                <Card title="Fragment">
                    <Fragment/>
                </Card>
                
                <Card title="With Parameter">
                    <WithParameter 
                    student="Pedro"
                    grade="9.3" 
                    title="Student's Situation"/>
                    <WithParameter 
                    student="Maria"
                    grade={9.3} 
                    title="Student's Situation"/>
                </Card>
                
                <Card title="First Component">
                    <First/>
                </Card>
            </div>
        </div>
