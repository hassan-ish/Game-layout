import React, { Component } from "react";
import aco from "../../assets/mrt.png";
import trophy from "../../assets/trophy.png";
import "./style.css";
export default class Trophy extends Component {
  render() {
    return (
      <div className="Trophy">
        <img src={aco} alt="game" />
        <img src={trophy} alt="trophy" />
        <div></div>
        <p>
          assassin's creed odyssey <span>last played: 34 hours ago</span>
        </p>
      </div>
    );
  }
}
