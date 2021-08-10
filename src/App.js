import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import Main from './mainPage'
import SearchPage from './searchPage'

class BooksApp extends React.Component {
  state = {
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({books})
    })
  }

  moveShelf = (book, shelf) => {
    BooksAPI.update(book,shelf)
    BooksAPI.getAll().then((books) => {
      this.setState({books})
    })
  }

  render() {
    return (
      <div className="app">
        {/* { <Main books={this.state.books} moveShelf={this.moveShelf}/>} */}
        <SearchPage />
      </div>
    )
  }
}

export default BooksApp
