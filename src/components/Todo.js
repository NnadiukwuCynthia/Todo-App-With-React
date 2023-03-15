import { FaTrashAlt } from "react-icons/fa";
import Check from "./Check";
import "./style.css";

const Todo = ({ todoItem, todoList, setTodoList }) => {
  const handleDelete = () => {
    setTodoList(todoList.filter((item) => item.id !== todoItem.id));
  };
  return (
    <div className="todoItem">
      <Check />
      <h3 className="todo">{todoItem.name}</h3>
      <FaTrashAlt className="dlt" onClick={handleDelete} />
    </div>
  );
};

export default Todo;
