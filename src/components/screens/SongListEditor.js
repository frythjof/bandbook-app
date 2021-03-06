import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import uid from 'uid'
import Header from '../Header'

const Wrapper = styled.section`
  display: grid;
  grid-template-rows: 48px auto 48px;
  height: 90vh;
`
const SongsContainer = styled.main`
  overflow-y: scroll;
`
const SingleSongWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 6px;
  background: #fefefe;
  box-shadow: 2px 4px 4px #ddd;
  border-radius: 5px;
  margin: 10px;
  grid-gap: 5px;
`
const NewSongLinkWrapper = styled.div`
  display: flex;

  a:any-link {
    display: flex;
    justify-content: center;
    align-items: center;

    text-decoration: none;
    color: whitesmoke;
    width: 100%;
    background: #000000bb;
    margin: 10px;
    font-size: 14px;
    font-weight: bold;
    border: 2px solid white;
    border-radius: 5px;
  }
`

export default class SongListEditor extends Component {
  state = {
    song: {
      name: '',
      tempo: null,
      key: '',
      timeSignature: '',
      duration: '',
      date: '',
      url: '',
      inProgress: false,
      showSongDetails: true,
      selectedForSetlist: false,
      id: uid()
    }
  }

  name = React.createRef()
  tempo = React.createRef()
  key = React.createRef()
  timeSignature = React.createRef()
  duration = React.createRef()
  date = React.createRef()
  url = React.createRef()

  componentDidMount = () => {
    this.name.current.focus()
  }

  updateInput = event => {
    const input = event.target

    this.setState({
      song: { ...this.state.song, [input.name]: input.value }
    })
  }

  updateTempoInput = event => {
    const tempoNumber = Number(event.target.value)

    this.setState({
      song: { ...this.state.song, [event.target.name]: tempoNumber }
    })
  }

  handleSubmit = () => {
    this.props.newSong(this.state.song)

    this.name.current.value = ''
    this.tempo.current.value = null
    this.key.current.value = ''
    this.timeSignature.current.value = ''
    this.duration.current.value = ''
    this.date.current.value = ''
    this.url.current.value = ''
  }

  render() {
    return (
      <Wrapper>
        <Header title="Song Editor" />
        <SongsContainer>
          <SingleSongWrapper>
            <input
              ref={this.name}
              name="name"
              placeholder="Song name"
              onChange={this.updateInput}
            />
          </SingleSongWrapper>
          <SingleSongWrapper>
            <input
              ref={this.tempo}
              name="tempo"
              type="number"
              placeholder="Tempo"
              onChange={this.updateTempoInput}
            />
          </SingleSongWrapper>
          <SingleSongWrapper>
            <input
              ref={this.key}
              name="key"
              placeholder="Key"
              onChange={this.updateInput}
            />
          </SingleSongWrapper>
          <SingleSongWrapper>
            <input
              ref={this.timeSignature}
              name="timeSignature"
              placeholder="Time signature"
              onChange={this.updateInput}
            />
          </SingleSongWrapper>
          <SingleSongWrapper>
            <input
              ref={this.duration}
              name="duration"
              placeholder="Duration"
              onChange={this.updateInput}
            />
          </SingleSongWrapper>
          <SingleSongWrapper>
            <input
              ref={this.date}
              name="date"
              placeholder="Date"
              onChange={this.updateInput}
            />
          </SingleSongWrapper>
          <SingleSongWrapper>
            <input
              ref={this.url}
              name="url"
              placeholder="URL (e.g. Dropbox)"
              onChange={this.updateInput}
            />
          </SingleSongWrapper>
        </SongsContainer>
        <NewSongLinkWrapper>
          <Link onClick={this.handleSubmit} to="/repertoire">
            {'Save song'}
          </Link>
        </NewSongLinkWrapper>
      </Wrapper>
    )
  }
}
