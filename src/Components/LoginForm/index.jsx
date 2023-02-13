import { Component } from "react";
import { Navigate } from "react-router-dom";
import * as yup from "yup";

import Button from "../MyButton";

import "./style.css";
export default class ComponentLoginForm extends Component {
  schema = yup.object().shape({
    email: yup.string().email().required("Please Enter your Email"),
    password: yup.string().required("Please Enter your password"),
  });

  handelSubmit = (e) => {
    e.preventDefault();
    this.schema
      .validate({
        email: this.props.email,
        password: this.props.password,
      })
      .then(() => {
        Navigate("/home");
      })
      .catch((error) => {
        this.props.handelErrors(error);
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
        <div className="errors">{this.props.errors}</div>
        <Button text="Login" />
      </form>
    );
  }
}
