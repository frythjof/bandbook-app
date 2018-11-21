import React, { Component } from 'react'
import styled from 'styled-components'

import Message from './Message'
import Button from './Button'
import TextArea from './TextArea'
import Separator from './Separator'

const MessageWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 8px;
  background: #fefefe;
  border-radius: 5px;
  margin: 10px;
  grid-gap: 5px;
`

const InputWrapper = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px;
`

export default class HomeBoard extends Component {
  state = [
    'Hello band mates! What`s up? Does our rehearsal take place today? Cheers!',
    'Hello buddy! All tight and shit! Absolutely, we`re gonna jam like hell later on!'
  ]

  render() {
    return (
      <div>
        <React.Fragment>{this.renderMessages()}</React.Fragment>
        <InputWrapper>
          <TextArea placeholder={'Write new message here'} />
          <Button text={'Post message'} />{' '}
        </InputWrapper>
      </div>
    )
  }

  renderMessages() {
    return this.state.map(this.renderSingleMessage)
  }

  renderSingleMessage = message => {
    return (
      <MessageWrapper>
        <Separator userfirstname={'Kai'} width={0} />
        <Message text={message} />
      </MessageWrapper>
    )
  }
}
