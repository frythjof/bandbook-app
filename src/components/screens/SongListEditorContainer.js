import SongListEditor from './SongListEditor'
import { connect } from 'react-redux'
import { addSong } from '../../duck/actions'

const mapDispatchtoProps = {
  newSong: addSong
}

export default connect(
  null, // falls kein props aus state übergeben werden muss, hier "null" schreiben.
  mapDispatchtoProps
)(SongListEditor)
