import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

// import PropTypes from 'prop-types'
import uid from 'uid'
import defaultSongs from '../../data/default-songs.json'
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

  .link {
    justify-content: flex-end;
    align-items: center;
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
  state = {
    songs: this.createSongsArray()
  }

  createSongsArray() {
    return this.load()
      .map(item => ({
        ...item,
        id: uid()
      }))
      .sort((a, b) => (a.name < b.name ? -1 : 1))
  }

  render() {
    this.save()
    console.table(this.state)
    return (
      <Wrapper data-cy="SongList">
        <Header title="Songs" />
        <SongsContainer>{this.renderSongs()}</SongsContainer>
        <NewSongLinkWrapper>
          <Link className="link" exact to="/">
            {'Add new song'}
          </Link>
          <Link className="link" exact to="/">
            {'Create setlist'}
          </Link>
        </NewSongLinkWrapper>
        {/* <StyledLink exact to="/">
          <NewSongButton text={'Add new song'} />
        </StyledLink> */}
      </Wrapper>
    )
  }

  renderSongs() {
    return this.state.songs.map(this.renderSingleSong)
  }

  renderSingleSong = song => {
    return (
      <SingleSongWrapper data-cy="SingleSong">
        <SongCard
          key={song.id}
          name={song.name}
          tempo={song.tempo}
          inProgress={song.inProgress}
          onToggle={() => this.toggleSongDetails(song.id)}
          showSongDetails={song.showSongDetails}
        />
        <SongDetails
          musicKey={song.key}
          timeSignature={song.timeSignature}
          duration={song.duration}
          date={song.date}
          url={song.url}
          inProgress={song.inProgress}
          onToggle={() => this.toggleSongProgress(song.id)}
          showSongDetails={song.showSongDetails}
        />
      </SingleSongWrapper>
    )
  }

  toggleSongDetails = id => {
    const { songs } = this.state
    const index = songs.findIndex(s => s.id === id)
    const newSongs = [
      ...songs.slice(0, index),
      { ...songs[index], showSongDetails: !songs[index].showSongDetails },
      ...songs.slice(index + 1)
    ]

    this.setState({
      songs: newSongs
    })
  }

  toggleSongProgress = id => {
    const { songs } = this.state
    const index = songs.findIndex(s => s.id === id)
    const newSongs = [
      ...songs.slice(0, index),
      { ...songs[index], inProgress: !songs[index].inProgress },
      ...songs.slice(index + 1)
    ]

    this.setState({
      songs: newSongs
    })
  }

  save() {
    localStorage.setItem(
      'bandbook-app--songs',
      JSON.stringify(this.state.songs)
    )
  }

  load() {
    try {
      return (
        JSON.parse(localStorage.getItem('bandbook-app--songs')) || defaultSongs
      )
    } catch (err) {
      return defaultSongs
    }
  }
}
