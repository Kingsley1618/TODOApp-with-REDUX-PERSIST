import { createSlice, configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import thunk from "redux-thunk";

const persistConfig = {
  key: "root",
  storage
};
const initialState = {
  todo: []
};
const userSlice = createSlice({
  name: "Todo",
  initialState,
  reducers: {
    addTodo(state, action) {
      state.todo.sort((a, b) => {
        let fa = a.title.toLowerCase();
        let fb = b.title.toLowerCase();
        if (fa < fb) {
          return -1;
        } else if (fb < fa) {
          return 1;
        }
        return 0;
      });
      const newTodo = {
        title: action.payload.title,
        id: action.payload.id,
        completed: action.payload.completed
      };
      state.todo = [...state.todo, newTodo];
    },
    deleteTodo(state, action) {
      state.todo = state.todo.filter((val) => val.id !== action.payload.id);
    },
    completeToggle(state, action) {
      const finding = state.todo.find((val) => val.id === action.payload.id);
      if (finding) {
        finding.completed = !action.payload.completed;
      }
    },
    updateTodo(state, action) {
      state.todo.sort((a, b) => {
        let fa = a.title.toLowerCase();
        let fb = b.title.toLowerCase();
        if (fa < fb) {
          return -1;
        } else if (fb < fa) {
          return 1;
        }
        return 0;
      });
      const finding = state.todo.find((val) => val.id === action.payload.id);
      if (finding) {
        finding.title = action.payload.title;
        finding.completed = action.payload.completed;
      }
    }
  }
});

const persistedReducer = persistReducer(persistConfig, userSlice.reducer);
export const userAction = userSlice.actions;
export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: [thunk]
});
export const persistor = persistStore(store);
