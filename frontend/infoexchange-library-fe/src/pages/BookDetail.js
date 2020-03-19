import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { Link } from "react-router-dom";

import { getResource } from "../utils";
import { requestAuthors } from "../actions/author";
import {
  requestBooks,
  updateBook,
  updatePendingBook,
  updateSelectedBookId
} from "../actions/book";
import { selectActiveBook } from "../selectors/app";

class BookDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      isbn: "",
      author: "",
      editName: false,
      editISBN: false,
      editAuthor: false
    };

    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    const { book, author } = this.props.activeBook;

    this.props.doUpdateSelectedID(id);

    if (!book) {
      this.props.doRequestBooks();
    } else {
      this.props.doUpdatePendingBook(book);
    }
    if (!author) {
      this.props.doRequestAuthors();
    }
  }

  bookUpdateSubmit(initialBook) {
    const newBookDetails = {
      ...initialBook,
      name: this.state.name !== "" ? this.state.name : initialBook.name,
      isbn: this.state.isbn !== "" ? this.state.isbn : initialBook.isbn,
      author: this.state.author !== "" ? this.state.author : initialBook.author
    };

    /** 
     * Update the pending book lined up and call saga that makes the update call
     */
    this.props.doUpdatePendingBook(newBookDetails);
    this.props.doUpdateBook();
  }

  handleKeyDown(e) {
    if (e.key === "Enter") {
      const { book } = this.props.activeBook;

      this.bookUpdateSubmit(book);
      this.setState({ editName: false, editISBN: false, editAuthor: false });
    }
  }

  render() {
    const { book, author } = this.props.activeBook;

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
                {this.state.editName ? (
                  <input
                    placeholder={book.name}
                    value={this.state.name}
                    onChange={e => this.setState({ name: e.target.value })}
                    onKeyDown={this.handleKeyDown}
                  />
                ) : (
                  <div className="edit-group">
                    <p>
                      {this.state.name === "" ? book.name : this.state.name}
                    </p>
                    <img
                      onClick={() => this.setState({ editName: true })}
                      className="edit"
                      src={getResource("edit.png")}
                    />
                  </div>
                )}
              </div>
              <div className="author-isbn">
                <div className="author">
                  <p>Author</p>
                  <h3>{`${author.first_name} ${author.last_name}`}</h3>
                </div>
                <div className="isbn">
                  <p>ISBN</p>
                  {this.state.editISBN ? (
                    <input
                      placeholder={book.isbn}
                      value={this.state.isbn}
                      onChange={e => this.setState({ isbn: e.target.value })}
                      onKeyDown={this.handleKeyDown}
                    />
                  ) : (
                    <div className="edit-group">
                      <h3>
                        {this.state.isbn === "" ? book.isbn : this.state.isbn}
                      </h3>
                      <img
                        onClick={() => this.setState({ editISBN: true })}
                        className="edit"
                        src={getResource("edit.png")}
                      />
                    </div>
                  )}
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
  activeBook: selectActiveBook
});

const mapDispatchToProps = {
  doUpdateBook: updateBook,
  doRequestBooks: requestBooks,
  doRequestAuthors: requestAuthors,
  doUpdatePendingBook: updatePendingBook,
  doUpdateSelectedID: updateSelectedBookId
};

export default connect(mapStateToProps, mapDispatchToProps)(BookDetail);
