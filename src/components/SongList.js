import React, { Component } from 'react'
import styled from 'styled-components'
// import PropTypes from 'prop-types'
import uid from 'uid'
import defaultSongs from '../data/default-songs.json'
import Header from './Header'
import SongCard from './SongCard'
import Message from './Message'
import SongDetails from './SongDetails.js'

const Wrapper = styled.section`
  display: grid;
  grid-template-rows: 48px auto 48px;
  height: 90vh;
`
const SongsContainer = styled.main`
  overflow-y: scroll;
  /* padding-inline-start: 0px; */
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
      </Wrapper>
    )
  }

  renderSongs() {
    return this.state.songs.map(this.renderSingleSong)
  }

  renderSingleSong = song => {
    return (
      <SingleSongWrapper>
        <SongCard
          name={song.name}
          tempo={song.tempo}
          inProgress={song.inProgress}
        />
        <SongDetails
          musicKey={song.key}
          timeSignature={song.timeSignature}
          duration={song.duration}
          date={song.date}
          url={song.url}
          inProgress={song.inProgress}
          showSongDetails={song.showSongDetails}
        />
      </SingleSongWrapper>
    )
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
