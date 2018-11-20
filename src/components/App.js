import React, { Component } from 'react'
import styled from 'styled-components'
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'
//import Home from './Home'
//import Route2 from './Route2'
//import uid from 'uid'
//import XY from './XY'

const Wrapper = styled.section`
  display: grid;
  grid-template-rows: auto 50px;
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

    &:first-child {
      border-right: 1px solid white;
    }

    &.active {
      background: deeppink;
      color: white;
    }
  }
`

export default class App extends Component {
  state = {
    showDoneTodos: true
  }

  toggleShowDoneTodos = () => {
    this.setState({
      showDoneTodos: !this.state.showDoneTodos
    })
  }

  render() {
    return (
      <div>Hello Bandbook!</div>
      // <Router>
      //   <Wrapper>
      //     <Route
      //       exact
      //       path="/"
      //       render={() => <Home showDoneTodos={this.state.showDoneTodos} />}
      //     />
      //     <Route
      //       path="/config"
      //       render={() => (
      //         <Route2
      //           showDoneTodos={this.state.showDoneTodos}
      //           onToggle={this.toggleShowDoneTodos}
      //         />
      //       )}
      //     />
      //     <nav>
      //       <NavLink exact activeClassName="active" to="/">
      //         Home
      //       </NavLink>
      //       <NavLink activeClassName="active" to="/route2">
      //         Route2
      //       </NavLink>
      //     </nav>
      //   </Wrapper>
      // </Router>
    )
  }
}
