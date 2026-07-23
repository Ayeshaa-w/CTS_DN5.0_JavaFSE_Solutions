import React, { Component } from "react";

class CountPeople extends Component {

  constructor(props) {
    super(props);

    this.state = {
      entrycount: 0,
      exitcount: 0
    };
  }

  handleLogin = () => {
    this.setState({
      entrycount: this.state.entrycount + 1
    });
  };

  handleExit = () => {
    this.setState({
      exitcount: this.state.exitcount + 1
    });
  };

  render() {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          marginTop: "120px"
        }}
      >
        <div>
          <button onClick={this.handleLogin}>Login</button>
          <span> {this.state.entrycount} People Entered!!!</span>
          
        </div>

        <div>
          <button onClick={this.handleExit}>Exit</button>
          <span> {this.state.exitcount} People Left!!!</span>
        </div>
      </div>
    );
  }
}

export default CountPeople;