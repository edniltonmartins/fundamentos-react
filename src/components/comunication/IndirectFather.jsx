import React from "react";
import IndirectSon from "./IndirectSon";

export default props => {
    let timeFromSon = "";
    function giveMeData(son, sonTime){
        console.log("The time of " + son + " is " + sonTime)
        timeFromSon = "The time of " + son + " is " + sonTime;
    }
    return(
        <div>
            <span>{timeFromSon}</span>
            <IndirectSon speakWithFather={giveMeData}/>
        </div>
    )
}