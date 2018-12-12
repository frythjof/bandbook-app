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

export default createReducer(initialState, { addSong: addSong })
// Alternativ: {addSong} (Kurzschreibweise, da key und value gleich heißen) oder [Actions.addTodo]: addTodo (Dynamischer Key)
// Dieser createreducer-Aufruf erzeugt den Reducer mit action.type addSong
