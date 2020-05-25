import React from 'react'

export default props => {
    const randonNumber = parseInt((Math.random() * (props.max - props.min)) + props.min)
    return(
        <div>
            <h2>Random Number</h2>
            <p>Min Value: {props.min}</p>
            <p>Max Value: {props.max}</p>
            <p>Random Number: {randonNumber}</p>
        </div>
    )
}