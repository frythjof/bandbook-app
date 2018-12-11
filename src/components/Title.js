import React, { Component } from 'react'
import styled from 'styled-components'

const StyledTitle = styled.h3`
  color: whitesmoke;
  background-color: #000000bb;
  box-shadow: inset 0 0 10px 1px #ddd;
  margin: 0;
  height: 2em;
  border-top: 2px solid whitesmoke;
  /* border-bottom: 2px solid whitesmoke; */
  display: flex;
  justify-content: flex-start;
  align-items: center;
  /* position: sticky;
  top: 0;
  text-transform: uppercase; */
`

export default class Title extends Component {
  render() {
    return (
      <StyledTitle>
        <em>
          <strong>Bandbook</strong>
        </em>
      </StyledTitle>
    )
  }
}
