import { useState, useEffect }  from 'react';
import LibraryDataService from './services/library';
import Navbar from './Navbar';
import useStyles from './styles/appStyles';

function App() {
  const classes = useStyles ();
  const [ library, setLibrary ] = useState ([])
  const [ myBooks, setMyBooks ] = useState ([])

  const libraries = async () => {
      let response = await LibraryDataService.getBooks();
      setLibrary(response.data.books)
  }

  useEffect (() => {
    libraries ()
  }, [])

  const borrowBook = (id) => {
    let book = library.find (book => book._id === id)
    if ( myBooks.length < 2 && book.copies > 0 && !myBooks.includes(book.title)) {
      let borrowedBook = {_id: book._id, title: book.title, copies: book.copies - 1}
      let newBooks = library.filter ( book => (book._id !== borrowedBook._id))
      setLibrary([borrowedBook, ...newBooks])
      setMyBooks([...myBooks, book.title])
    }
  }

  const returnBook = (id) => {
    let book = library.find (book => book._id === id)
    if ( myBooks.includes (book.title)) {
      let returnedBook = {_id: book._id, title: book.title, copies: book.copies + 1}
      let newBooks = library.filter ( book => (book._id !== returnedBook._id))
      setLibrary([returnedBook, ...newBooks])
      let booksInShelf = myBooks.filter(book => (book !== returnedBook.title))
      setMyBooks([...booksInShelf])
    }
  }

  return (
    <main className = {classes.body}>
      <Navbar books = {myBooks} />
      { library.length > 0 ?
      <ul>
        {library.map(book => (
            <div key = {book._id} className = {classes.books} >
                <li> 
                    <strong> {book.title} </strong>
                    <div > 
                      {book.copies === 0 ? 'No available copies' : book.copies > 1 ? `${book.copies} Copies Available` : `${book.copies} Copy Available` } 
                    </div>
                </li>
                <div className = {classes.buttons}>
                  { (book.copies !== 0) ?
                  <>
                    <div onClick = {() => borrowBook (book._id)} className = {classes.button}> Borrow </div>
                    <div onClick = {() => returnBook (book._id)} className = {classes.button}> Return </div>
                  </> :
                  <>
                     <div onClick = {() => borrowBook (book._id)} className = {classes.disabledButton}> Borrow </div>
                     <div onClick = {() => returnBook (book._id)} className = {classes.button}> Return </div>
                  </>
                  } 
                </div>
            </div>
        ))}
      </ul> 
      :
      <h1> Sorry, there are no books in this library </h1> 
}
    </main>
  );
}

export default App;
