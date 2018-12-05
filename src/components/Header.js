import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const StyledHeader = styled.h1`
  color: white;
  background-color: #000000bb;
  box-shadow: inset 0 0 10px 1px #ddd;
  margin: 0;
  height: 2em;
  border-top: 2px solid whitesmoke;
  border-bottom: 2px solid whitesmoke;
  display: flex;
  justify-content: center;
  align-items: center;
  /* position: sticky;
  top: 0;
  text-transform: uppercase; */
`

export default class Header extends Component {
  static propTypes = {
    title: PropTypes.string
  }

  render() {
    const { title } = this.props

    return (
      <StyledHeader>
        <em>{title}</em>
      </StyledHeader>
    )
  }
}
