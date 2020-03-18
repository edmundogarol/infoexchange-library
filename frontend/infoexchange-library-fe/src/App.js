import React, { useEffect, useState } from "react";
import { createStore, applyMiddleware } from "redux";
import { Provider, connect } from "react-redux";
import createSagaMiddleware from "redux-saga";
import librarySaga from "./sagas/app";
import appReducer from "./reducers/app";
import { requestBooks } from "./actions/book";
import { Router, Route } from "react-router-dom";
import { createMemoryHistory } from "history";
import "./App.css";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(appReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(librarySaga);

const STATIC_URL = "http://127.0.0.1:8000/static/"

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = { getBooks: false };
  }

  componentDidUpdate() {
    if (this.state.getBooks) {
      this.props.doRequestBooks();
    }
  }

  render() {
    console.log(this.props);

    return (
      <div className="App">
        <header className="App-header">
          <img src={`${STATIC_URL}/book.png`} className="App-logo" alt="logo" />
          <p>Welcome to the InfoExchange Library</p>
          {this.state.getBooks && <span>Getting books</span>}
          <button onClick={() => this.setState({ getBooks: true })}>
            Fetch books
          </button>
        </header>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { app } = state;
  return {
    books: app.books
  };
};

const mapDispatchToProps = {
  doRequestBooks: requestBooks
};

const HomeWrapper = connect(mapStateToProps, mapDispatchToProps)(Home);

function App(props) {
  const history = createMemoryHistory();

  useEffect(() => {
    console.log("Get books here");
  });

  return (
    <Provider store={store}>
      <Router history={history}>
        <Route exact path="/" component={HomeWrapper} />
        {/* <Route path="/foo" component={Foo} /> */}
      </Router>
    </Provider>
  );
}

export default App;
