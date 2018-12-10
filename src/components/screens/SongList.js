import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
// import PropTypes from 'prop-types'

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
    background: transparent;
    margin: 10px;
    font-size: 12px;
    font-weight: bold;
    border: 2px solid white;
    border-radius: 5px;
  }
`

// const StyledNavLink = styled(NavLink)`
//   margin-right: 10px;
//   text-decoration: overline;
//   color: #4460a9;
//   text-decoration-color: #d03d3d;
//   &.active {
//     color: #d03d3d;
//   }
// `

export default class SongList extends Component {
  render() {
    console.table(this.state)
    return (
      <Wrapper data-cy="SongList">
        <Header title="Songs" />
        <SongsContainer>{this.renderSongs()}</SongsContainer>
        <NewSongLinkWrapper>
          <Link to="/songeditor">{'Add new song'}</Link>
          <Link to="/repertoire">{'Create setlist'}</Link>
        </NewSongLinkWrapper>
        {/* <StyledLink exact to="/">
          <NewSongButton text={'Add new song'} />
        </StyledLink> */}
      </Wrapper>
    )
  }

  renderSongs() {
    return this.props.allSongs.map(this.renderSingleSong)
  }

  renderSingleSong = song => {
    return (
      <SingleSongWrapper data-cy="SingleSong">
        <SongCard
          key={song.id}
          name={song.name}
          tempo={song.tempo}
          inProgress={song.inProgress}
          onToggle={() => this.props.onToggleSongDetails(song.id)}
          showSongDetails={song.showSongDetails}
        />
        <SongDetails
          musicKey={song.key}
          timeSignature={song.timeSignature}
          duration={song.duration}
          date={song.date}
          url={song.url}
          inProgress={song.inProgress}
          onToggle={() => this.props.onToggleSongProgress(song.id)}
          onDelete={() => this.props.onDeleteSong(song.id)}
          onEdit={() => this.props.onEditSong(song.id)}
          showSongDetails={song.showSongDetails}
        />
      </SingleSongWrapper>
    )
  }
}
