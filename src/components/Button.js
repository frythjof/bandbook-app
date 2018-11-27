import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const StyledButton = styled.button`
  border: 1px solid black;
  background: #fefefe;
  border-radius: 5px;
  margin: 5px;
  padding: 4px;
`

export default class Button extends Component {
  static propTypes = {
    onButtonClick: PropTypes.func.isRequired,
    text: PropTypes.string
  }

  static defaultProps = {
    text: 'Add message'
  }

  render() {
    return (
      <StyledButton
        data-cy="PostButton"
        onClick={event => this.props.onButtonClick(event.target)}
      >
        {this.props.text}
      </StyledButton>
    )
  }
}
