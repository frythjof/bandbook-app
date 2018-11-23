import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const StyledTextarea = styled.textarea`
  box-shadow: inset 2px 4px 4px #ddd;
  background: #fefefe;
  border: 0;
  border-radius: 5px;
  margin: 5px;
  padding: 6px;
  width: 100%;
  cursor: default;
`

export default class TextArea extends Component {
  static propTypes = {
    tempText: PropTypes.func.isRequired,
    placeholder: PropTypes.string,
    defaultValue: PropTypes.string
  }

  static defaultProps = {
    placeholder: 'Add your message here'
  }

  handleChange(event) {
    const textArea = event.target
    this.props.tempText(textArea.value)
    // textArea.value = ''
    // textArea.focus()
  }
  render() {
    return (
      <StyledTextarea
        placeholder={this.props.placeholder}
        onChange={event => this.handleChange(event)}
        value={this.props.defaultValue}
      />
    )
  }
}
