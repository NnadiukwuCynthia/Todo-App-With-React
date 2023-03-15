import "./style.css";
import shortid from "shortid";

const Form = ({ todo, setTodo, todoList, setTodoList }) => {
  const handleInput = (event) => {
    setTodo(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (todo.trim().length === 0) {
      return;
    }
    setTodoList([...todoList, { name: todo, id: shortid.generate() }]);
    setTodo("");
    console.log(todoList);
  };
  return (
    <form className="inp-div" onSubmit={handleSubmit}>
      <input
        type="text"
        value={todo}
        className="todo-inp"
        placeholder="type to add todo..."
        onChange={handleInput}
      />
      <button className="add-btn" type="submit">
        add todo
      </button>
    </form>
  );
};

export default Form;
