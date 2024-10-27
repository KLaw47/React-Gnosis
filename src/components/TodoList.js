import React from "react";
import { useState } from "react";
import TodoItem from "./TodoItem";

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  return(
    <>
    <h1>TO DO</h1>
    <input type="text" value={input} onChange={handleChange} />
    <button onClick={() => setTodos([...todos, input])}>Add</button>
    <ul>
      {todos.map((todo, index) => (
        <TodoItem
          key={index} //use a unique key, index is fine for this example, I prefer primary keys from a database. (no database here)
          index={index} //pass the index as a prop
          todo={todo} //pass the "todo" as a prop
          //handle remove sets newTodos as an intermediate variable that filters out the todo that matches the index. this is useful for debugging in complex stuff as newTodos can be console.logged.
          handleRemove={(index) => {
            const newTodos = todos.filter((todo, i) => i !== index);
            setTodos(newTodos);
          }}
        />
      ))}
    </ul>
    </>
  );
}

export default TodoList;
