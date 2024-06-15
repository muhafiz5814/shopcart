import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import store from "./store";
import { PersistGate } from "redux-persist/integration/react";

ReactDOM.render(
  <Provider store={store.store}>
    <PersistGate loading={<h2>Loading...</h2>} persistor={store.persistor}>
      <App />
    </PersistGate>
  </Provider>, 
  document.getElementById("root")
);
