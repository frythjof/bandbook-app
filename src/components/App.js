import React, { Component } from 'react'
import styled from 'styled-components'
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'

import HomeBoard from './HomeBoard'
import SongList from './SongList'

const Wrapper = styled.section`
  display: grid;
  grid-template-rows: 20px auto 40px;
  height: 100vh;

  nav {
    display: flex;
  }

  a:any-link {
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    color: black;
    width: 100%;
    background: #efefef;
    border-top: 2px solid white;

    &:first-child {
      border-right: 1px solid white;
    }

    &.active {
      background: black;
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
              Messages
            </NavLink>
            <NavLink activeClassName="active" to="/repertoire">
              Songs
            </NavLink>
          </nav>
        </Wrapper>
      </Router>
    )
  }
}
