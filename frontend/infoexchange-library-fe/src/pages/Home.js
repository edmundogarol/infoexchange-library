import React from "react";
import { connect } from "react-redux";

import { getResource } from "../utils";
import { requestBooks } from "../actions/book";

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.doRequestBooks();
    console.log("books: ", this.props.books);
  }

  componentDidUpdate() {
    console.log("books: ", this.props.books);
  }

  render() {
    const { books } = this.props;

    console.log("HOME");

    return (
      <div className="App">
        <header className="App-header">
          <a href="/">
            <img
              src={getResource("book.png")}
              className="App-logo"
              alt="logo"
            />
          </a>{" "}
          <p>Welcome to the InfoExchange Library</p>
          <div className="shelf">
            {books.map(book => (
              <a href={`/book/${book.pk}`} key={book.isbn}>
                <div className="book">
                  <img
                    src={getResource("book-icon.png")}
                    className="book-icon"
                    alt={book.name}
                  />
                  <p>{book.name}</p>
                </div>
              </a>
            ))}
          </div>
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
