import React, { Component } from "react";

class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      password: "",
      errors: {
        name: "",
        email: "",
        password: ""
      }
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    let errors = this.state.errors;

    switch (name) {
      case "name":
        errors.name =
          value.length < 5 ? "Name must be at least 5 characters" : "";
        break;

      case "email":
        errors.email = /^\S+@\S+\.\S+$/.test(value)
          ? ""
          : "Invalid Email";
        break;

      case "password":
        errors.password =
          value.length < 8 ? "Password must be at least 8 characters" : "";
        break;

      default:
        break;
    }

    this.setState({
      errors,
      [name]: value
    });
  };

  validateForm = () => {
    const { errors } = this.state;

    return (
      errors.name === "" &&
      errors.email === "" &&
      errors.password === "" &&
      this.state.name &&
      this.state.email &&
      this.state.password
    );
  };

  handleSubmit = (event) => {
    event.preventDefault();

    if (this.validateForm()) {
      alert("Valid Form");
    } else {
      alert("Please correct the errors.");
    }
  };

  render() {
    return (
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h2>User Registration</h2>

        <form onSubmit={this.handleSubmit}>

          <div>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={this.state.name}
              onChange={this.handleChange}
            />
            <br />
            <span style={{ color: "red" }}>
              {this.state.errors.name}
            </span>
          </div>

          <br />

          <div>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={this.state.email}
              onChange={this.handleChange}
            />
            <br />
            <span style={{ color: "red" }}>
              {this.state.errors.email}
            </span>
          </div>

          <br />

          <div>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={this.state.password}
              onChange={this.handleChange}
            />
            <br />
            <span style={{ color: "red" }}>
              {this.state.errors.password}
            </span>
          </div>

          <br />

          <button type="submit">
            Register
          </button>

        </form>
      </div>
    );
  }
}

export default Register;