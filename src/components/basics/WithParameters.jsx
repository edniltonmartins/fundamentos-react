import React from 'react'

export default props  => {
    console.log(props);
    const situation = props.grade >= 7 ? 'Okay' : 'Disapproved'
    return (
        <div>
            <h2>{props.title}</h2>
            <h3>{props.student} have a grade equal {props.grade} is { situation }</h3>
        </div>
    )
}