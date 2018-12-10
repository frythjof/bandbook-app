import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const StyledToggleSelectForSetlistButton = styled.button`
  grid-area: select;
  border: 1px solid black;
  background-color: #fefefe;
  font-weight: bold;
  border-radius: 5px;

  &.song-in-progress {
    color: #717275;
    border: 1px solid #717275;
  }
  &.song-selected-for-setlist {
    background-color: lightgreen;
  }
`

export default class ToggleSelectForSetlistButton extends Component {
  static propTypes = {
    onToggleForSetlist: PropTypes.func.isRequired,
    inProgress: PropTypes.bool.isRequired
  }

  render() {
    const { inProgress, onToggleForSetlist, selectedForSetlist } = this.props

    return (
      <StyledToggleSelectForSetlistButton
        data-cy="ToggleProgressButton"
        className={
          inProgress
            ? 'song-in-progress'
            : selectedForSetlist
            ? 'song-selected-for-setlist'
            : null
        }
        onClick={inProgress ? null : event => onToggleForSetlist(event.target)}
      >
        {selectedForSetlist ? 'Song in setlist' : 'Select for setlist'}
      </StyledToggleSelectForSetlistButton>
    )
  }
}
