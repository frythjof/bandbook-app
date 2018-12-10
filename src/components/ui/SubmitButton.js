import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const StyledSubmitButton = styled.button`
  color: whitesmoke;
  font-weight: bold;
  background: #000000bb;
  border: 2px solid white;
  border-radius: 5px;
  margin: 5px;
  padding: 4px;
`

export default class SubmitButton extends Component {
  static propTypes = {
    onButtonClick: PropTypes.func.isRequired,
    text: PropTypes.string
  }

  static defaultProps = {
    text: 'Add message'
  }

  render() {
    return (
      <StyledSubmitButton
        data-cy="PostButton"
        onClick={event => this.props.onButtonClick(event.target)}
      >
        {this.props.text}
      </StyledSubmitButton>
    )
  }
}
