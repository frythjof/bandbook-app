import React, { Component } from 'react'
import styled from 'styled-components'
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'

import HomeBoard from './HomeBoard'
import SongList from './SongList'

const Wrapper = styled.section`
  display: grid;
  grid-template-rows: 20px auto 40px;
  height: 100vh;

  div {
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
    }
  }
`

export default class App extends Component {
  render() {
    return (
      <Router>
        <Wrapper>
          <div>
            <em>
              <strong>Bandbook</strong>
            </em>
          </div>

          <Route exact path="/" render={() => <HomeBoard />} />
          <Route path="/repertoire" render={() => <SongList />} />
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
