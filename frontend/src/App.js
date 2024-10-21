import React, { useEffect, useState } from 'react';
import axios from 'axios';
import BookForm from './components/BookForm';
import BookList from './components/BookList';

const App = () => {
  const [books, setBooks] = useState([]);

  const fetchBooks = async () => {
    const res = await axios.get('http://localhost:5000/books');
    setBooks(res.data);
  };

  const deleteBook = async (id) => {
    await axios.delete(`http://localhost:5000/books/${id}`);
    fetchBooks();
  };
  const updateBook= async(id) =>{
    const res = await axios.put(`http://localhost:5000/books/${id}`);
  };
  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <div>
      <h1>Books in the Library</h1>
      <BookForm fetchBooks={fetchBooks} />
      <BookList books={books} deleteBook={deleteBook} fetchBooks={fetchBooks} updateBook={updateBook}/>
    </div>
  );
};

export default App;
