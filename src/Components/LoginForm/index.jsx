import React, { Component } from "react";
import * as yup from "yup";

import Button from "../Button";

import "./style.css";
export default class LoginForm extends Component {
  schema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup
      .string()
      .required(),
  });

  handelSubmit = (e) => {
    e.preventDefault();
    this.schema
      .validate({
        email: this.props.email,
        password: this.props.password,
      })
      .then(() => {
        console.log("valid");
      })
      .catch((e) => {
        console.log(e.errors);
      });
  };
  render() {
    return (
      <form className="logIn" onSubmit={this.handelSubmit}>
        <label htmlFor="userName">Your email</label>
        <input
          type="email"
          id="email"
          placeholder="Write your email"
          value={this.props.email}
          onChange={this.props.handelChange}
        />
        <label htmlFor="password">Enter your password</label>
        <input
          type="password"
          id="password"
          placeholder="•••••••••"
          value={this.props.password}
          onChange={this.props.handelChange}
        />
        <Button text="Login" />
      </form>
    );
  }
}
