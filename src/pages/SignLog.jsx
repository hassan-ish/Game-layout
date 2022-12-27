import React, { Component } from "react";
import LogIn from "../Components/LogIn";
import SignUp from "../Components/SignUp";

export default class SignLog extends Component {
  state = {
    page: 'SignUp',
    email: "",
    password: "",
  };
  ReturnToLogIn = () => {
    this.setState({page:'logIn'});
  };
  Register = () => {
    this.setState({page:'SignUp'});
  };
  onChange = (e) => {
    let { value, id } = e.target;
    this.setState({ [id]: value });
  };
  pagee = "";
  render() {
    if (this.state.page === "logIn") {
      this.pagee = <LogIn Register={this.Register} handelChange={this.onChange} {...this.state}/>;
    } else {
      this.pagee = <SignUp LogIn={this.ReturnToLogIn} />;
    }
    return <>{this.pagee}</>;
  }
}
