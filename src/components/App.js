import React, { Component } from 'react'
import styled from 'styled-components'
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'
import { configureStore } from 'redux-starter-kit'
import reducer from '../duck/reducer'
/* import * as Actions from '../duck/actions' */
import { Provider } from 'react-redux'

// import uid from 'uid'
// import defaultSongs from '../data/default-songs.json'
import HomeBoard from './screens/HomeBoard'
// import SongList from './screens/SongList'
import SongListContainer from './screens/SongListContainer'
// import SongListEditor from './screens/SongListEditor'
import SongListEditorContainer from './screens/SongListEditorContainer'
// import Setlist from './screens/Setlist'
import SetlistContainer from './screens/SetlistContainer'
// import SetlistStatic from './screens/SetlistStatic'
// import { arrayMove } from 'react-sortable-hoc'

const Wrapper = styled.section`
  display: grid;
  grid-template-rows: 25px auto 40px;
  height: 100vh;

  span {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    color: whitesmoke;
    margin: 0 10px;
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

const store = configureStore({ reducer })

export default class App extends Component {
  // state = {
  //   songs: this.createSongsArray()
  // }

  // createSongsArray() {
  //   return this.load()
  //     .map(item => ({
  //       ...item,
  //       id: uid()
  //     }))
  //     .sort((a, b) => (a.name < b.name ? -1 : 1))
  // }

  // componentDidUpdate = () => {
  //   this.createSongsArray()
  // }

  // componentDidMount() {
  //   store.subscribe(() => this.forceUpdate())
  // }

  render() {
    const state = store.getState()
    this.save(state)
    return (
      <Provider store={store}>
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
              component={SongListContainer}
              // render={() => (
              // <SongList
              //   onToggleSongDetails={this.toggleSongDetails}
              //   onToggleSongProgress={this.toggleSongProgress}
              //   onToggleSelectedForSetlist={this.toggleSelectedForSetlist}
              //   onDeleteSong={this.deleteSong}
              //   onEditSong={this.editSong}
              //   allSongs={state.songs}
              // />
              // )}
            />
            <Route
              path="/setlist"
              component={SetlistContainer}
              // render={() => (
              //   <Setlist
              //     onToggleSelectedForSetlist={this.toggleSelectedForSetlist}
              //     onDeleteSetlist={this.deleteSetlist}
              //     selectedSongs={state.songs.filter(
              //       song => song.selectedForSetlist === true
              //     )}
              //   />
              // )}
            />
            <Route
              path="/songeditor"
              component={SongListEditorContainer}
              // render={() => (
              //   <SongListEditor
              //     newSong={song => this.addSong(song)}
              //     // editSong={state.songs[0]}
              //   />
              // )}
            />
            {/* <Route
            path="/setliststatic"
            render={() => (
              <SetlistStatic
                onToggleSongDetails={this.toggleSongDetails}
                onToggleSongProgress={this.toggleSongProgress}
                onToggleSelectedForSetlist={this.toggleSelectedForSetlist}
                onDeleteSong={this.deleteSong}
                onDeleteSetlist={this.deleteSetlist}
                onEditSong={this.editSong}
                allSongs={state.songs.filter(
                  song => song.selectedForSetlist === true
                )}
              />
            )}
          /> */}
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
              {/* <NavLink activeClassName="active" to="/setliststatic">
              <strong>Setlist Old</strong>
            </NavLink> */}
            </nav>
          </Wrapper>
        </Router>
      </Provider>
    )
  }

  /*

  addSong = newSong => {
    store.dispatch(Actions.addSong(newSong)) 
    // this.setState({
    //   songs: [...this.state.songs, newSong].sort((a, b) =>
    //     a.name < b.name ? -1 : 1
    //   )
    // })
  }

  deleteSetlist = () => {
    store.dispatch(Actions.deleteSetlist())
    // this.setState({
    //   songs: this.state.songs.map(item => ({
    //     ...item,
    //     selectedForSetlist: false
    //   }))
    // })
  }

  toggleSongDetails = id => {
    store.dispatch(Actions.toggleSongDetails(id))
    // const { songs } = this.state
    // const index = songs.findIndex(s => s.id === id)
    // const newSongs = [
    //   ...songs.slice(0, index),
    //   { ...songs[index], showSongDetails: !songs[index].showSongDetails },
    //   ...songs.slice(index + 1)
    // ]

    // this.setState({
    //   songs: newSongs
    // })
  }

  toggleSongProgress = id => {
    store.dispatch(Actions.toggleSongProgress(id))
    // const { songs } = this.state
    // const index = songs.findIndex(s => s.id === id)
    // const newSongs = [
    //   ...songs.slice(0, index),
    //   { ...songs[index], inProgress: !songs[index].inProgress },
    //   ...songs.slice(index + 1)
    // ]

    // this.setState({
    //   songs: newSongs
    // })
  }

  toggleSelectedForSetlist = id => {
    store.dispatch(Actions.toggleSelectedForSetlist(id))
    // const { songs } = this.state
    // const index = songs.findIndex(s => s.id === id)
    // const newSetlist = [
    //   ...songs.slice(0, index),
    //   { ...songs[index], selectedForSetlist: !songs[index].selectedForSetlist },
    //   ...songs.slice(index + 1)
    // ]

    // this.setState({
    //   songs: newSetlist
    // })
  }

  // editSong

  deleteSong = id => {
    store.dispatch(Actions.deleteSong(id))
    // const { songs } = this.state
    // const index = songs.findIndex(s => s.id === id)
    // const newSongs = [...songs.slice(0, index), ...songs.slice(index + 1)]

    // this.setState({
    //   songs: newSongs
    // })
  }

  // load() {
  //   try {
  //     return (
  //       JSON.parse(localStorage.getItem('bandbook-app--songs')) || defaultSongs
  //     )
  //   } catch (err) {
  //     return defaultSongs
  //   }
  // }

*/

  save(state) {
    localStorage.setItem('bandbook-app--songs', JSON.stringify(state.songs))
  }
}
