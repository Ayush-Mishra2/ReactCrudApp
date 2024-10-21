import React from "react";
const BookList = ({ books, deleteBook, updateBook, fetchBooks }) => {
  const handleUpdate = (book) => {
    const updatedBookData = {
      BookName: prompt("Enter new Book Name", book.BookName),
      Description: prompt("Enter new Description", book.Description),
      Author: prompt("Enter new Author", book.Author),
      Comment: prompt("Enter new Comment", book.Comment),
    };
    console.log(updatedBookData);
    console.log("BookIDinBookListpage:",book._id)
    updateBook(book._id, updatedBookData);
  };
  return (
    <ul>
      Books:
      {books.map((book) => (
        <li key={book._id}>
          {book.BookName} {book.Description} {book.Author} {book.Comment}{" "}
          {book.Status}&nbsp;
          <button onClick={() => handleUpdate(book)}>Update</button>&nbsp;
          <button onClick={() => deleteBook(book._id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};
export default BookList;