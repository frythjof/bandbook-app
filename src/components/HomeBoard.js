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
  box-shadow: inset 2px 4px 4px #ddd;
  border-radius: 5px;
  margin: 10px;
  grid-gap: 5px;
`

const InputWrapper = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px;
  position: absolute;
  bottom: 0;
`

export default class HomeBoard extends Component {
  state = {
    defaultMessages: [
      {
        text:
          'Hello band mates! What`s up? Does our rehearsal take place today? Cheers!',
        firstname: 'Joe',
        timestamp: '21.11.2018 ⭑ 11:29'
      },
      {
        text:
          'Hello buddy! All tight and shit! Absolutely, we`re gonna jam like hell later on!',
        firstname: 'Jim',
        timestamp: '21.11.2018 ⭑ 12:41'
      },
      {
        text: 'Hello all! Today is a beautiful day!',
        firstname: 'John',
        timestamp: ''
      }
    ],
    tempTextValue: ''
  }

  render() {
    return (
      <div>
        <React.Fragment>{this.renderMessages()}</React.Fragment>
        <InputWrapper>
          <TextArea
            placeholder={'Write new message here'}
            tempText={text => this.insertingMessage(text)}
          />
          <Button text={'Post message'} onPost={this.postMessage} />{' '}
        </InputWrapper>
      </div>
    )
  }

  renderMessages() {
    return this.state.defaultMessages.map(this.renderSingleMessage)
  }

  renderSingleMessage = message => {
    return (
      <MessageWrapper>
        <Separator
          firstname={message.firstname}
          width={0}
          timestamp={message.timestamp}
        />
        <Message text={message.text} />
      </MessageWrapper>
    )
  }

  insertingMessage = text => {
    this.setState({
      ...this.state,
      tempTextValue: text
    })
  }

  postMessage = () => {
    const newText = this.state.tempTextValue
    this.setState({
      defaultMessages: [
        ...this.state.defaultMessages,
        { text: newText, firstname: 'Kai', timestamp: '' }
      ],
      tempTextValue: ''
    })
    // textArea.value = ''
    // textArea.focus()
  }
}
