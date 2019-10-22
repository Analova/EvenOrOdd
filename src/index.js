import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import rootReducer from "./reducers";
import { Provider } from "react-redux";
import App from "./components/App";
import "./index.css";

const store = createStore(rootReducer);

// console.log("store", store);
// console.log("store.getState()", store.getState());

store.subscribe(() => "store.getState()", store.getState());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
