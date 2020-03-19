import React from "react";
import { connect } from "react-redux";

import { getResource } from "../utils";
import { requestBooks } from "../actions/book";

class BookDetail extends React.Component {
  componentDidMount() {
    if (!this.props.books.length) {
      this.props.doRequestBooks();
    }
  }

  render() {
    const { books } = this.props;
    const { id } = this.props.match.params;

    const book = books.find(book => book.pk === parseInt(id, 10));
    console.log("books", books);

    return (
      <div className="App">
        <header className="App-header">
          <a href="/" className="small-home">
            <img
              src={getResource("book.png")}
              className="App-logo"
              alt="logo"
            />
          </a>

          {book ? (
            <div className="book-details">
              <div className="name">
                <img src={getResource("book-icon.png")} />
                <p>{book.name}</p>
              </div>
              <div className="author-isbn">
                <div className="author">
                  <p>Author</p>
                  <h3>Gday Punch Manga Magazine</h3>
                </div>
                <div className="isbn">
                  <p>ISBN</p>
                  <h3>{book.isbn}</h3>
                </div>
              </div>
            </div>
          ) : (
            "Loading books..."
          )}
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

export default connect(mapStateToProps, mapDispatchToProps)(BookDetail);
