import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";
import "./index.css";
import App from "./components/App";
import { GlobalStyle } from "./components/GlobalStyle/GlobalStyle";
import { Normalize } from "./components/GlobalStyle/Normalize";

import { theme } from "./constants/theme";

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <Normalize />
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
