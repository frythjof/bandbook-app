import SongList from './SongList'
import { connect } from 'react-redux'
import {
  toggleSongDetails,
  toggleSongProgress,
  toggleSelectedForSetlist,
  deleteSong,
  editSong
} from '../../duck/actions'

const mapStatetoProps = state => ({
  allSongs: state.songs
})

const mapDispatchtoProps = {
  onToggleSongDetails: toggleSongDetails,
  onToggleSongProgress: toggleSongProgress,
  onToggleSelectedForSetlist: toggleSelectedForSetlist,
  onDeleteSong: deleteSong,
  onEditSong: editSong
}

export default connect(
  mapStatetoProps, // falls kein props aus state übergeben werden muss, hier "null" schreiben.
  mapDispatchtoProps
)(SongList)
