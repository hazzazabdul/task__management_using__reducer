/* eslint-disable react/prop-types */
import { createContext, useEffect, useReducer } from "react";
import { initialState, reducer } from "../reducer/usersReducer";

export const UserContext = createContext({});

export const UserContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);


  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(state.users))
  })
  return (
    <UserContext.Provider value={{ state, dispatch }}>{children}</UserContext.Provider>
  );
};
