import React from "react";
import { Provider } from "react-redux";
import { createBrowserHistory } from "history";
import createSagaMiddleware from "redux-saga";
import { Router, Route, Switch } from "react-router-dom";
import { createStore, applyMiddleware } from "redux";

import "./App.css";
import Home from "./pages/Home";
import BookDetail from "./pages/BookDetail";
import librarySaga from "./sagas/app";
import appReducer from "./reducers/app";

/**
 * Set up and run app sagas listening for events
 */
const sagaMiddleware = createSagaMiddleware();
const store = createStore(appReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(librarySaga);

function App() {
  const history = createBrowserHistory();

  return (
    <Provider store={store}>
      <Router history={history}>
          <Route exact path="/" component={Home} />
          <Route path="/book/:id" component={BookDetail} />
      </Router>
    </Provider>
  );
}

export default App;
