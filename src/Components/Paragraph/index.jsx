import React, { Component } from "react";
import "./style.css";
export default class Paragraph extends Component {
  render() {
    return (
      <div>
        <div className="mark">“</div>
        <p className="paragraph">
          I always observe the people who pass by when I ride an escalator. I'll
          never see most of them again, so I imagine a lot of things about their
          lives... about the day ahead of them.
        </p>
      </div>
    );
  }
}
