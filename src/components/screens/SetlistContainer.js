import Setlist from './Setlist'
import { connect } from 'react-redux'
import { toggleSelectedForSetlist, deleteSetlist } from '../../duck/actions'

const mapStatetoProps = state => ({
  selectedSongs: filtered(state)
})

const mapDispatchtoProps = {
  onToggleSelectedForSetlist: toggleSelectedForSetlist,
  onDeleteSetlist: deleteSetlist
}

function filtered(state) {
  return state.songs.filter(song => song.selectedForSetlist === true)
}

export default connect(
  mapStatetoProps, // falls kein props aus state übergeben werden muss, hier "null" schreiben.
  mapDispatchtoProps
)(Setlist)
