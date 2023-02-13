import React, { Component } from "react";

import "./style.css";

export default class MyButton extends Component {
  render() {
    return <button className="submit">{this.props.text}</button>;
  }
}
