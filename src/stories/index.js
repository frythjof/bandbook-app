import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { text, boolean, number } from '@storybook/addon-knobs'

import TextArea from '../components/TextArea'
import Button from '../components/Button'
//import Separator from '../components/Separator'
import Message from '../components/Message'
//import Song from '../components/Song'

//import ToggleButton from '../components/ToggleButton'
//import DurationFillBar from '../components/DurationFillBar'

import StyleBox from './StyleBox'

storiesOf('Message', module).add('default', () => (
  <React.Fragment>
    <Message text={text('Message 1: text', 'Hello world')} />
    <StyleBox h={40} />
    <Message text={text('Message 2: text', 'Lorem ipsum dolor sit')} />
  </React.Fragment>
))

// storiesOf('Separator', module).add('default', () => (
//   <React.Fragment>
//     <Separator text="One" />
//     <StyleBox h={40} />
//     <Separator text="Two words" />
//   </React.Fragment>
// ))

// storiesOf('Song', module).add('default', () => (
//   <React.Fragment>
//     <Song
//       text={text('Song 1: text', 'Hello world')}
//       done={boolean('Song 1: done', false)}
//       onToggle={action('Song 1: onToggle')}
//       onDelete={action('Song 1: onDelete')}
//     />
//     <StyleBox h={40} />
//     <Song
//       text={text('Song 2: text', 'Lorem ipsum dolor sit')}
//       done={boolean('Song 2: done', false)}
//       onToggle={action('Song 2: onToggle')}
//       onDelete={action('Song 2: onDelete')}
//     />
//   </React.Fragment>
// ))

// storiesOf('ToggleButton', module).add('default', () => (
//   <React.Fragment>
//     <ToggleButton
//       isDefault={boolean('isDefault', true)}
//       onClick={action('onClick')}
//       defaultText={text('defaultText', 'Click me')}
//       alternativeText={text('alternativeText', 'I was clicked')}
//     />
//   </React.Fragment>
// ))

storiesOf('ui/Button', module).add('default', () => (
  <React.Fragment>
    <Button text={text('Label', 'Add new message')} />
  </React.Fragment>
))

storiesOf('ui/TextArea', module).add('default', () => (
  <React.Fragment>
    <TextArea
      placeholder={text('Placeholder', 'Write new message here')}
      onEnter={action('onEnter')}
    />
  </React.Fragment>
))

// storiesOf('DurationFillBar', module).add('default', () => (
//   <React.Fragment>
//     <DurationFillBar
//       percentage={number('percentage', 0, {
//         range: true,
//         min: 0,
//         max: 1,
//         step: 0.01
//       })}
//     />
//     <StyleBox h={40} />
//     <DurationFillBar percentage={1 / 3} />
//     <StyleBox h={40} />
//     <DurationFillBar percentage={1 / 2} />
//     <StyleBox h={40} />
//     <DurationFillBar percentage={2 / 3} />
//     <StyleBox h={40} />
//     <DurationFillBar percentage={1} />
//   </React.Fragment>
// ))
