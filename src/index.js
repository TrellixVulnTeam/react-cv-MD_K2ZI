import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css"; //Bootstrap
import "./styles/styles.scss";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";

import "aos/dist/aos.css";

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);
