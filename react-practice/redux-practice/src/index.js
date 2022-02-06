import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import "./index.css";
import App from "./App";
import Auth from "./components/Auth";
import Header from "./components/Header";
import store from "./store/index";

ReactDOM.render(
  <Provider store={store}>
    <Header></Header>
    <Auth />
    <App />
  </Provider>,
  document.getElementById("root")
);
