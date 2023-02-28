import React, { Component } from "react";
import api from "../../utils/api";
api;

export default class Register extends Component {
  constructor() {
    //to give a call to the base class constructor
    super();

    //state: its an object from the base class i.e. Component class to hold the data for our component.
    this.state = {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  }

  onChange = (e) => {
    //we need to collect the data for every change field.
    // we need to update the state accordingly.
    // e: event
    //target: location where the event happened
    //value: whatever the input that we peovided it will give is that data.
    // name : name field value of the input tag.
    //console.log(e.target.value);
    //console.log(e.target.name);

    //set state
    this.setState({ [e.target.name]: e.target.value });
    //end state, data, headers.
    api.post("/users", this.state);
  };
  onSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
  };
  render() {
    //destructuring the state object.
    const { name, email, password, confirmPassword } = this.state;
    return (
      <>
        <section class="container">
          <h1 class="x-large text-primary">Sign Up</h1>
          <p class="lead">
            <i class="fa fa-user-circle-o"></i>Create your Account
          </p>
          <form class="form" onSubmit={this.onSubmit}>
            <div class="form-group">
              <input
                type="text"
                placeholder="Enter the Name"
                name="name"
                required
                value={name}
                onChange={this.onChange}
              />
            </div>
            <div class="form-group">
              <input
                type="email"
                placeholder="enter your email"
                name="email"
                value={email}
                onChange={this.onChange}
              />
              <small>
                This site uses Gravatar so if you want a profile image, use a
                Gravatar email
              </small>
            </div>
            <div class="form-group">
              <input
                type="password"
                placeholder="Password"
                name="password"
                value={password}
                onChange={this.onChange}
              />
            </div>
            <div class="form-group">
              <input
                type="password"
                placeholder="Confirm Password"
                name="confirmPassword"
                value={confirmPassword}
                onChange={this.onChange}
              />
            </div>
            <div class="form-group">
              <input type="submit" class="btn btn-primary" value="Register" />
            </div>
          </form>
        </section>
      </>
    );
  }
}
