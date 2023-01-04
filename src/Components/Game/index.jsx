import "./style.css";
import React, { Component } from "react";

export default class Game extends Component {
  render() {
    return (
      <div className="game">
        <img src={this.props.src} alt="game"/>
        <div className={this.props.TextSide}>{this.props.text}</div>
      </div>
    );
  }
}
