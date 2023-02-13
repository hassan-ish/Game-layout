import * as yup from "yup";
import Button from "../MyButton";
import { Navigate } from "react-router-dom";

import "./style.css";
import { Component } from "react";
export default class SignupForm extends Component {
  schema = yup.object().shape({
    email: yup.string().email().required("Please Enter your Email"),
    password: yup
      .string()
      .min(8)
      .matches(
        "^(?=.*[A-Za-z])(?=.*d)(?=.*[@$!%*#?&])[A-Za-zd@$!%*#?&]{8,}$",
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
      )
      .required("Please Enter your password"),
    repassword: yup
      .string()
      .oneOf([yup.ref("password")])
      .required("Passwords must match"),
    ischecked: yup
      .boolean()
      .oneOf([true], "You should agree to terms & conditions")
      .required(),
  });

  handelSubmit = (e) => {
    e.preventDefault();
    this.schema
      .validate(
        {
          email: this.props.email,
          password: this.props.password,
          repassword: this.props.repassword,
          ischecked: this.props.ischecked,
        },
        { abortEarly: false }
      )
      .then(() => {
        console.log("valid");
        Navigate("/home");
      })
      .catch((error) => {
        this.props.handelErrors(error);
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
        <div className="errors">
          {this.props.errors.map((ele, index) => (
            <div key={index}>{ele}</div>
          ))}
        </div>
        <Button text="Register Account" />
      </form>
    );
  }
}
