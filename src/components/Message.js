import React, { Component } from 'react'

export default class Message extends Component {
  render() {
    return <section>{this.props.text}</section>
  }
}
