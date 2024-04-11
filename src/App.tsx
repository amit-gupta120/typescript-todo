import React, { useState } from "react";
import "./App.css";
import InputField from "./components/InputField";
import { Todo } from "../src/model";
import TodoList from "./components/TodoList";

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>(" ");
  const [todos, setTodos] = useState<Todo[]>([]);

  // console.log("Todo", todo);

  const handleAddTodo = (e: React.FormEvent) => {
    e.preventDefault();
    if (todo) {
      setTodos([...todos, { id: Date.now(), todo: todo, isDone: false }]);
    }
    setTodo("");
  };
  console.log(todos);
  return (
    <div className="App">
      <div className="heading">Taskify</div>

      <InputField todo={todo} setTodo={setTodo} handleAddTodo={handleAddTodo} />
      {/* <TodoList /> */}

      {todos.map((item) => (
        <li>{item.todo}</li>
      ))}
    </div>
  );
};

export default App;
