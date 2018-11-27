import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const TextWrapper = styled.pre`
  display: block;
  text-align: left;
  margin: 0 10px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  word-break: break-word;
  white-space: normal;
  cursor: default;
`

export default class Message extends Component {
  static propTypes = {
    text: PropTypes.string
  }

  render() {
    const { text } = this.props

    return <TextWrapper data-cy="Message">{text}</TextWrapper>
  }
}
