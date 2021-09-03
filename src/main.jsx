import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import {generateStore} from "../reducers/index";
import App from "./App";



function AppRender() {
  const store = generateStore()
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}

ReactDOM.render(
  <React.StrictMode>
      <AppRender />
  </React.StrictMode>,
  document.getElementById("root")
);