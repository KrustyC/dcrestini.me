import { injectGlobal } from 'styled-components'
import { lighten } from 'polished'

// eslint-disable-next-line
injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Roboto+Mono|Special+Elite');

  html, body {
    font-family: 'Roboto Mono', mono;
    margin: 0;
    padding: 0;
    overflow: hidden !important;
    color: white;
  }

  ::-webkit-scrollbar {
    width: 6px;
  }

  ::-webkit-scrollbar-track {
      box-shadow: inset 5px 5px 5px #D9D8DB; 
      border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb {
      background: #F5675E;
      border-radius: 0px;
  }
`

// @TODO use this acrpss the platform

const PRIMARY = '#F26565'
const ACCENT = '#3445BF'
const INFO = '#2196F3'
const LINK = '#03A9F4'
const DANGER = '#F44336'
const WARNING = '#FFC107'
const DARK = '#1f2e41'
const GREY = '#BDBDBD'

export default {
  colors: {
    primary: PRIMARY,
    accent: ACCENT,
    info: INFO,
    link: LINK,
    danger: DANGER,
    warning: WARNING,
    dark: DARK,
    grey: GREY,
    light: lighten(0.5, GREY)
  }
}
