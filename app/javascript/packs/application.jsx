// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

require("@rails/ujs").start()
require("@rails/activestorage").start()
require("channels")


// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)

import { MuiThemeProvider } from "@material-ui/core";
import theme from "../assets/theme";
import * as React from "react";
import * as ReactDOM from 'react-dom';

import HomePage from "./pages/Home";
import WorksShow from "./pages/WorksShow";

document.addEventListener('DOMContentLoaded', () => {
  if (document.getElementById("worksIndex") !== null) {
    const data = JSON.parse(document.getElementById("worksIndex").getAttribute("data"));
    ReactDOM.render((
      <MuiThemeProvider theme={theme}>
        <HomePage objects={data} />
      </MuiThemeProvider>
    ), document.getElementById('worksIndex'))
  }

  if (document.getElementById("worksShow") !== null) {
    const worksShowData = JSON.parse(document.getElementById("worksShow").getAttribute("data"));
    ReactDOM.render((
      <MuiThemeProvider theme={theme}>
        <WorksShow work={worksShowData} />
      </MuiThemeProvider>
    ), document.getElementById('worksShow'))
  }
})
