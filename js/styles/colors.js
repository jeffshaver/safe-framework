import Color from 'color'

let accentColor = 'hsl(191, 69%, 42%)'
let body = 'hsl(360, 100%, 100%)'
let bodyText = 'hsl(191, 69%, 20%)'
let fadedBody = Color(body).alpha(0.98).hslString()

export default {
  accentColor,
  body,
  bodyText,
  fadedBody
}