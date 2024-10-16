import React from 'react';

const ItemList = ({ items, deleteItem,updateItem, fetchItems }) => {
  return (
    <ul>Items:
      {items.map((item) => (
        <li key={item._id}>
          {item.name} {item.SKUCode}&nbsp;
          <button onClick={() => updateItem(item._id)}>Update</button>&nbsp;
          <button onClick={() => deleteItem(item._id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default ItemList;
