import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
// import PropTypes from 'prop-types'
import { render } from 'react-dom'
import {
  SortableContainer,
  SortableElement,
  arrayMove
} from 'react-sortable-hoc'

import Header from '../Header'
import SongCard from '../SongCard'
import SongDetails from '../SongDetails.js'
// import NewSongButton from '../ui/NewSongButton'

const Wrapper = styled.section`
  display: grid;
  grid-template-rows: 48px auto 48px;
  height: 90vh;
`
const SongsContainer = styled.main`
  overflow-y: scroll;
`
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
const NewSongLinkWrapper = styled.div`
  display: flex;

  a:any-link {
    display: flex;
    justify-content: center;
    align-items: center;

    text-decoration: none;
    color: whitesmoke;
    width: 100%;
    background: #000000bb;
    margin: 10px;
    font-size: 14px;
    font-weight: bold;
    border: 2px solid white;
    border-radius: 5px;
  }
`

const SortableItem = SortableElement(({ value }) => <li>{value}</li>)

const SortableList = SortableContainer(({ songs }) => {
  return (
    <ol>
      {songs.map((value, index) => (
        <SortableItem key={`item-${index}`} index={index} value={value} />
      ))}
    </ol>
  )
})

export default class SetlistSortable extends Component {
  state = {
    songs: ['Song 1', 'Song 2', 'Song 3']
    // this.props.allSongs
    // ['Song 1', 'Song 2', 'Song 3']
  }

  onSortEnd = ({ oldIndex, newIndex }) => {
    this.setState({
      songs: arrayMove(this.state.songs, oldIndex, newIndex)
    })
  }
  render() {
    console.log(this.state)
    return (
      <SortableList
        songs={this.state.songs}
        onSortEnd={this.onSortEnd}
        lockAxis="y"
      />
    )
  }
}

// export default class SetList extends Component {
//   render() {
//     const gigday = new Date().toLocaleDateString('de-DE')
//     return (
//       <Wrapper data-cy="Setlist">
//         <Header title={`Setlist for ${gigday}`} />
//         <SongsContainer>{this.renderSongs()}</SongsContainer>
//         <NewSongLinkWrapper>
//           <Link onClick={this.props.onDeleteSetlist} to="/repertoire">
//             {'Delete setlist'}
//           </Link>
//         </NewSongLinkWrapper>

//       </Wrapper>
//     )
//   }

//   renderSongs() {
//     return this.props.allSongs.map(this.renderSingleSong)
//   }

//   renderSingleSong = song => {
//     return (
//       <SingleSongWrapper data-cy="SingleSong" key={song.id}>
//         <SongCard
//           name={song.name}
//           tempo={song.tempo}
//           inProgress={song.inProgress}
//           onToggle={() => this.props.onToggleSongDetails(song.id)}
//           selectedForSetlist={song.selectedForSetlist}
//           showSongDetails={song.showSongDetails}
//         />
//         <SongDetails
//           musicKey={song.key}
//           timeSignature={song.timeSignature}
//           duration={song.duration}
//           date={song.date}
//           url={song.url}
//           inProgress={song.inProgress}
//           selectedForSetlist={song.selectedForSetlist}
//           onToggle={() => this.props.onToggleSongProgress(song.id)}
//           onToggleForSetlist={() =>
//             this.props.onToggleSelectedForSetlist(song.id)
//           }
//           onDelete={() => this.props.onDeleteSong(song.id)}
//           onEdit={() => this.props.onEditSong(song.id)}
//           showSongDetails={song.showSongDetails}
//         />
//       </SingleSongWrapper>
//     )
//   }
// }
