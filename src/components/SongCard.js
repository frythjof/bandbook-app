import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import ToggleButton from './ui/ToggleButton'
import BpmButton from './ui/BpmButton'
import SelectedForSetlistButton from './ui/SelectedForSetlistButton'

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: 9fr 5fr 1fr 1fr;
  align-items: center;
  background: ${props => props.background || 'transparent'};
`

const SongName = styled.section`
  white-space: nowrap;
  margin: 0 5px;
  font-weight: bold;
  overflow: hidden;
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
    selectedForSetlist: PropTypes.bool.isRequired,
    showSongDetails: PropTypes.bool.isRequired
  }

  static defaultProps = {
    name: 'Song XY'
  }

  render() {
    const {
      inProgress,
      name,
      tempo,
      onToggle,
      selectedForSetlist,
      showSongDetails
    } = this.props
    return (
      <Wrapper data-cy="SongCard">
        <SongName
          data-cy="SongName"
          className={inProgress ? 'song-in-progress' : null}
        >
          {name}
        </SongName>
        <BpmButton tempo={tempo} />
        <SelectedForSetlistButton
          onToggle={onToggle}
          selectedForSetlist={selectedForSetlist}
        />
        <ToggleButton
          onToggle={onToggle}
          selectedForSetlist={selectedForSetlist}
          showSongDetails={showSongDetails}
        />
      </Wrapper>
    )
  }
}
