import React from "react";

function SyntheticEvent() {

    function handleClick(event) {

        alert("I was clicked");

        console.log(event);

    }

    return (

        <div>

            <button onClick={handleClick}>
                Click on Me
            </button>

        </div>

    );

}

export default SyntheticEvent;