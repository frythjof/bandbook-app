import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const StyledNewSongButton = styled.button`
  border: 1px solid black;
  background: #fefefe;
  border-radius: 5px;
  margin: 5px;
  padding: 4px;
`

export default class NewSongButton extends Component {
  static propTypes = {
    onButtonClick: PropTypes.func.isRequired,
    text: PropTypes.string
  }

  static defaultProps = {
    text: 'Add new song'
  }

  render() {
    return (
      <StyledNewSongButton data-cy="NavButton">
        <Link to="/repertoire">{this.props.text}</Link>
      </StyledNewSongButton>
    )
  }
}
