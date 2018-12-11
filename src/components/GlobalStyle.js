import { createGlobalStyle } from 'styled-components'
import backgroundimg from '../data/img/orangebluedrums.jpeg'

export default createGlobalStyle`

* {
  box-sizing: border-box;
}

body {
  margin: 0;
  padding: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  /* background: #efefef; */
  background-image: url(${backgroundimg});
  /* background-image: url("https://source.unsplash.com/400x700/?music,musician"); */
  /* 
  background-image: url("https://source.unsplash.com/400x700/?music,musician");
  Pinklightedstage.jpeg
  orangebluedrums.jpeg
  /bassistonstage.jpeg
  /chineseflute.jpeg 
  /colorfulstage.jpeg
  /doublebass.jpeg
  /fenderstrat.jpeg
  /graffitiwall.jpeg
  /partialmic.jpeg
  /pinkblueconcert.jpeg
  /violin.jpeg
  */

  background-size: cover;

}
`
