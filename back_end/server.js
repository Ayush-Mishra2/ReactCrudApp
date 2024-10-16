const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Define a simple schema
const ItemSchema = new mongoose.Schema({
  name: String,
  SKUCode: String,
});

const Item = mongoose.model('Item', ItemSchema);

// CRUD routes
app.post('/items', async (req, res) => {
  const newItem = new Item(req.body);
  await newItem.save();
  res.json(newItem);
});

app.get('/items', async (req, res) => {
  const items = await Item.find();
  res.json(items);
});

app.get('/items/:id', async (req, res) => {
 /* const itemId = req.query.params.id; 
  const itemFound = items.filter(checkItem(item)); 
  function checkItem(item) 
  { return item.id == itemId; }
  res.json(itemFound);*/
  const items = await Item.findById(req.params.id);
  res.json(items);
});

app.put('/items/:id', async (req, res) => {
  const updatedItem = await Item.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updatedItem);
});

app.delete('/items/:id', async (req, res) => {
  await Item.findByIdAndDelete(req.params.id);
  res.json({ message: 'Item deleted' });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
