import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import registerServiceWorker from "./registerServiceWorker"

import { BrowserRouter } from "react-router-dom"
import "semantic-ui-css/semantic.min.css"
import "./App.css"

const app = (
  <BrowserRouter>
    <App />
  </BrowserRouter>
)

ReactDOM.render(app, document.getElementById("root"))
registerServiceWorker()
