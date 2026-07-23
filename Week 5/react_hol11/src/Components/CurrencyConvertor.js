import React, { useState } from "react";

function CurrencyConvertor() {

    const [rupees, setRupees] = useState("");

    function convert() {
        const euro = (rupees / 90).toFixed(2);
        alert(`${rupees} Rupees = €${euro}`);
    }

    return (
        <div>

            <h2>Currency Converter</h2>

            <input
                type="number"
                placeholder="Enter Rupees"
                value={rupees}
                onChange={(e) => setRupees(e.target.value)}
            />

            <br /><br />

            <button onClick={convert}>
                Convert
            </button>

        </div>
    );
}

export default CurrencyConvertor;