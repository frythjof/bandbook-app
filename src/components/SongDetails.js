import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const StyledSongDetails = styled.section`
  max-height: 0;
  overflow: hidden;
  transition: all 0.3s ease;
  margin: 0px 10px 0 10px;
  padding-top: 8px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  grid-gap: 8px;
  grid-template-areas:
    'key timeSignature'
    'duration date'
    'url url'
    '. .';
  &.visible {
    max-height: 300px;
    transition: all 0.5s ease;
  }
`

const Key = styled.section`
  grid-area: key;
`
const TimeSignature = styled.section`
  grid-area: timeSignature;
  /* margin-right: auto; */
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
    musicKey: PropTypes.string
  }

  render() {
    const {
      musicKey,
      timeSignature,
      duration,
      date,
      url,
      showSongDetails
    } = this.props

    return (
      <StyledSongDetails
        data-cy="SongDetails"
        className={showSongDetails ? 'visible' : 'visible'}
      >
        <Key>{musicKey}</Key>
        <TimeSignature>{timeSignature}</TimeSignature>
        <Duration>{`${duration} min`}</Duration>
        <Date>{date}</Date>
        <URL>{url}</URL>
      </StyledSongDetails>
    )
  }
}
