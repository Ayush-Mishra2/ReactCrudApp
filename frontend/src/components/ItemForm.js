import React, { useState } from 'react';
import axios from 'axios';

const ItemForm = ({ fetchItems }) => {
  const [name, setName] = useState('');
  const [SKUCode, setSKU] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:5000/items', { name,SKUCode });
    fetchItems();
    setName('');
    setSKU('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Item name"
        required
      />&nbsp;
       <input
        type="text"
        value={SKUCode}
        onChange={(e) => setSKU(e.target.value)}
        placeholder="SKU Code"
        required
      />&nbsp;
      <button type="submit">Add Item</button>
    </form>
  );
};

export default ItemForm;
