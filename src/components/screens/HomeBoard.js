import React, { Component } from 'react'
import styled from 'styled-components'
import uid from 'uid'
import defaultMessages from '../../data/default-messages.json'
import Message from '../ui/Message'
import SubmitButton from '../ui/SubmitButton'
import TextArea from '../ui/TextArea'
import Separator from '../ui/Separator'
import Header from '../Header'

const Wrapper = styled.section`
  display: grid;
  grid-template-rows: 48px auto 48px;
  height: 90vh;
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
  main = React.createRef()

  state = {
    messages: this.createMessagesArray(),
    tempTextValue: ''
  }

  createMessagesArray() {
    return this.load().map(item => ({
      ...item,
      id: uid()
    }))
  }

  componentDidMount = () => {
    this.main.current.scrollTop =
      this.main.current.scrollHeight -
      this.main.current.getBoundingClientRect().height
  }

  componentDidUpdate = () => {
    this.main.current.scrollTop =
      this.main.current.scrollHeight -
      this.main.current.getBoundingClientRect().height
  }

  render() {
    this.save()
    return (
      <Wrapper data-cy="HomeBoard">
        <Header title="Messages" />
        <MessagesContainer ref={this.main}>
          {this.renderMessages()}
        </MessagesContainer>
        <InputWrapper>
          <TextArea
            placeholder={this.state.textAreaPlaceholder}
            updateTempTextValue={text => this.updateTempTextValue(text)}
            defaultValue={this.state.tempTextValue}
          />
          <SubmitButton
            text={'Post message'}
            onButtonClick={
              this.state.tempTextValue !== ''
                ? this.postMessage
                : this.preventPostEmptyMessage
            }
          />{' '}
        </InputWrapper>
      </Wrapper>
    )
  }

  renderMessages() {
    return this.state.messages.map(this.renderSingleMessage)
  }

  renderSingleMessage = message => {
    return (
      <SingleMessageWrapper key={message.id}>
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

  preventPostEmptyMessage = () => {
    this.setState({
      ...this.state,
      textAreaPlaceholder: 'Please enter your message first !'
    })
  }

  postMessage = () => {
    const timestamp = new Date()
    const timeoptions = {
      hour: 'numeric',
      minute: 'numeric'
    }
    const postingday = timestamp.toLocaleDateString('de-DE')
    const postingtime = timestamp.toLocaleTimeString('de-DE', timeoptions)

    const newText = this.state.tempTextValue
    this.setState({
      messages: [
        ...this.state.messages,
        {
          text: newText,
          firstname: 'Kai',
          timestamp: `${postingday} ⭑ ${postingtime}`,
          id: uid()
        }
      ],
      tempTextValue: '',
      textAreaPlaceholder: 'Write new message here ...'
    })
  }

  save() {
    localStorage.setItem(
      'bandbook-app--messages',
      JSON.stringify(this.state.messages)
    )
  }

  load() {
    try {
      return (
        JSON.parse(localStorage.getItem('bandbook-app--messages')) ||
        defaultMessages
      )
    } catch (err) {
      return defaultMessages
    }
  }
}
