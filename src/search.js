import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import BookShelf from './bookShelf.js'

class Search extends Component {
  state = {
    books: [],
    value: ""
  }

  findBooks = (query) => {
    console.log(query)
    BooksAPI.search(query).then((books) => {
      console.log(books)
      if(!books.error) 
        this.setState({books: books})
      
    })
  }

  handleChange = (event) => {
    this.setState({value: event.target.value})
    if(event.target.value)
      this.findBooks(event.target.value)
  }

  render() {
    return(
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/" className="close-search">Close</Link>
          <div className="search-books-input-wrapper">
            {/*
              NOTES: The search from BooksAPI is limited to a particular set of search terms.
              You can find these search terms here:
              https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

              However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
              you don't find a specific author or title. Every search is limited by search terms.
            */}
            <input type="text" placeholder="Search by title or author" value={this.state.value} onChange={this.handleChange}/>

          </div>
        </div>
        <div className="search-books-results">
          <BookShelf books={this.state.books} updateShelf={this.props.updateShelf}/>
        </div>
      </div>
    ) 
  }

}

export default Search