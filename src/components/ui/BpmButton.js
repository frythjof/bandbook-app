import React, { Component } from 'react'
import styled from 'styled-components'
import Sound from 'react-sound'
import PropTypes from 'prop-types'

const StyledBpmButton = styled.button`
  border: 1px solid black;
  background-color: #fefefe;
  font-weight: bold;
  border-radius: 5px;
  margin: 5px;
  padding: 4px;

  &.bpm-blinking {
    background-color: deeppink;
  }
`

export default class BpmButton extends Component {
  state = {
    isRed: false,
    metronomeRunning: false
  }

  static propTypes = {
    tempo: PropTypes.number.isRequired
  }

  componentWillUnmount() {
    clearTimeout(this.timeOut)
  }

  render() {
    return (
      <React.Fragment>
        <StyledBpmButton
          data-cy="BpmButton"
          className={this.state.isRed ? 'bpm-blinking' : null}
          onClick={this.checkMetronome}
        >
          {`${this.props.tempo}bpm`}
        </StyledBpmButton>
        {/* <Sound
          url="../data/audio/Pop.m4a"
          playStatus={
            this.state.isRed ? Sound.status.PLAYING : Sound.status.STOPPED
          }
        /> */}
      </React.Fragment>
    )
  }

  checkMetronome = () => {
    if (this.state.metronomeRunning) {
      clearTimeout(this.timeOut)
      this.setState({
        isRed: false,
        metronomeRunning: false
      })
      console.log('Metronome stopped')
    } else {
      this.startMetronome()
    }
  }

  startMetronome = () => {
    const metronomeSpeed = 30000 / this.props.tempo
    this.timeOut = setTimeout(this.toggleButton, metronomeSpeed)
  }

  toggleButton = () => {
    this.setState({
      isRed: !this.state.isRed,
      metronomeRunning: true
    })
    this.startMetronome()

    console.log('Tick')
    console.log(this.props.tempo)
  }
}

// <audio src="../../data/audio/Pop.m4a" autoplay />
