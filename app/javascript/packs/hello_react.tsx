// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import * as React from 'react'
import * as ReactDOM from 'react-dom'
import * as PropTypes from 'prop-types'

import { MuiThemeProvider } from "@material-ui/core";
import theme from "../assets/theme";

import {
  Typography
} from "@material-ui/core";

const Hello = props => (
  <Typography>
    Hello {props.name}ooooooo!
  </Typography>
)

Hello.defaultProps = {
  name: 'David'
}

Hello.propTypes = {
  name: PropTypes.string
}

document.addEventListener('DOMContentLoaded', () => {
  console.log('DOMContentLoaded')
  ReactDOM.render(
    <MuiThemeProvider theme={theme} >
      <Hello name="React" />
    </MuiThemeProvider>,
    document.getElementById('helloReact')
  )
})
