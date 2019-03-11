/*global chrome*/

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
// import * as serviceWorker from "./serviceWorker";

import { combineReducers, createStore } from "redux";
import { Provider } from "react-redux";
import wordReducer from "./reducers/Word-Reducer";
import { loadState, saveState } from "./common/LocalStorage";

const allReducers = combineReducers({
  word: wordReducer
});

const persistedState = loadState();

const store = createStore(allReducers, persistedState);

store.subscribe(() => {
  saveState(store.getState());
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// serviceWorker.unregister();
