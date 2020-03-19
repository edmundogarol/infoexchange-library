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

class AddBook extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      isbn: "",
      author: ""
    };

    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  componentDidMount() {
    const { id } = this.props.match.params;
  }

  bookUpdateSubmit(initialBook) {
    const newBookDetails = {
      ...initialBook,
      name: this.state.name !== "" ? this.state.name : initialBook.name,
      isbn: this.state.isbn !== "" ? this.state.isbn : initialBook.isbn,
      author: this.state.author !== "" ? this.state.author : initialBook.author
    };
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

          <div className="book-details">
            <div className="name">
              <img src={getResource("book-icon.png")} />
              <input
                placeholder="Enter Book Title"
                value={this.state.name}
                onChange={e => this.setState({ name: e.target.value })}
                onKeyDown={this.handleKeyDown}
              />
            </div>
            <div className="author-isbn">
              <div className="author">
                <p>Author</p>{this.state.author}
                <select value={this.state.author} onChange={e => this.setState({ author: e.target.value })}>
                <option value={1}>AMAA</option>
                <option value={2}>Edmundo</option>
                </select>
              </div>
              <div className="isbn">
                <p>ISBN</p>
                <input
                  placeholder="Enter new ISBN"
                  value={this.state.isbn}
                  onChange={e => this.setState({ isbn: e.target.value })}
                  onKeyDown={this.handleKeyDown}
                />
              </div>
            </div>
          </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(AddBook);
