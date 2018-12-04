import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import ToggleButton from './ToggleButton'
import BpmButton from './BpmButton'

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: 3fr 2fr 1fr;
  align-items: center;
  background: ${props => props.background || 'transparent'};
`

const SongName = styled.span`
  white-space: nowrap;
  margin: 0 5px;
`

export default class SongCard extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    tempo: PropTypes.number.isRequired
  }

  static defaultProps = {
    name: 'Song XY'
  }

  render() {
    const { name, tempo, width } = this.props
    return (
      <Wrapper data-cy="SongCard">
        <SongName>{name}</SongName>
        <BpmButton tempo={tempo} />
        <ToggleButton />
      </Wrapper>
    )
  }
}

// onToggle={this.toggleSongDetails}
