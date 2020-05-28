import "./App.css";
import React from 'react';

import First from './components/basics/First';
import WithParameter from './components/basics/WithParameters';
import Fragment from './components/basics/Fragment';
import RandomNumber from './components/basics/RandomNumber';
import Card from './components/layout/Card';
import Family from "./components/basics/Family";
import FamilyMember from "./components/basics/FamilyMember";

export default _ =>
        <div className="App">
            <h1>React fundamental</h1>
            <div className="Cards">
                <Card title="Family Component" color="silver">
                    <Family>
                        <FamilyMember namePerson="Ed" lastNamePerson="Martins"/>
                        <FamilyMember namePerson="Adri" lastNamePerson="Pessanha"/>
                        <FamilyMember namePerson="Marcia" lastNamePerson="Martins"/> 
                    </Family>
                </Card>
            
                <Card title="Challenger Random" color="orange">
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
