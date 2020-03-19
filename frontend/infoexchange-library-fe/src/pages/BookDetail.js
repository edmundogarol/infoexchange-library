import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { Link } from "react-router-dom";

import { getResource } from "../utils";
import { requestBooks } from "../actions/book";
import { requestAuthors } from "../actions/author";
import { selectBooks, selectAuthors } from "../selectors/app";

class BookDetail extends React.Component {
  componentDidMount() {
    if (!this.props.books.length) {
      this.props.doRequestBooks();
    }
    if (!this.props.authors.length) {
      this.props.doRequestAuthors();
    }
  }

  render() {
    const { books, authors } = this.props;
    const { id } = this.props.match.params;

    console.log("books", books);
    const book = books.find(book => parseInt(book.pk, 10) === parseInt(id, 10));
    console.log("book", book);
    console.log("authors", authors);
    const author = authors.find(
      author => parseInt(author.pk, 10) === parseInt(book.author, 10)
    );
    console.log("author", author);

    return (
      <div className="App">
        <header className="App-header">
          <Link to="/" className="small-home">
            <img
              src={getResource("book.png")}
              className="App-logo"
              alt="logo"
            />
          </Link>

          {book && author ? (
            <div className="book-details">
              <div className="name">
                <img src={getResource("book-icon.png")} />
                <p>{book.name}</p>
              </div>
              <div className="author-isbn">
                <div className="author">
                  <p>Author</p>
                  <h3>{`${author.first_name} ${author.last_name}`}</h3>
                </div>
                <div className="isbn">
                  <p>ISBN</p>
                  <h3>{book.isbn}</h3>
                </div>
              </div>
            </div>
          ) : (
            "Loading books & authors..."
          )}
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

export default connect(mapStateToProps, mapDispatchToProps)(BookDetail);
