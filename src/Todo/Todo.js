import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import "./Todo.css";
import { userAction } from "../store";
function Todo() {
  const [input, setInput] = useState();
  const dispatch = useDispatch();
  function changeHandler(event) {
    setInput(event.target.value);
  }
  const addtoTodo = () => {
    dispatch(
      userAction.addTodo({
        title: input,
        id: Math.random() * 2,
        completed: false
      })
    );
  };
  return (
    <div>
      <h2 className="todo">Todo List</h2>
      <input
        type="text"
        value={input}
        onChange={changeHandler}
        className="form-control w-75 d-block m-auto"
        placeholder="Add todo"
      />
      <button
        type="button"
        className="btn btn-success btn-outline-primary text-white d-block my-3 mx-auto"
        onClick={addtoTodo}
      >
        Add Todo
      </button>
    </div>
  );
}
export default Todo;
