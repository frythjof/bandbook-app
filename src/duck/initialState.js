import defaultSongs from '../data/default-songs.json'
import uid from 'uid'

export default {
  songs: createSongsArray()
}

function createSongsArray() {
  return load()
    .map(item => ({
      ...item,
      id: uid()
    }))
    .sort((a, b) => (a.name < b.name ? -1 : 1))
}

function load() {
  try {
    return (
      JSON.parse(localStorage.getItem('bandbook-app--songs')) || defaultSongs
    )
  } catch (err) {
    return defaultSongs
  }
}
