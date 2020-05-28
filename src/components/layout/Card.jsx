import "./Card.css";
import React from "react";

export default (props)=>{
    const cardStyle = {
        backgroundColor: props.color || 'RED',
        borderColor: props.borderColor || '#FFF'
    }
    return(
        <div className="Card" style={cardStyle}>
            <div className="Card Title">
                {props.title}
            </div>
            <div className="Card Content">
                {props.children}
            </div>
        </div>
    )
}