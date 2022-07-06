import React from "react"
import ReactDOM from "react-dom"

import App from "./components/App"
import GlobalStyles from "./components/GlobalStyles"
import ThemeProvider from "./components/ThemeProvider"

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
    <GlobalStyles />
  </React.StrictMode>,
  document.getElementById("root")
)
