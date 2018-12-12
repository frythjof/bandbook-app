import { createReducer } from 'redux-starter-kit'
import initialState from './initialState'
// import * as Actions from '.actions'

const addSong = (state, action) => {
  const { payload } = action // Default: const {type, payload} = action
  const newSong = payload

  return {
    ...state,
    songs: [...state.songs, newSong].sort((a, b) => (a.name < b.name ? -1 : 1))
  }
}

const deleteSetlist = state => {
  return {
    ...state,
    songs: state.songs.map(item => ({
      ...item,
      selectedForSetlist: false
    }))
  }
}

const toggleSongDetails = (state, { payload }) => {
  const id = payload

  const { songs } = state
  const index = songs.findIndex(s => s.id === id)
  const newSongs = [
    ...songs.slice(0, index),
    { ...songs[index], showSongDetails: !songs[index].showSongDetails },
    ...songs.slice(index + 1)
  ]

  return {
    ...state,
    songs: newSongs
  }
}

const toggleSongProgress = (state, action) => {
  const { payload } = action
  const id = payload

  const { songs } = state
  const index = songs.findIndex(s => s.id === id)
  const newSongs = [
    ...songs.slice(0, index),
    { ...songs[index], inProgress: !songs[index].inProgress },
    ...songs.slice(index + 1)
  ]

  return {
    ...state,
    songs: newSongs
  }
}

const toggleSelectedForSetlist = (state, action) => {
  const { payload } = action
  const id = payload

  const { songs } = state
  const index = songs.findIndex(s => s.id === id)
  const newSetlist = [
    ...songs.slice(0, index),
    { ...songs[index], selectedForSetlist: !songs[index].selectedForSetlist },
    ...songs.slice(index + 1)
  ]

  return {
    ...state,
    songs: newSetlist
  }
}

const deleteSong = (state, action) => {
  const { payload } = action
  const id = payload

  const { songs } = state
  const index = songs.findIndex(s => s.id === id)
  const newSongs = [...songs.slice(0, index), ...songs.slice(index + 1)]

  return {
    ...state,
    songs: newSongs
  }
}

export default createReducer(initialState, {
  addSong,
  deleteSetlist,
  toggleSongDetails,
  toggleSongProgress,
  toggleSelectedForSetlist,
  deleteSong
})
// Alternativ: {addSong: addSong} (Langchreibweise, falls key und value nicht gleich heißen) oder [Actions.addTodo]: addTodo (Dynamischer Key)
// Dieser createreducer-Aufruf erzeugt den Reducer mit action.type addSong, etc.
