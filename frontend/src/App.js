import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ItemForm from './components/ItemForm';
import ItemList from './components/ItemList';

const App = () => {
  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    const res = await axios.get('http://localhost:5000/items');
    setItems(res.data);
  };

  const deleteItem = async (id) => {
    await axios.delete(`http://localhost:5000/items/${id}`);
    fetchItems();
  };
  const updateItem= async(id) =>{
    const res = await axios.put(`http://localhost:5000/items/${id}`);
  };
  useEffect(() => {
    fetchItems();
  }, []);

  return (
    <div>
      <h1>REACT CRUD APPLICATION</h1>
      <ItemForm fetchItems={fetchItems} />
      <ItemList items={items} deleteItem={deleteItem} fetchItems={fetchItems} updateItem={updateItem}/>
    </div>
  );
};

export default App;
