// ########## Import Dependencies Here ##########
import ReactDOM from "react-dom";
import React from "react";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import reduxLogger from "redux-logger";
import createSagaMiddleware from "redux-saga";

// ########## Import Containers Here ##########

// ########## Import Components Here ##########
import App from "./components/App";
import rootReducer from "./reducers";
import rootSaga from "./sagas";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  window.devToolsExtension && window.devToolsExtension(),
  applyMiddleware(sagaMiddleware, reduxLogger)
);

sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#app")
);
