/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import { useContext } from "react";
import { UserContext } from "../Context/UsersContext";

export const useUserContext = () => {
  return useContext(UserContext);
};

