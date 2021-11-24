import "./TodoList.scss";
import TodoItem from "./TodoItem";

const TodoList = ({ todos, onDelete }) => {
  return (
    <div className="TodoList">
      {todos.map((todo, index) => (
        <TodoItem key={index} todo={todo} onDelete={onDelete}></TodoItem>
      ))}
    </div>
  );
};

export default TodoList;
