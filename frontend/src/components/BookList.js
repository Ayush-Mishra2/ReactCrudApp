import React from 'react';

const BookList = ({ books, deleteBook,updateBook, fetchBooks }) => {
  return (
    <ul>Books:
      {books.map((book) => (
        <li key={book._id}>
          {book.BookName} {book.Description} {book.Author} {book.Comment} {book.Status}&nbsp;
          <button onClick={() => updateBook(book._id)}>Update</button>&nbsp;
          <button onClick={() => deleteBook(book._id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default BookList;
