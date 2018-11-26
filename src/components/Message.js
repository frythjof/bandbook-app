import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const TextWrapper = styled.span`
  display: block;
  text-align: left;
  margin: 0 10px;
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
