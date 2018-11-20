import React, { Component } from 'react'

export default class TextArea extends Component {
  render() {
    return <textarea placeholder={this.props.placeholder} />
  }
}
