import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import "./Todo.css";
import { userAction } from "../store";
function Todo() {
  const [input, setInput] = useState();
  const [btnable, setBtnable] = useState(true);
  const dispatch = useDispatch();
  function changeHandler(event) {
    setInput(event.target.value);
  }
  const addtoTodo = () => {
    dispatch(
      userAction.addTodo({
        title: input,
        id: Math.random() * 2,
        completed: false,
      })
    );
  };

  useEffect(() => {
    if (!input || input.trim().length <= 1) {
      setBtnable(true);
    } else {
      setBtnable(false);
    }
  }, [input]);
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
        disabled={btnable}
        className="btn btn-success border-white btn-outline-primary text-white d-block my-3 mx-auto"
        onClick={addtoTodo}
      >
        Add Todo
      </button>
    </div>
  );
}
export default Todo;
