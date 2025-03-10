import React, { useState } from "react";
import "./App.css"; // Import external CSS file

export default function ShoppingList() {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState("");
  const [editIndex, setEditIndex] = useState(null);

  const addItem = () => {
    if (newItem.trim() === "") return;
    if (editIndex !== null) {
      const updatedItems = [...items];
      updatedItems[editIndex] = newItem;
      setItems(updatedItems);
      setEditIndex(null);
    } else {
      setItems([...items, newItem]);
    }
    setNewItem("");
  };

  const removeItem = (index) => {
    setItems(items.filter((_, i) => i !== index));
  };

  const editItem = (index) => {
    setNewItem(items[index]);
    setEditIndex(index);
  };

  return (
    <div className="container">
      <h1>Shopping List</h1>
      <div className="input-container">
        <input
          type="text"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          placeholder="Add a new item"
        />
        <button onClick={addItem} className="add-btn">
          {editIndex !== null ? "Update" : "Add"}
        </button>
      </div>
      <ul>
        {items.map((item, index) => (
          <li key={index} className="list-item">
            <span>{item}</span>
            <div>
              <button onClick={() => editItem(index)} className="edit-btn">Edit</button>
              <button onClick={() => removeItem(index)} className="remove-btn">Remove</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}