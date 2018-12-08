import React, { Component } from 'react'
import Sound from 'react-sound'

export default class MetronomeSound extends Component {
  render() {
    return (
      <Sound url="../data/audio/Pop.m4a" playStatus={Sound.status.PLAYING} />
    )
  }
}
