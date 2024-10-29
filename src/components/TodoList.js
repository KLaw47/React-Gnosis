import React from "react";
import { useState } from "react";
import TodoItem from "./TodoItem";

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  const [doneTodos, setDoneTodos] = useState([]);

  const handleChange = (e) => {
    setInput(e.target.value);
  };
  console.log(doneTodos)

  return(
    <>
    <h1>TO DO</h1>
    <input type="text" value={input} onChange={handleChange} />
    <button onClick={() => {setTodos([...todos, input]);
    setInput("");
    }}>Add</button>
    <ul>
      {todos.map((todo, index) => (
        <TodoItem
          key={index} //use a unique key, index is fine for this example, I prefer primary keys from a database. (no database here)
          index={index} //pass the index as a prop
          todo={todo} //pass the "todo" as a prop
          //handle remove sets newTodos as an intermediate variable that filters out the todo that matches the index. this is useful for debugging in complex stuff as newTodos can be console.logged.

          // get the todo that matches the index
          // use setDoneTodos to add the todo to the doneTodos array
          // use setTodos to update todos by filtering out completed item
          handleComplete={() => {
            const completedTodo = todos[index];
            setDoneTodos([...doneTodos, completedTodo]);
            const newTodos = todos.filter((_todo, i) => i !== index);
            setTodos(newTodos);
          }}
        />
      ))}
    </ul>
    <ul>
  {doneTodos.map((todo, index) => (
    <TodoItem
      key={index}
      index={index}
      todo={todo}
      handleRemove={(index) => {
        const newDoneTodos = doneTodos.filter((_, i) => i !== index);
        setDoneTodos(newDoneTodos);
      }}
    />
  ))}
</ul>
    </>
  );
}

export default TodoList;
