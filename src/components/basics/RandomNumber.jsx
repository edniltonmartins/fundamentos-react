import React from 'react'

export default (props)=>{
    const randonNumber = parseInt((Math.random() * (props.max - props.min)) + props.min)
    return(
        <div>
            <h2>Random Number</h2>
            <p>{randonNumber}</p>
        </div>
    )
}