import React from "react";
import ReactDOM from "react-dom";
import { Timer } from "./containers/Timer";
import "./index.css";
import { configureStore, Provider } from "./store/slomux";

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <Timer />
  </Provider>,
  document.getElementById("root")
);
