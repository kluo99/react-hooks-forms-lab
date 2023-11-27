import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [userInput, setUserInput] = useState("");

  const [itemList, setItemList] = useState(items);


  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  function handleSearch(event) {
    setUserInput(event.target.value)
  }

  function onAddNewItem(newItem) {
    setItemList([...items, newItem]);
  }

  const filteredItems = itemList.filter((item) => {
    const categoryMatch = selectedCategory === "All" || item.category === selectedCategory;
    const nameMatch = userInput === "" || item.name.toLowerCase().includes(userInput.toLowerCase());
  
    return categoryMatch && nameMatch;
  });

  

  return (
    <div className="ShoppingList">
      <ItemForm onAddNewItem={onAddNewItem}/>
      <Filter handleSearch={handleSearch} onCategoryChange={handleCategoryChange} />
      <ul className="Items">
        {filteredItems.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
