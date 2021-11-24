import "./TodoItem.scss";
import { useState } from "react";

const TodoItem = ({ todo, onDelete }) => {

  const [animationIsDelayed, setDelay] = useState(false),
  [deleteBtnClicked, setDeleted] = useState(false);

  setTimeout(() => {
    setDelay(true);
  }, 100);

  return (
    <div
      className={`TodoItem${
        ((deleteBtnClicked && !todo.top) ? " delete__transition-up__stack" : "",
       (deleteBtnClicked && todo.top) ? " delete__transition-up__top" : "",
        todo.added ? " added__transition-up__start" : "",
        animationIsDelayed ? " added__transition-up__finished" : "")
      }`}
    >
      <h3>
        <span className="TodoItem__text">{todo.text}</span>
        <p>{todo.day}</p>
        <span
          className="TodoItem__delete"
          onClick={() => {
            setDeleted(true);
            onDelete(todo);
          }}
        >
          x
        </span>
      </h3>
    </div>
  );
};

export default TodoItem;
