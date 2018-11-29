import React, { Component } from 'react'
import styled from 'styled-components'
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'

import HomeBoard from './HomeBoard'

const Wrapper = styled.section`
  display: grid;
  grid-template-rows: 20px auto 40px;
  height: 100vh;

  /* nav {
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
      background: black;
      color: white;
    }
  } */
`

export default class App extends Component {
  render() {
    return (
      <div>
        <em>
          <strong>Bandbook</strong>
        </em>
        <HomeBoard />
      </div>
      // <Router>
      //   <Wrapper>
      //     <Route
      //       exact
      //       path="/"
      //       render={() => <HomeBoard />}
      //     />
      //     <Route
      //       path="/repertoire"
      //       render={() => (
      //         <RepertoireList />
      //       )}
      //     />
      //     <nav>
      //       <NavLink exact activeClassName="active" to="/">
      //         Messages
      //       </NavLink>
      //       <NavLink activeClassName="active" to="/repertoire">
      //         Songs
      //       </NavLink>
      //     </nav>
      //   </Wrapper>
      // </Router>
    )
  }
}

// state = {
//   showDoneTodos: true
// }

// toggleShowDoneTodos = () => {
//   this.setState({
//     showDoneTodos: !this.state.showDoneTodos
//   })
// }
//         <Route1
//           showDoneTodos={this.state.showDoneTodos}
//           onToggle={this.toggleShowDoneTodos} />
