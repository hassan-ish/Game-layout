import React, { Component } from "react";
import Logo from "../Logo";
import Paragraph from "../Paragraph";
import "./style.css";
export default class index extends Component {
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
          <div className="back" onClick={this.props.LogIn}>
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
          </div>
          <div className="main">
            <h1>Register Individual Account!</h1>
            <p>
              For the purpose of gamers regulation, your details are required.
            </p>
            <form>
              <label htmlFor="email">Email address*</label>
              <input type="email" id="email" />
              <label htmlFor="password">Create password*</label>
              <input type="password" id='password'/>
              <label htmlFor="">Repeat password*</label>
              <input type="password" id="Rpassword"/>
              <input type="checkbox" name="checkbox" id="checkbox" />
              <label htmlFor="checkbox">I agree to terms & conditions</label>
            </form>
          </div>

        </section>
      </div>
    );
  }
}
