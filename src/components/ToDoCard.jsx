import React from "react";

export default function ToDoCard(props) {
  const { children, handleDeteleTodo, index,handleEditTodo } = props;
  return (
    <li className="todoItem">
      {children}
      <div className="actionsContainer">
        <button onClick={() => handleEditTodo(index)}>
          <i className="fa-regular fa-pen-to-square"></i>
        </button>
        <button onClick={() => handleDeteleTodo(index)}>
          <i className="fa-solid fa-trash"></i>
        </button>
      </div>
    </li>
  );
}
