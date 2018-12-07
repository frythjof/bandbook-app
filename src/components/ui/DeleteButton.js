import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const StyledDeleteButton = styled.button`
  grid-area: delete;
  border: 1px solid #717275;
  background-color: #fefefe;
  font-weight: bold;
  color: #717275;
  border-radius: 5px;

  &.song-in-progress {
    color: red;
    border: 1px solid red;
  }
`

export default class DeleteButton extends Component {
  static propTypes = {
    onToggle: PropTypes.func.isRequired,
    inProgress: PropTypes.bool.isRequired
  }

  render() {
    const { inProgress, onDelete } = this.props

    return (
      <StyledDeleteButton
        data-cy="DeleteButton"
        className={inProgress ? 'song-in-progress' : null}
        onClick={inProgress ? event => onDelete(event.target) : null}
      >
        {'Delete song'}
      </StyledDeleteButton>
    )
  }
}
