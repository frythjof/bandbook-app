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
    //iconName: PropTypes.oneOf(['up', 'down','left', 'right']),
    onPost: PropTypes.func.isRequired,
    text: PropTypes.string
  }

  static defaultProps = {
    text: 'Add message'
  }

  render() {
    return (
      <StyledButton onClick={event => this.props.onPost(event.target)}>
        {this.props.text}
      </StyledButton>
    )
  }
}
