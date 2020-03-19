import React from "react";
import { connect } from "react-redux";

import { getResource } from "../utils";
import { requestBooks } from "../actions/book";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = { getBooks: false };
  }

  componentDidUpdate() {
    if (this.state.getBooks) {
      this.props.doRequestBooks();
      this.setState({ getBooks: false });
    }

    console.log('books: ', this.props.books);
  }

  render() {
    console.log(this.props);

    return (
      <div className="App">
        <header className="App-header">
          <img src={getResource("book.png")} className="App-logo" alt="logo" />
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

export default connect(mapStateToProps, mapDispatchToProps)(Home);
