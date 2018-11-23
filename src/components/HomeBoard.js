import React, { Component } from 'react'
import styled from 'styled-components'

import Message from './Message'
import Button from './Button'
import TextArea from './TextArea'
import Separator from './Separator'

const Wrapper = styled.section`
  display: grid;
  grid-template-rows: auto 48px;
  height: 100vh;
`
const MessagesContainer = styled.main`
  overflow-y: scroll;
`
const SingleMessageWrapper = styled.section`
  display: flex;
  flex-direction: column;
  /* align-items: center; */
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
  /* position: absolute;
  bottom: 0; */
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
            tempText={text => this.insertingMessage(text)}
            defaultValue={this.state.tempTextValue}
          />
          <Button text={'Post message'} onPost={this.postMessage} />{' '}
        </InputWrapper>
      </Wrapper>
    )
  }

  renderMessages() {
    return this.state.defaultMessages.map(this.renderSingleMessage)
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

  insertingMessage = text => {
    this.setState({
      ...this.state,
      tempTextValue: text
    })
  }

  postMessage = () => {
    // const day = new Date().getDate()
    // const month = new Date().getMonth()
    // const year = new Date().getFullYear()
    // const hour = new Date().getHours()
    // const minute = new Date().getMinutes()
    // const timestamp = new Date(year, month, day, hour, minute)
    const timestamp = new Date()
    const dateoptions = {
      year: 'numeric',
      month: 'numeric',
      day: 'numeric'
    }
    const timeoptions = {
      hour: 'numeric',
      minute: 'numeric'
    }
    const postingday = timestamp.toLocaleDateString('de-DE', dateoptions)
    const postingtime = timestamp.toLocaleTimeString('de-DE', timeoptions)

    const newText = this.state.tempTextValue
    this.setState({
      defaultMessages: [
        ...this.state.defaultMessages,
        {
          text: newText,
          firstname: 'Kai',
          timestamp: `${postingday} ⭑ ${postingtime}`
        }
      ],
      tempTextValue: ''
    })
    console.log(timestamp)
    // textArea.focus()
  }
}
