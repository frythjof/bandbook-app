import reducer from './reducer'
import {
  addSong,
  deleteSetlist,
  toggleSongDetails,
  toggleSongProgress,
  toggleSelectedForSetlist,
  deleteSong
} from './actions' // Alternativ: import * as Actions from './actions' -> um alle actions als Objekt zu importieren

describe('reducer', () => {
  it('has a test', () => {
    expect(true).toEqual(true)
  })

  it('can addSong', () => {
    const state = { songs: [] }
    const newSong = { name: 'Song New', tempo: 120 }
    const newState = reducer(state, { type: 'addSong', payload: newSong }) // Statt "{ type: 'addSong', payload: newSong }" -> "addSong(newSong)" oder "Actions.addSong(newSong)"
    expect(newState).toEqual({ songs: [{ name: 'Song New', tempo: 120 }] })
  })

  it('can deleteSetlist', () => {
    const state = {
      songs: [{ name: 'Song New', tempo: 120, selectedForSetlist: true }]
    }
    const newState = reducer(state, deleteSetlist())
    expect(newState).toEqual({
      songs: [{ name: 'Song New', tempo: 120, selectedForSetlist: false }]
    })
  })

  it('can toggleSongDetails', () => {
    const state = {
      songs: [{ name: 'Song New', tempo: 120, showSongDetails: true }]
    }
    const newState = reducer(state, toggleSongDetails())
    expect(newState).toEqual({
      songs: [{ name: 'Song New', tempo: 120, showSongDetails: false }]
    })
  })

  it('can toggleSongProgress', () => {
    const state = {
      songs: [{ name: 'Song New', tempo: 120, inProgress: true }]
    }
    const newState = reducer(state, toggleSongProgress())
    expect(newState).toEqual({
      songs: [{ name: 'Song New', tempo: 120, inProgress: false }]
    })
  })

  it('can toggleSelectedForSetlist', () => {
    const state = {
      songs: [{ name: 'Song New', tempo: 120, selectedForSetlist: false }]
    }
    const newState = reducer(state, toggleSelectedForSetlist())
    expect(newState).toEqual({
      songs: [{ name: 'Song New', tempo: 120, selectedForSetlist: true }]
    })
  })

  it('can deleteSong', () => {
    const state = {
      songs: [{ name: 'Song New', tempo: 120 }]
    }
    const newState = reducer(state, deleteSong())
    expect(newState).toEqual({
      songs: []
    })
  })
})
