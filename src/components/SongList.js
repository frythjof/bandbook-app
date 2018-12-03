import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import defaultSongs from '../data/default-songs.json'
import Header from './Header'
import Separator from './Separator'
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
    songs: this.load(),
    id: ''
  }

  static propTypes = {
    text: PropTypes.string
  }

  static defaultProps = {
    name: 'Song XY'
  }

  render() {
    const { text } = this.props
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
        <Separator
          firstname={song.name}
          width={3}
          timestamp={`${song.tempo}bpm`}
        />
        <Message text={song.key} />
      </SingleSongWrapper>
    )
  }

  save() {
    localStorage.setItem(
      'bandbook-app--songs',
      JSON.stringify(this.state.messages)
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
