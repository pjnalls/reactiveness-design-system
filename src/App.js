import Title from "./components/Title";
import Form from "./components/Form/Form";
import TodoList from "./components/Todos/TodoList";
import { TODOS } from "./data/Todos";
import { useState } from "react";

const App = () => {
  const [todos, setTodos] = useState(TODOS);

  const deleteTodo = (todo) => {
    setTimeout(() => {
      setTodos(todos.filter((t) => t.id !== todo.id));
    }, 1000);
  };

  return (
    <div className="App">
      <Title brand=".⁂." appType="TODOs"></Title>
      <TodoList todos={todos} onDelete={deleteTodo}></TodoList>
      <Form></Form>
    </div>
  );
};

export default App;
