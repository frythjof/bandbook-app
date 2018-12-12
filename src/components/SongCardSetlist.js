import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
// import DeleteFromSetlistButton from './ui/DeleteFromSetlistButton'
import BpmButton from './ui/BpmButton'

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: 9fr 4fr;
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

export default class SongCardSetlist extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    tempo: PropTypes.number.isRequired,
    inProgress: PropTypes.bool.isRequired
    //onToggleForSetlist: PropTypes.func.isRequired
  }

  static defaultProps = {
    name: 'Song XY'
  }

  render() {
    const { inProgress, name, tempo } = this.props
    return (
      <Wrapper data-cy="SongCard">
        <SongName
          data-cy="SongName"
          className={inProgress ? 'song-in-progress' : null}
        >
          {name}
        </SongName>
        <BpmButton tempo={tempo} />
        {/* <DeleteFromSetlistButton onToggleForSetlist={onToggleForSetlist} /> */}
      </Wrapper>
    )
  }
}
