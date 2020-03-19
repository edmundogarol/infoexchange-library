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
import { selectAuthors } from "../selectors/app";

class AddBook extends React.Component {
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
    const { authors } = this.props;

    if (!authors.length) {
      this.props.doRequestAuthors();
    }
  }

  bookUpdateSubmit() {
    this.props.doUpdatePendingBook({
      name: this.state.name,
      isbn: this.state.isbn,
      author: this.state.author
    });
    this.props.doUpdateBook();
  }

  handleKeyDown(e) {
    if (e.key === "Enter") {
      this.bookUpdateSubmit();
      this.setState({ editName: true, editISBN: true, editAuthor: true });
    }
  }

  render() {
    const { authors } = this.props;

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
              {this.state.editName ? (
                <p>{this.state.name}</p>
              ) : (
                <input
                  placeholder="Enter Book Title"
                  value={this.state.name}
                  onChange={e => this.setState({ name: e.target.value })}
                  onKeyDown={this.handleKeyDown}
                />
              )}
            </div>
            <div className="author-isbn">
              <div className="author">
                <p>Author</p>
                <select
                  value={this.state.author}
                  onChange={e => this.setState({ author: e.target.value })}
                >
                  {authors.map(author => (
                    <option
                      key={author.pk}
                      value={author.pk}
                    >{`${author.first_name} ${author.last_name}`}</option>
                  ))}
                </select>
              </div>
              <div className="isbn">
                <p>ISBN</p>

                {this.state.editISBN ? (
                  <h3>{this.state.isbn}</h3>
                ) : (
                  <input
                    placeholder="Enter new ISBN"
                    value={this.state.isbn}
                    onChange={e => this.setState({ isbn: e.target.value })}
                    onKeyDown={this.handleKeyDown}
                  />
                )}
              </div>
            </div>
          </div>
        </header>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  authors: selectAuthors
});

const mapDispatchToProps = {
  doUpdateBook: updateBook,
  doRequestAuthors: requestAuthors,
  doUpdatePendingBook: updatePendingBook
};

export default connect(mapStateToProps, mapDispatchToProps)(AddBook);
