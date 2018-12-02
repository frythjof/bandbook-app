import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const TextWrapper = styled.div`
  display: block;
  text-align: left;
  margin: 10px;
  padding: 10px;
  border: 2px solid #717275;
`

export default class SongList extends Component {
  static propTypes = {
    text: PropTypes.string
  }

  static defaultProps = {
    text: 'Song 1'
  }

  render() {
    const { text } = this.props

    return <TextWrapper>{text}</TextWrapper>
  }
}
