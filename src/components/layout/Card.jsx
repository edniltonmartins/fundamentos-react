import "./Card.css";
import React from "react";

export default (props)=>{
    return(
        <div className="Card">
            <div className="Card Title">
                {props.title}
            </div>
            <div className="Card Content">
                {props.children}
            </div>
        </div>
    )
}