import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const StyledToggleButton = styled.button`
  margin-left: auto;
  background-color: #fefefe;
  color: black;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  padding: 2px 5px;
  font-weight: bold;

  .visible {
    &:hover {
      color: red;
    }
  }
`

export default class ToggleButton extends Component {
  static propTypes = {
    // onButtonClick: PropTypes.func.isRequired
  }

  render() {
    return <StyledToggleButton className="visible">{'^'}</StyledToggleButton>
  }
}

// toggleSongCardDetails = () => {
//     this.setState({
//       showSongCardDetails: !this.state.showSongCardDetails
//     })
//   }

/* onClick={this.props.onToggle} */
