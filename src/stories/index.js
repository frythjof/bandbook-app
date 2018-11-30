import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { text, boolean, number } from '@storybook/addon-knobs'

import TextArea from '../components/TextArea'
import Button from '../components/Button'
import Separator from '../components/Separator'
import Message from '../components/Message'
//import XY from '../components/XY'

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

storiesOf('ui/Button', module).add('default', () => (
  <React.Fragment>
    <Button
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
