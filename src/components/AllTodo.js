import { useState } from "react";
import "./style.css";

const AllTodo = () => {
  const [allTodo, setAllTodo] = useState([]);
  return (
    <div className="allTodo-div">
      <div className="three-btn">
        <button className="All-btn same">all</button>
        <button className="active-btn same">active</button>
        <button className="complete-btn same">completed</button>
      </div>
      <div>
        <button className="clearAll same">clear completed</button>
      </div>
    </div>
  );
};

export default AllTodo;
