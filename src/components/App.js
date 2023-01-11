import React from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";
import { useState } from "react";

function App() {
  const [ isDarkMode, setDarkMode ] = useState(false);

  const handleClick = () => {
    setDarkMode(prevMode => !prevMode);
  }

  return (
    <div className={isDarkMode ? "App dark" : "App light"}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleClick}>{isDarkMode ? "Light Mode" : "Dark Mode"}</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
