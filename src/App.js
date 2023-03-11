import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { store, persistor } from "./store";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import Todo from "./Todo/Todo.js";
import TodoList from "./TodoList/TodoList";
export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <div className="App">
          <Todo />
          <TodoList />
        </div>
      </PersistGate>
    </Provider>
  );
}
