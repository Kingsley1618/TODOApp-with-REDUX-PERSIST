import { useDispatch, useSelector } from "react-redux";
import { userAction } from "../store";
import { useState } from "react";
import { GiCheckMark } from "react-icons/gi";
import "./TodoList.css";
function TodoList() {
  const [inputTwo, setInputTwo] = useState();
  const dispatch = useDispatch();
  const todo = useSelector((state) => state.todo);
  function changeHandlerTwo(event) {
    setInputTwo(event.target.value);
  }
  return (
    <div>
      <ul className="list">
        {todo.map((list) => {
          return (
            <li
              style={{
                textDecoration: list.completed ? "line-through" : "none"
              }}
            >
              {list.completed ? <GiCheckMark /> : null} {list.title}{" "}
              <button
                type="button"
                className="btn delete"
                onClick={() => {
                  dispatch(userAction.deleteTodo({ id: list.id }));
                }}
              >
                Delete
              </button>
              <button
                type="button"
                className="btn complete"
                onClick={() => {
                  dispatch(
                    userAction.completeToggle({
                      id: list.id,
                      completed: list.completed
                    })
                  );
                }}
              >
                complete
              </button>
              <input
                type="text"
                className="form-control"
                onChange={changeHandlerTwo}
              />
              <button
                type="button"
                className="btn btn-sm update"
                onClick={() => {
                  setInputTwo("");
                  dispatch(
                    userAction.updateTodo({
                      id: list.id,
                      title: inputTwo,
                      completed: list.completed
                    })
                  );
                }}
              >
                Update
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
export default TodoList;
