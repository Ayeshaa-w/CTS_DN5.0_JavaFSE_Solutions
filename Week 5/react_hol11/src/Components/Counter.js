import React, { Component } from "react";

class Counter extends Component {

    constructor() {
        super();

        this.state = {
            count: 0
        };
    }

    increment = () => {
        this.setState({
            count: this.state.count + 1
        });

        alert("Hello! Member1");
    };

    decrement = () => {
        this.setState({
            count: this.state.count - 1
        });
    };

    render() {

        return (

            <div>

                <h2>Counter : {this.state.count}</h2>

                <button onClick={this.increment}>
                    Increment
                </button>

                <button
                    onClick={this.decrement}
                    style={{ marginLeft: "10px" }}
                >
                    Decrement
                </button>

            </div>

        );

    }

}

export default Counter;