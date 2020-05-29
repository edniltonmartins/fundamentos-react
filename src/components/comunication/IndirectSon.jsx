import React from "react";

export default props => {
    return(
        <div>
            Son
            <button onClick={
                function (e){
                    props.speakWithFather("Joan", "23:01:54")}
                }
            >
            Pass Data
            </button>
        </div>
    )
}