import React, { useState } from 'react';
import axios from 'axios';

const BookForm = ({ fetchBooks }) => {
  const [BookName, setBookName] = useState('');
  const [Description, setDescription] = useState('');
  const [Author, setAuthor] = useState('');
  const [Comment, setComment] = useState('');
  const [Status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:5000/books', { BookName, Description, Author, Comment, Status });
    fetchBooks();
    setBookName('');
    setDescription('');
    setAuthor('');
    setComment('');
    setStatus('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={BookName}
        onChange={(e) => setBookName(e.target.value)}
        placeholder="Book Name"
        required
      />&nbsp;
       <input
        type="text"
        value={Description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
        required
      />&nbsp;
      <input
        type="text"
        value={Author}
        onChange={(e) => setAuthor(e.target.value)}
        placeholder="Author"
        required
      />&nbsp;
      <input
        type="text"
        value={Comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder="Comment"
        required
      />&nbsp;
      <input
        type="text"
        value={Status}
        onChange={(e) => setStatus(e.target.value)}
        placeholder="Status"
        required
      />&nbsp;
      <button type="submit">Add Book</button>
    </form>
    
  );
};

export default BookForm;
