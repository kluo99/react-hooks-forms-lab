import React, { useState } from "react";
import { v4 as uuid } from "uuid";



function ItemForm({onAddNewItem}) {
  const [newCategory, setNewCategory] = useState("Produce");
  const [newItem, setNewItem] = useState("");

  function addElement(element) {

  }

  function handleSubmit(e) {
    e.preventDefault();
    const newItemObject = {
      id: uuid(), 
      // newItem,
      // newCategory,
      name: newItem, 
      category: newCategory,
    };

    onAddNewItem(newItemObject);


  }

  return (
    <form onSubmit={handleSubmit} className="NewItem">
      <label>
        Name: 
        <input type="text" onChange={(e) => setNewItem(e.target.value)} name="name" value={newItem} />
      </label>

      <label>
        Category:
        <select name="category" onChange={(e) => setNewCategory(e.target.value)} value={newCategory}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
