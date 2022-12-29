import React, { Component } from "react";
import Logo from "../Components/Logo";
import Paragraph from "../Components/Paragraph";
import Or from "../Components/Or";

import SignupForm from "../Components/SignupForm";
import { Link } from "react-router-dom";

export default class SignUp extends Component {
  state = {
    page: "logIn",
    email: "",
    password: "",
    repassword: "",
    ischecked: false,
  };
  onChange = (e) => {
    let { value, id } = e.target;
    this.setState({ [id]: value });
  };
  onCheackBoXChange = () => {
    this.setState((prevState) => ({
      ischecked: !prevState.ischecked,
    }));
  };
  render() {
    return (
      <div className="signUp">
        <section>
          <Logo />
          <Paragraph />
          <div className="Name">
            <div>Hideo Kojima</div>
            <svg
              width="34"
              height="33"
              viewBox="0 0 34 33"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M21 0H33.5V33H0V20.5H21V0Z" fill="white" />
            </svg>
          </div>
        </section>
        <section>
          <div className="back">
            <Link to={"/"}>
              <svg
                width="10"
                height="18"
                viewBox="0 0 10 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.86245 2.225L8.37912 0.75L0.137451 9L8.38745 17.25L9.86245 15.775L3.08745 9L9.86245 2.225Z"
                  fill="#8692A6"
                />
              </svg>
              back
            </Link>
          </div>
          <div className="main">
            <h1>Register Individual Account!</h1>
            <p>
              For the purpose of gamers regulation, your details are required.
            </p>
            {/* start form */}
            <SignupForm
              handelChange={this.onChange}
              handelCheckbox={this.onCheackBoXChange}
              {...this.state}
            />
            <Or />
            <button className="google">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21.8055 10.0415H21V10H12V14H17.6515C16.827 16.3285 14.6115 18 12 18C8.6865 18 6 15.3135 6 12C6 8.6865 8.6865 6 12 6C13.5295 6 14.921 6.577 15.9805 7.5195L18.809 4.691C17.023 3.0265 14.634 2 12 2C6.4775 2 2 6.4775 2 12C2 17.5225 6.4775 22 12 22C17.5225 22 22 17.5225 22 12C22 11.3295 21.931 10.675 21.8055 10.0415Z"
                  fill="#FFC107"
                />
                <path
                  d="M3.15308 7.3455L6.43858 9.755C7.32758 7.554 9.48058 6 12.0001 6C13.5296 6 14.9211 6.577 15.9806 7.5195L18.8091 4.691C17.0231 3.0265 14.6341 2 12.0001 2C8.15908 2 4.82808 4.1685 3.15308 7.3455Z"
                  fill="#FF3D00"
                />
                <path
                  d="M11.9999 22C14.5829 22 16.9299 21.0115 18.7044 19.404L15.6094 16.785C14.5717 17.5742 13.3036 18.0011 11.9999 18C9.39891 18 7.19041 16.3415 6.35841 14.027L3.09741 16.5395C4.75241 19.778 8.11341 22 11.9999 22Z"
                  fill="#4CAF50"
                />
                <path
                  d="M21.8055 10.0415H21V10H12V14H17.6515C17.2571 15.1082 16.5467 16.0766 15.608 16.7855L15.6095 16.7845L18.7045 19.4035C18.4855 19.6025 22 17 22 12C22 11.3295 21.931 10.675 21.8055 10.0415Z"
                  fill="#1976D2"
                />
              </svg>
              login
              <span></span>
            </button>
          </div>
        </section>
      </div>
    );
  }
}
