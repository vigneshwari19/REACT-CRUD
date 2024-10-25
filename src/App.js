import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [items, setItems] = useState([]);
  const [input, setInput] = useState('');
  const [editIndex, setEditIndex] = useState(null);

  const handleAdd = () => {
    if (input) {
      if (editIndex !== null) {
        const updatedItems = items.map((item, index) =>
          index === editIndex ? input : item
        );
        setItems(updatedItems);
        setEditIndex(null);
      } else {
        setItems([...items, input]);
      }
      setInput('');
    }
  };

  const handleEdit = (index) => {
    setInput(items[index]);
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    const updatedItems = items.filter((_, i) => i !== index);
    setItems(updatedItems);
  };

  return (
    <div className="container">
      <h1>CRUD App</h1>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter item"
      />
      <button onClick={handleAdd}>
        {editIndex !== null ? 'Update' : 'Add'}
      </button>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item}
            <div>
              <button onClick={() => handleEdit(index)}>Edit</button>
              <button onClick={() => handleDelete(index)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
  
};

export default App;
