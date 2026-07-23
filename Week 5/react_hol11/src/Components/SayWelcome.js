import React from "react";

function SayWelcome() {

    function welcome(message) {
        alert(message);
    }

    return (

        <div>

            <button
                onClick={() => welcome("Welcome")}
            >
                Say Welcome
            </button>

        </div>

    );

}

export default SayWelcome;