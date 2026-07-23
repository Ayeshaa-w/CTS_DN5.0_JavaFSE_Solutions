import React, { Component } from "react";

class GetUser extends Component {

  constructor(props) {
    super(props);

    this.state = {
      user: null
    };
  }

  componentDidMount() {

    fetch("https://randomuser.me/api/")

      .then((response) => response.json())

      .then((data) => {

        this.setState({
          user: data.results[0]
        });

      });

  }

  render() {

    const { user } = this.state;

    if (!user) {
      return <h2>Loading...</h2>;
    }

    return (

      <div style={{ textAlign: "center", marginTop: "40px" }}>

        <h2>User Details</h2>

        <img
          src={user.picture.large}
          alt="Profile"
          style={{ borderRadius: "50%" }}
        />

        <h3>
          {user.name.title} {user.name.first}
        </h3>

      </div>

    );

  }

}

export default GetUser;