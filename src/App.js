import Title from "./components/Title";
import Form from "./components/Form/Form";
import TodoList from "./components/Todos/TodoList";

const App = () => {
  return (
    <div className="App">
      <Title brand=".⁂." appType="TODOs"></Title>
      <TodoList></TodoList>
      <Form></Form>
    </div>
  );
};

export default App;
