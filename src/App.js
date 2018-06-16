import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import {Route, Link} from 'react-router-dom'
import Listbooks from './listbooks'
import Search from './search'

class BooksApp extends React.Component {
  state = {
    books: []
  }

  componentDidMount = () => {
    BooksAPI.getAll().then((books) => {
      this.setState({books})
    })  
  }

  updateShelf = (value, book) => {
    BooksAPI.update(book, value).then((info) => {
      BooksAPI.getAll().then((books) => {
        this.setState({books})
      })
    })
  }

  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => {
          return (
            <div>
              <Listbooks shelfName="Currently Reading" books={this.state.books} updateShelf={this.updateShelf}/>
              <div className="open-search">
                <Link to="/search" >Add a book</Link>
              </div>
            </div>
          )
        }} />
        <Route path="/search" render={() => {
          return (
            <Search updateShelf={this.updateShelf}/>
          )
        }} />
      </div>
    )
  }
}

export default BooksApp
