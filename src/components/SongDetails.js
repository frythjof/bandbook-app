import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import ToggleProgressButton from './ui/ToggleProgressButton'
import DeleteButton from './ui/DeleteButton'
import EditButton from './ui/EditButton'
import ToggleSelectForSetlistButton from './ui/ToggleSelectForSetlistButton'

const StyledSongDetails = styled.section`
  max-height: 200px;
  overflow: hidden;
  transition: all 0.3s ease;
  margin: 0 5px 5px 5px;
  border: 1px solid black;
  border-radius: 5px;
  padding: 8px;
  display: none;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  grid-gap: 8px;
  grid-template-areas:
    'key timeSignature'
    'duration date'
    'url url'
    'toggle delete'
    'edit select';
  &.visible {
    display: grid;
    transition: all 0.5s ease;
  }
`

const Key = styled.section`
  grid-area: key;
`
const TimeSignature = styled.section`
  grid-area: timeSignature;
`
const Duration = styled.section`
  grid-area: duration;
`
const Date = styled.section`
  grid-area: date;
`
const URL = styled.a`
  grid-area: url;
  justify-content: flex-start;
  color: black;
  text-decoration: none;
  border-top: 0;
`

export default class SongDetails extends Component {
  static propTypes = {
    musicKey: PropTypes.string,
    timeSignature: PropTypes.string,
    duration: PropTypes.string,
    date: PropTypes.string,
    url: PropTypes.string,
    showSongDetails: PropTypes.bool.isRequired,
    inProgress: PropTypes.bool.isRequired,
    onToggle: PropTypes.func.isRequired
  }

  render() {
    const {
      musicKey,
      timeSignature,
      duration,
      date,
      url,
      showSongDetails,
      inProgress,
      selectedForSetlist,
      onToggle,
      onToggleForSetlist,
      onDelete,
      onEdit
    } = this.props

    return (
      <StyledSongDetails
        data-cy="SongDetails"
        className={showSongDetails ? 'visible' : null}
      >
        <Key>{musicKey}</Key>
        <TimeSignature>{timeSignature}</TimeSignature>
        <Duration>{`${duration} min`}</Duration>
        <Date>{date}</Date>
        <URL
          href={url}
          // href="https://www.dropbox.com/"
          // href="https://www.dropbox.com/s/6a7jy55gs83pztv/advertising%20madness.mp3?dl=0"
          // href="https://open.spotify.com/track/4S1vA0mTayFbnHrwdkzPWT"
        >
          {url}
        </URL>
        <ToggleProgressButton inProgress={inProgress} onToggle={onToggle} />
        <DeleteButton inProgress={inProgress} onDelete={onDelete} />
        <EditButton inProgress={inProgress} onEdit={onEdit} />
        <ToggleSelectForSetlistButton
          inProgress={inProgress}
          onToggleForSetlist={onToggleForSetlist}
          selectedForSetlist={selectedForSetlist}
        />
      </StyledSongDetails>
    )
  }
}
