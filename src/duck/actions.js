import { createAction } from 'redux-starter-kit'

export const addSong = createAction('addSong')
export const deleteSetlist = createAction('deleteSetlist')
export const toggleSongDetails = createAction('toggleSongDetails')
export const toggleSongProgress = createAction('toggleSongProgress')
export const toggleSelectedForSetlist = createAction('toggleSelectedForSetlist')
export const deleteSong = createAction('deleteSong')

// usw. für alle anderen functions aus App.js
