import React, { Component } from 'react'
import * as yup from "yup";
import Button from '../Button'
import './style.css'
export default class SignupForm extends Component {
  schema = yup.object().shape({
    email: yup.string().email().min(6).max(16).required(),
    password: yup.string().min(8).matches(/[a-z]|[A-Z]|[0-9]/ , 'password must have LowarCase,UpperCase and Number').required(),
    repassword: yup
      .string()
      .oneOf([yup.ref("password")], null)
      .required(),
      ischecked: yup.boolean().oneOf([true],'must be checked').required(),
  });

  handelSubmit = (e) => {
    e.preventDefault();
    this.schema
      .validate({
        email: this.props.email,
        password: this.props.password,
        repassword: this.props.repassword,
        ischecked: this.props.ischecked,
      },{abortEarly: false})
      .then(() => {
        console.log("valid");
      })
      .catch((e) => {
        console.log(e.errors);
      });
  };
  render() {
    return (
      <form onSubmit={this.handelSubmit}>
      <label htmlFor="email">Email address*</label>
      <input
        type="email"
        id="email"
        onChange={this.props.handelChange}
        value={this.props.email}
      />
      <label htmlFor="password">Create password*</label>
      <input
        type="password"
        id="password"
        onChange={this.props.handelChange}
        value={this.props.password}
      />
      <label htmlFor="">Repeat password*</label>
      <input
        type="password"
        id="repassword"
        onChange={this.props.handelChange}
        value={this.props.repassword}
      />
      <label htmlFor="checkbox">
        <input
          type="checkbox"
          name="checkbox"
          id="checkbox"
          onChange={this.props.handelCheckbox}
          checked={this.props.ischecked}
        />
        I agree to terms & conditions
      </label>
      <Button text="Register Account" />
    </form>
    )
  }
}
