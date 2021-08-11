import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import Main from './mainPage'
import SearchPage from './searchPage'
import { Route } from 'react-router-dom'

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

        <Route path="/" exact render={() => (
          <Main books={this.state.books} moveShelf={this.moveShelf}/>
        )}/>

        <Route path="/search" exact render={() => (
          <SearchPage moveShelf={this.moveShelf} books={this.state.books}/>
        )}/>
        
      </div>
    )
  }
}

export default BooksApp
