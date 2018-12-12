import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
//import { Link } from 'react-router-dom'

const StyledEditButton = styled.button`
  grid-area: edit;
  border: 1px solid #717275;
  background-color: #fefefe;
  font-weight: bold;
  color: #717275;
  border-radius: 5px;

  &.song-in-progress {
    color: black;
    border: 1px solid black;
  }
`

export default class EditButton extends Component {
  static propTypes = {
    onClick: PropTypes.func,
    inProgress: PropTypes.bool.isRequired
  }

  render() {
    const { inProgress, onEdit } = this.props

    return (
      <StyledEditButton
        data-cy="EditButton"
        className={inProgress ? 'song-in-progress' : null}
        onClick={inProgress ? event => onEdit(event.target) : null}
      >
        {'Edit song'}
      </StyledEditButton>
    )
  }
}
