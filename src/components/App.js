import React, { Component } from 'react'
import styled from 'styled-components'
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'
import uid from 'uid'
import defaultSongs from '../data/default-songs.json'
import HomeBoard from './screens/HomeBoard'
import SongList from './screens/SongList'
import SongListEditor from './screens/SongListEditor'
import Setlist from './screens/Setlist'
import SetlistSortable from './screens/SetlistSortable.js'

const Wrapper = styled.section`
  display: grid;
  grid-template-rows: 20px auto 40px;
  height: 100vh;

  span {
    color: whitesmoke;
  }

  nav {
    display: flex;

    a:any-link {
      display: flex;
      align-items: center;
      justify-content: center;
      text-decoration: none;
      color: whitesmoke;
      width: 100%;
      background: transparent;
      /* background: #efefef; */
      border-top: 2px solid whitesmoke;

      &:first-child {
        border-right: 2px solid whitesmoke;
      }

      &:nth-child(2) {
        border-right: 2px solid whitesmoke;
      }

      &.active {
        background-color: #000000bb;
        color: white;
        box-shadow: inset 0 0 10px 1px #ddd;
      }
    }
  }
`

export default class App extends Component {
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

  // componentDidUpdate = () => {
  //   this.createSongsArray()
  // }

  render() {
    this.save()
    return (
      <Router>
        <Wrapper>
          <span>
            <em>
              <strong>Bandbook</strong>
            </em>
          </span>

          <Route exact path="/" render={() => <HomeBoard />} />
          <Route
            path="/repertoire"
            render={() => (
              <SongList
                onToggleSongDetails={this.toggleSongDetails}
                onToggleSongProgress={this.toggleSongProgress}
                onToggleSelectedForSetlist={this.toggleSelectedForSetlist}
                onDeleteSong={this.deleteSong}
                onEditSong={this.editSong}
                allSongs={this.state.songs}
              />
            )}
          />
          <Route
            path="/setlist"
            render={() => (
              <Setlist
                onToggleSongDetails={this.toggleSongDetails}
                onToggleSongProgress={this.toggleSongProgress}
                onToggleSelectedForSetlist={this.toggleSelectedForSetlist}
                onDeleteSong={this.deleteSong}
                onDeleteSetlist={this.deleteSetlist}
                onEditSong={this.editSong}
                allSongs={this.state.songs.filter(
                  song => song.selectedForSetlist === true
                )}
              />
            )}
          />
          <Route
            path="/setlistsortable"
            render={() => (
              <SetlistSortable
                // onToggleSongDetails={this.toggleSongDetails}
                // onToggleSongProgress={this.toggleSongProgress}
                // onToggleSelectedForSetlist={this.toggleSelectedForSetlist}
                // onDeleteSong={this.deleteSong}
                // onDeleteSetlist={this.deleteSetlist}
                // onEditSong={this.editSong}
                allSongs={this.state.songs.filter(
                  song => song.selectedForSetlist === true
                )}
              />
            )}
          />
          <Route
            path="/songeditor"
            render={() => (
              <SongListEditor newSong={song => this.addSong(song)} />
            )}
          />
          <nav>
            <NavLink exact activeClassName="active" to="/">
              <strong>Messages</strong>
            </NavLink>
            <NavLink activeClassName="active" to="/repertoire">
              <strong>Songs</strong>
            </NavLink>
            <NavLink activeClassName="active" to="/setlist">
              <strong>Setlist</strong>
            </NavLink>
            <NavLink activeClassName="active" to="/setlistsortable">
              <strong>Setlist DND</strong>
            </NavLink>
          </nav>
        </Wrapper>
      </Router>
    )
  }

  addSong = newSong => {
    this.setState({
      songs: [...this.state.songs, newSong].sort((a, b) =>
        a.name < b.name ? -1 : 1
      )
    })
  }

  deleteSetlist = () => {
    this.setState({
      songs: this.state.songs.map(item => ({
        ...item,
        selectedForSetlist: false
      }))
    })
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

  toggleSelectedForSetlist = id => {
    const { songs } = this.state
    const index = songs.findIndex(s => s.id === id)
    const newSetlist = [
      ...songs.slice(0, index),
      { ...songs[index], selectedForSetlist: !songs[index].selectedForSetlist },
      ...songs.slice(index + 1)
    ]

    this.setState({
      songs: newSetlist
    })
  }

  // editSong

  deleteSong = id => {
    const { songs } = this.state
    const index = songs.findIndex(s => s.id === id)
    const newSongs = [...songs.slice(0, index), ...songs.slice(index + 1)]

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
