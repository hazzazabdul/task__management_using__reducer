/* eslint-disable react/prop-types */
import { createContext, useReducer } from "react";
import { reducer } from "./reducerFunction";
import { task__manager } from "./localstorage";

const TodoContext = createContext();

export const TodoContextProvider = ({ children }) => {
  const [todo, dispatch] = useReducer(reducer, task__manager());

  return (
    <TodoContext.Provider value={{ todo, dispatch }}>
      {children}
    </TodoContext.Provider>
  );
};

export default TodoContext;
