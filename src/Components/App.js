import React, { useState } from 'react'
import Todolist from "./TodoList";

function App() {
  
  const [items, setItems] = useState([])
  const title = 'Things to do';

  const addNewItem = (text) => {
    setItems( items => {
    const nextId = items.length + 1;
    const newItem = {
        id: nextId,
        text: text
    }
    return [...items, newItem]
    })
  }

  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <Todolist title={title} items={items} addNewItem={addNewItem}/>
        </div>
      </div>
    </div>
  );
}

export default App;
