import React, { Component } from 'react'
import styled from 'styled-components'
// import PropTypes from 'prop-types'
import uid from 'uid'
import defaultSongs from '../data/default-songs.json'
import Header from './Header'
import SongCard from './SongCard'
import Message from './Message'

const Wrapper = styled.section`
  display: grid;
  grid-template-rows: 48px auto 48px;
  height: 90vh;
`
const SongsContainer = styled.ul`
  overflow-y: scroll;
  padding-inline-start: 0px;
`
const SingleSongWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 8px;
  background: #fefefe;
  box-shadow: 2px 4px 4px #ddd;
  border-radius: 5px;
  margin: 10px;
  grid-gap: 5px;
`

export default class SongList extends Component {
  state = {
    songs: this.createSongArray()
  }

  createSongArray() {
    return this.load()
      .map(item => ({
        ...item,
        inProgress: false,
        id: uid()
      }))
      .sort((a, b) => (a.name < b.name ? -1 : 1))
  }

  render() {
    this.save()
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
        <SongCard name={song.name} tempo={song.tempo} width={3} />
        <Message text={song.key} />
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
