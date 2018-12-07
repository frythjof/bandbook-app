import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { text, boolean, number } from '@storybook/addon-knobs'

import TextArea from '../components/ui/TextArea'
import SubmitButton from '../components/ui/SubmitButton'
import Separator from '../components/ui/Separator'
import Message from '../components/ui/Message'
import BpmButton from '../components/ui/BpmButton'

import StyleBox from './StyleBox'

storiesOf('Message', module).add('default', () => (
  <React.Fragment>
    <Message text={text('Message 1: text', 'Hello world')} />
    <StyleBox h={40} />
    <Message text={text('Message 2: text', 'Lorem ipsum dolor sit')} />
  </React.Fragment>
))

storiesOf('Separator', module).add('default', () => (
  <React.Fragment>
    <Separator userfirstname="User1" />
    <StyleBox h={40} />
    <Separator width={number('Line width: ', 8)} userfirstname="User2" />
  </React.Fragment>
))

storiesOf('Bpm-Button', module).add('default', () => (
  <React.Fragment>
    <BpmButton tempo={number('BPM: ', 80)} onClick={action('Blinking')} />
  </React.Fragment>
))

storiesOf('ui/SubmitButton', module).add('default', () => (
  <React.Fragment>
    <SubmitButton
      text={text('Label', 'Post message')}
      onButtonClick={action('onButtonClick')}
    />
  </React.Fragment>
))

storiesOf('ui/TextArea', module).add('default', () => (
  <React.Fragment>
    <TextArea
      placeholder={text('Placeholder', 'Write new message here')}
      updateTempTextValue={action('change tempTextValue in state')}
    />
  </React.Fragment>
))
