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
`

export default class TextArea extends Component {
  textArea = React.createRef()

  static propTypes = {
    updateTempTextValue: PropTypes.func.isRequired,
    placeholder: PropTypes.string,
    defaultValue: PropTypes.string
  }

  static defaultProps = {
    placeholder: 'Add your message here ...'
  }

  componentDidMount = () => {
    this.textArea.current.focus()
  }

  componentDidUpdate = () => {
    this.textArea.current.focus()
  }

  handleChange(event) {
    const textArea = event.target
    this.props.updateTempTextValue(textArea.value)
  }
  render() {
    return (
      <StyledTextarea
        autoFocus
        ref={this.textArea}
        placeholder={this.props.placeholder}
        onChange={event => this.handleChange(event)}
        value={this.props.defaultValue}
      />
    )
  }
}
