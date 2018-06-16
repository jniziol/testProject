import React, {Component} from 'react'
import BookShelf from './bookShelf.js'

class Listbooks extends Component {
  render() {
    const shelfTypes = [{ type: 'currentlyReading', title: 'Currently Reading' },
                        { type: 'wantToRead',  title: 'Want to Read' },
                        { type: 'read', title: 'Read'}]

    return(
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            {shelfTypes.map((shelf => {
              const books = this.props.books.filter(book => book.shelf === shelf.type) 
              return (
                <div key={shelf.type} className="bookshelf">
                  <h2 className="bookshelf-title">{shelf.title}</h2>
                  <div className="bookshelf-books">                 
                    <BookShelf books={books} updateShelf={this.props.updateShelf}/>
                  </div>
                </div>
              )
            }))}          
          </div>
        </div>
      </div>                 
    ) 
  }

}

export default Listbooks