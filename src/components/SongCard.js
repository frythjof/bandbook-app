import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import ToggleButton from './ToggleButton'
import BpmButton from './BpmButton'

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: 4fr 3fr 1fr;
  align-items: center;
  background: ${props => props.background || 'transparent'};
`

const SongName = styled.section`
  white-space: nowrap;
  margin: 0 5px;
  &.song-in-progress {
    color: red;
  }
`

export default class SongCard extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    tempo: PropTypes.number.isRequired,
    inProgress: PropTypes.bool.isRequired,
    onToggle: PropTypes.func.isRequired,
    showSongDetails: PropTypes.bool.isRequired
  }

  static defaultProps = {
    name: 'Song XY'
  }

  render() {
    const { inProgress, name, tempo, onToggle, showSongDetails } = this.props
    return (
      <Wrapper data-cy="SongCard">
        <SongName className={inProgress ? 'song-in-progress' : null}>
          {name}
        </SongName>
        <BpmButton tempo={tempo} />
        <ToggleButton onToggle={onToggle} showSongDetails={showSongDetails} />
      </Wrapper>
    )
  }
}
