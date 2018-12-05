import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const StyledToggleButton = styled.div`
  margin-left: auto;
  background-color: #fefefe;
  color: black;
  width: 18px;
  height: 18px;
  border: 1px solid black;
  border-radius: 50%;
  padding: 2px 5px;
  font-weight: bold;
  align-items: center;
  display: flex;
  /* grid-row-start: span 2; */
  justify-content: center;
`

export default class ToggleButton extends Component {
  static propTypes = {
    onToggle: PropTypes.func.isRequired,
    showSongDetails: PropTypes.bool.isRequired
  }

  render() {
    return (
      <StyledToggleButton
        data-cy="ToggleButton"
        onClick={event => this.props.onToggle(event.target)}
      >
        {this.props.showSongDetails ? '-' : '+'}
      </StyledToggleButton>
    )
  }
}

// toggleSongCardDetails = () => {
//     this.setState({
//       showSongCardDetails: !this.state.showSongCardDetails
//     })
//   }

// <img src="images/arrow-down.png" alt="arrow-down" className={this.state.showDetails ? 'upside-down' : null} />
