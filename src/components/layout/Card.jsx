import "./Card.css";
import React from "react";

export default (props)=>{
    const cardStyle = {
        backgroundColor: props.color || '#F10',
        borderColor: props.borderColor || '#F10'
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