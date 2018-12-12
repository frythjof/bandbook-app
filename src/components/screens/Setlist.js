import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
// import PropTypes from 'prop-types'

import Header from '../Header'
import SetlistSortable from '../SetlistSortable'

const Wrapper = styled.section`
  display: grid;
  grid-template-rows: 48px auto 48px;
  height: 90vh;
`
const SetlistContainer = styled.main`
  overflow-y: scroll;

  ol {
    padding-inline-start: 0;
  }
`

const NewSongLinkWrapper = styled.div`
  display: flex;

  a:any-link {
    display: flex;
    justify-content: center;
    align-items: center;

    text-decoration: none;
    color: whitesmoke;
    width: 100%;
    background: #000000bb;
    margin: 10px;
    font-size: 14px;
    font-weight: bold;
    border: 2px solid white;
    border-radius: 5px;
  }
`

export default class Setlist extends Component {
  render() {
    const gigday = new Date().toLocaleDateString('de-DE')
    return (
      <Wrapper data-cy="Setlist">
        <Header title={`Setlist for ${gigday}`} />
        <SetlistContainer>
          <SetlistSortable
            onToggleForSetlist={this.props.onToggleSelectedForSetlist}
            songs={this.props.selectedSongs}
          />
        </SetlistContainer>
        <NewSongLinkWrapper>
          <Link onClick={this.props.onDeleteSetlist} to="/repertoire">
            {'Delete setlist'}
          </Link>
          {/* <Link to="/setlist">{'Save setlist'}</Link> */}
        </NewSongLinkWrapper>
      </Wrapper>
    )
  }
}
