import Color from 'color'

const accentColor = 'hsl(191, 69%, 42%)'
const body = 'hsl(360, 100%, 100%)'
const bodyText = 'hsl(191, 69%, 20%)'
const fadedBody = Color(body).alpha(0.98).hslString()

export default {
  accentColor,
  body,
  bodyText,
  fadedBody
}