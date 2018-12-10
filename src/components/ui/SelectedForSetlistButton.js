import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const StyledSelectedForSetlistButton = styled.div`
  margin: auto;
  background-color: #fefefe;
  color: #fefefe;
  width: 18px;
  height: 18px;
  border: 1px solid #fefefe;
  border-radius: 50%;
  /* padding: 2px 5px; */
  font-weight: bold;
  line-height: 1.1;
  align-items: center;
  display: flex;
  /* grid-row-start: span 2; */
  justify-content: center;
  &.song-selected-for-setlist {
    color: lightgreen;
    background-color: lightgreen;
    border: 1px solid lightgreen;
  }
`

export default class SelectedForSetlistButton extends Component {
  static propTypes = {
    onToggle: PropTypes.func.isRequired,
    selectedForSetlist: PropTypes.bool.isRequired,
    showSongDetails: PropTypes.bool.isRequired
  }

  render() {
    const { onToggle, selectedForSetlist } = this.props
    return (
      <StyledSelectedForSetlistButton
        data-cy="ToggleButton"
        className={selectedForSetlist ? 'song-selected-for-setlist' : null}
        onClick={event => onToggle(event.target)}
      >
        {this.props.showSongDetails ? '-' : '+'}
      </StyledSelectedForSetlistButton>
    )
  }
}

// toggleSongCardDetails = () => {
//     this.setState({
//       showSongCardDetails: !this.state.showSongCardDetails
//     })
//   }

// <img src="images/arrow-down.png" alt="arrow-down" className={this.state.showDetails ? 'upside-down' : null} />
