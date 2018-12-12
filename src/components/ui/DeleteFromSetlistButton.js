import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const StyledDeleteFromSetlistButton = styled.div`
  margin: auto;
  background-color: #fefefe;
  color: black;
  width: 18px;
  height: 18px;
  border: 1px solid black;
  border-radius: 50%;
  /* padding: 2px 5px; */
  font-weight: bold;
  line-height: 1.1;
  align-items: center;
  display: flex;
  /* grid-row-start: span 2; */
  justify-content: center;
`

export default class DeleteFromSetlistButton extends Component {
  static propTypes = {
    onToggleForSetlist: PropTypes.func.isRequired
  }

  render() {
    const { onToggleForSetlist } = this.props
    return (
      <StyledDeleteFromSetlistButton
        data-cy="DeleteFromSetlistButton"
        onClick={event => onToggleForSetlist(event.target)}
      >
        {'x'}
      </StyledDeleteFromSetlistButton>
    )
  }
}

// toggleSongCardDetails = () => {
//     this.setState({
//       showSongCardDetails: !this.state.showSongCardDetails
//     })
//   }

// <img src="images/arrow-down.png" alt="arrow-down" className={this.state.showDetails ? 'upside-down' : null} />
