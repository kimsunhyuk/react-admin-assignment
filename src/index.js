import React from "react";
import ReactDOM from "react-dom";
import App from "./App.js";
import { createStore } from "redux";
import reducer from "./reducers";
import { Provider } from "react-redux";

const devTools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const store = createStore(reducer, devTools);
console.log(store.getState());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
