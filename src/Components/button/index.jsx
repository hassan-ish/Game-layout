import React, { Component } from 'react'
import './style.css'
export default class Button extends Component {
  render() {
    return (
      <button className='button'>{this.props.text}</button>
    )
  }
}