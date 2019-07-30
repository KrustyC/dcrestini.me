import { lighten, darken } from 'polished'

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
  },
  utils: {
    softDarken: color => darken(0.2, color),
    hardDarken: color => darken(0.5, color),
    softLighten: color => lighten(0.2, color),
    hardLighten: color => lighten(0.5, color)
  }
}
