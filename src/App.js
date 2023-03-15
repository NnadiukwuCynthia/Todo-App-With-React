import { useState } from "react";
import "./components/style.css";
import Form from "./components/Form";
import TodoList from "./components/TodoList";
import AllCheck from "./components/AllCheck";
import AllTodo from "./components/AllTodo";

function App() {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);

  return (
    <main className="main-container">
      <div className="container">
        <header className="title">
          <h2>todo list</h2>
        </header>
        <Form
          todo={todo}
          setTodo={setTodo}
          todoList={todoList}
          setTodoList={setTodoList}
        />
        <TodoList todoList={todoList} setTodoList={setTodoList} />
        <hr />
        <AllCheck />
        <hr />
        <AllTodo />
      </div>
    </main>
  );
}

export default App;
