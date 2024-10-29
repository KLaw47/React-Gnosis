import React from "react";

function TodoItem({ todo, index, handleComplete, handleRemove }) {
  return (
    <li>
      {todo}
      {/* conditionally rendering either handle complete or handle remove. */}
      {handleComplete ? (
        <button onClick={() => handleComplete(index)}>Complete</button>
      ) : (
        <button onClick={() => handleRemove(index)}>Remove</button>
      )}
    </li>
  );
}

export default TodoItem;
