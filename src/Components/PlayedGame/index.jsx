import React, { Component } from 'react'
import './style.css'
export default class PlayedGame extends Component {
  render() {
    return (
      <div className='LPgame'>
        <img src={this.props.src} alt="game " />
        <p>{this.props.text}</p>
      </div>
    )
  }
}
