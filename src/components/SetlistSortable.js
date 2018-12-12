import React, { Component } from 'react'
import styled from 'styled-components'
// import { Link } from 'react-router-dom'
// import PropTypes from 'prop-types'
import {
  SortableContainer,
  SortableElement,
  arrayMove
} from 'react-sortable-hoc'

import SongCardSetlist from './SongCardSetlist'

const SingleSongWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 6px;
  background: #fefefe;
  box-shadow: 2px 4px 4px #ddd;
  border-radius: 5px;
  margin: 10px;
  grid-gap: 5px;
`

const SortableItem = SortableElement(({ song, position }) => (
  <SingleSongWrapper data-cy="SingleSong" key={song.id}>
    <SongCardSetlist
      name={`${position + 1}.) ${song.name}`}
      tempo={song.tempo}
      inProgress={song.inProgress}
      onToggleForSetlist={() => this.props.onToggleForSetlist(song.id)}
    />
  </SingleSongWrapper>
))

const SortableList = SortableContainer(({ songs }) => {
  return (
    <ol>
      {songs.map((song, index) => (
        <SortableItem
          key={song.id}
          index={index}
          position={index}
          song={song}
          disabled={false}
        />
      ))}
    </ol>
  )
})

export default class SetlistSortable extends Component {
  state = {
    songs: this.props.songs // finished ? this.props.songs : this.state.songs
  }

  onSortEnd = ({ oldIndex, newIndex }) => {
    //debugger
    this.setState({
      songs: arrayMove(this.state.songs, oldIndex, newIndex) //songs: arrayMove(this.props.songs, oldIndex, newIndex)
    })
  }
  render() {
    console.log(this.state)
    return (
      <SortableList
        songs={this.state.songs} //this.props.songs
        onSortEnd={this.onSortEnd}
        lockAxis="y"
      />
    )
  }
}
