import React from "react";
import "./PairOdd.css";

export default (props) => {
    return(
        <div className="PairOdd">
            {props.number %2 ===0 
                ? <span className="Pair">Pair</span> 
                : <span className="Odd">Odd</span>
            }
        
        </div>
    )
}