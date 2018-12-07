import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import ToggleProgressButton from './ui/ToggleProgressButton'

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
    'toggle .';
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
      onToggle
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
        <URL>{url}</URL>
        <ToggleProgressButton inProgress={inProgress} onToggle={onToggle} />
      </StyledSongDetails>
    )
  }
}
