import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import "modern-normalize/modern-normalize.css";

import store from "./redux/store";
import App from "../src/App";

import { Provider } from "react-redux";
// import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <PersistGate loading={null} persistor={store.persistor}> */}
      <App />
      {/* </PersistGate> */}
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
