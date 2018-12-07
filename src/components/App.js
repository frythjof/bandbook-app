import React, { Component } from 'react'
import styled from 'styled-components'
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'

import HomeBoard from './screens/HomeBoard'
import SongList from './screens/SongList'
import SongListEditor from './screens/SongListEditor'

const Wrapper = styled.section`
  display: grid;
  grid-template-rows: 20px auto 40px;
  height: 100vh;

  span {
    color: whitesmoke;
  }

  nav {
    display: flex;
  }

  a:any-link {
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    color: whitesmoke;
    width: 100%;
    background: transparent;
    /* background: #efefef; */
    border-top: 2px solid white;

    &:first-child {
      border-right: 2px solid whitesmoke;
    }

    &.active {
      background-color: #000000bb;
      color: white;
      box-shadow: inset 0 0 10px 1px #ddd;
    }
  }
`

export default class App extends Component {
  render() {
    return (
      <Router>
        <Wrapper>
          <span>
            <em>
              <strong>Bandbook</strong>
            </em>
          </span>

          <Route exact path="/" render={() => <HomeBoard />} />
          <Route path="/repertoire" render={() => <SongList />} />
          <Route
            path="/songeditor"
            render={() => (
              <SongListEditor newSong={song => this.addSong(song)} />
            )}
          />
          <nav>
            <NavLink exact activeClassName="active" to="/">
              <strong>Messages</strong>
            </NavLink>
            <NavLink activeClassName="active" to="/repertoire">
              <strong>Songs</strong>
            </NavLink>
          </nav>
        </Wrapper>
      </Router>
    )
  }
}
