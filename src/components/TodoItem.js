//TodoItem is a functional component It will display the text of the todo and it will have a button that will remove the todo from the list.
import React from "react";

function TodoItem({ todo, index, handleRemove }) {
  return (
    <li>
      {todo}
      <button onClick={() => handleRemove(index)}>Remove</button>
    </li>
  );
}

export default TodoItem;
