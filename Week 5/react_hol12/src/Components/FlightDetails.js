import React from "react";

function FlightDetails() {
    return (
        <div>

            <h2>Flight Details</h2>

            <table border="1" cellPadding="10">

                <tr>
                    <th>Flight</th>
                    <th>From</th>
                    <th>To</th>
                </tr>

                <tr>
                    <td>AI101</td>
                    <td>Chennai</td>
                    <td>Delhi</td>
                </tr>

                <tr>
                    <td>AI202</td>
                    <td>Bangalore</td>
                    <td>Mumbai</td>
                </tr>

            </table>

        </div>
    );
}

export default FlightDetails;