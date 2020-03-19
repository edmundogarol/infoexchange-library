import React from "react";
import { Provider } from "react-redux";
import { createMemoryHistory } from "history";
import createSagaMiddleware from "redux-saga";
import { Router, Route } from "react-router-dom";
import { createStore, applyMiddleware } from "redux";

import "./App.css";
import Home from "./pages/Home";
import librarySaga from "./sagas/app";
import appReducer from "./reducers/app";

/**
 * Set up and run app sagas listening for events
 */
const sagaMiddleware = createSagaMiddleware();
const store = createStore(appReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(librarySaga);

function App() {
  const history = createMemoryHistory();

  return (
    <Provider store={store}>
      <Router history={history}>
        <Route exact path="/" component={Home} />
      </Router>
    </Provider>
  );
}

export default App;
