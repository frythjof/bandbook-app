import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import Header from './Header'

const Wrapper = styled.section`
  display: grid;
  grid-template-rows: 48px auto 48px;
  height: 90vh;
`
const SongsContainer = styled.ul`
  overflow-y: scroll;
  padding-inline-start: 0px;
`
const SingleSongWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 8px;
  background: #fefefe;
  box-shadow: 2px 4px 4px #ddd;
  border-radius: 5px;
  margin: 10px;
  grid-gap: 5px;
`

export default class SongList extends Component {
  static propTypes = {
    text: PropTypes.string
  }

  static defaultProps = {
    text: 'Song XY'
  }

  render() {
    const { text } = this.props

    return (
      <Wrapper data-cy="SongList">
        <Header title="Songs" />
        <SongsContainer>
          <SingleSongWrapper>Song 1</SingleSongWrapper>
          <SingleSongWrapper>Song 2</SingleSongWrapper>
          <SingleSongWrapper>Song 3</SingleSongWrapper>
          <SingleSongWrapper>Song 4</SingleSongWrapper>
          <SingleSongWrapper>Song 5</SingleSongWrapper>
          <SingleSongWrapper>Song 6</SingleSongWrapper>
          <SingleSongWrapper>Song 7</SingleSongWrapper>
          <SingleSongWrapper>Song 8</SingleSongWrapper>
          <SingleSongWrapper>Song 9</SingleSongWrapper>
          <SingleSongWrapper>Song 10</SingleSongWrapper>
        </SongsContainer>
      </Wrapper>
    )
  }
}
