import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const StyledToggleProgressButton = styled.button`
  grid-area: toggle;
  border: 1px solid black;
  background-color: #fefefe;
  font-weight: bold;
  border-radius: 5px;

  &.song-in-progress {
    color: red;
    border: 1px solid red;
  }
`

export default class ToggleProgressButton extends Component {
  static propTypes = {
    onToggle: PropTypes.func.isRequired,
    inProgress: PropTypes.bool.isRequired
  }

  render() {
    const { inProgress, onToggle } = this.props

    return (
      <StyledToggleProgressButton
        data-cy="ToggleProgressButton"
        className={inProgress ? 'song-in-progress' : null}
        onClick={event => onToggle(event.target)}
      >
        {inProgress ? 'Song in progress' : 'Song ready'}
      </StyledToggleProgressButton>
    )
  }
}
