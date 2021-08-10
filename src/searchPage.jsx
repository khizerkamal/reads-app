import React,{ Component } from 'react'
import Book from './book'
import * as BooksAPI from './BooksAPI'

export default class searchPage extends Component {
  state = {
    keyword: '',
    booksFound: []
  }

  updateStateKeyword = (keyword) => {
    this.setState({ keyword })
    this.updateStateBooks(keyword)
  }

  updateStateBooks = (keyword) => {
    if (keyword) {
      BooksAPI.search(keyword).then((booksFound) => {
        if (booksFound.error) {
          this.setState({booksFound: []})
        } else {
          this.setState({booksFound})
        }
      })
    } else {
      this.setState({booksFound: []})
    }
  }

  render() {
        return (
            <div className="search-books">
            <div className="search-books-bar">
              <button className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</button>
              <div className="search-books-input-wrapper">
                {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
                <input
                  type="text"
                  placeholder="Search by title or author"
                  value={this.state.keyword}
                  onChange={(e) => this.updateStateKeyword(e.target.value)}
                />

              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid">
                {
                  this.state.booksFound.map(books => (
                    <li key={books.id}>
                      <Book book={books}/>
                    </li>
                  ))
                }
              </ol>
            </div>
          </div>
        )
    }
}
