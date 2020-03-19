import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { Link } from "react-router-dom";

import { getResource } from "../utils";
import { requestBooks } from "../actions/book";
import { requestAuthors } from "../actions/author";
import { selectBooks, selectAuthors } from "../selectors/app";

class Home extends React.Component {
  componentDidMount() {
    this.props.doRequestBooks();
    this.props.doRequestAuthors();
  }

  render() {
    const { books, authors } = this.props;

    return (
      <div className="App">
        <header className="App-header">
          <Link to="/">
            <img
              src={getResource("book.png")}
              className="App-logo"
              alt="logo"
            />
          </Link>
          <p>Welcome to the InfoExchange Library</p>
          <div className="shelf">
            {books.map(book => (
              <Link to={`/book/${book.pk}/`} key={book.isbn}>
                <div className="book">
                  <img
                    src={getResource("book-icon.png")}
                    className="book-icon"
                    alt={book.name}
                  />
                  <p>{book.name}</p>
                </div>
              </Link>
            ))}
            <Link to={`/add/`}>
              <div className="book">
                <img
                  src={getResource("add.png")}
                  className="book-icon"
                  alt={"Create book"}
                />
                <p>Create Book</p>
              </div>
            </Link>
          </div>
        </header>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  books: selectBooks,
  authors: selectAuthors
});

const mapDispatchToProps = {
  doRequestBooks: requestBooks,
  doRequestAuthors: requestAuthors
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
