import reducer from './reducer'
import { addSong, deleteSetlist } from './actions' // Alternativ: import * as Actions from './actions' -> um alle actions als Objekt zu importieren

describe('reducer', () => {
  it('has a test', () => {
    expect(true).toEqual(true)
  })

  it('can addSong', () => {
    const state = { songs: [] }
    const newSong = { name: 'Song New', tempo: 120 }
    const newState = reducer(state, { type: 'addSong', payload: newSong }) // Statt "{ type: 'addSong', payload: newSong }" -> "addSong(newSong) oder "Actions.addSong(newSong)""
    expect(newState).toEqual({ songs: [{ name: 'Song New', tempo: 120 }] })
  })
})
