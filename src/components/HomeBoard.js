import React, { Component } from 'react'
import styled from 'styled-components'

import Message from './Message'
import Button from './Button'
import TextArea from './TextArea'
import Separator from './Separator'

const Wrapper = styled.section`
  display: grid;
  grid-template-rows: auto 48px;
  height: 95vh;
`
const MessagesContainer = styled.main`
  overflow-y: scroll;
`
const SingleMessageWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 8px;
  background: #fefefe;
  box-shadow: 2px 4px 4px #ddd;
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
  state = {
    messages: [
      {
        text:
          'Hello band mates! What`s up? Does our rehearsal take place today? Cheers!',
        firstname: 'Joe',
        timestamp: '21.11.2018 ⭑ 11:29'
      },
      {
        text:
          'Hello buddy! Everything`s alright! Yeah, we`re gonna jam like hell later on!',
        firstname: 'Jim',
        timestamp: '21.11.2018 ⭑ 12:41'
      },
      {
        text: 'Hello all! Today is a beautiful day!',
        firstname: 'John',
        timestamp: '22.11.2018 ⭑ 07:17'
      }
    ],
    tempTextValue: ''
  }

  render() {
    return (
      <Wrapper data-cy="HomeBoard">
        <MessagesContainer>{this.renderMessages()}</MessagesContainer>
        <InputWrapper>
          <TextArea
            placeholder={'Write new message here'}
            updateTempTextValue={text => this.updateTempTextValue(text)}
            defaultValue={this.state.tempTextValue}
          />
          <Button text={'Post message'} onButtonClick={this.postMessage} />{' '}
        </InputWrapper>
      </Wrapper>
    )
  }

  renderMessages() {
    return this.state.messages.map(this.renderSingleMessage)
  }

  renderSingleMessage = message => {
    return (
      <SingleMessageWrapper>
        <Separator
          firstname={message.firstname}
          width={3}
          timestamp={message.timestamp}
        />
        <Message text={message.text} />
      </SingleMessageWrapper>
    )
  }

  updateTempTextValue = text => {
    this.setState({
      ...this.state,
      tempTextValue: text
    })
  }

  postMessage = () => {
    const timestamp = new Date()
    const postingday = timestamp.toLocaleDateString('de-DE')
    const postingtime = timestamp.toLocaleTimeString('de-DE')

    const newText = this.state.tempTextValue
    this.setState({
      messages: [
        ...this.state.messages,
        {
          text: newText,
          firstname: 'Kai',
          timestamp: `${postingday} ⭑ ${postingtime}`
        }
      ],
      tempTextValue: ''
    })
  }
}
