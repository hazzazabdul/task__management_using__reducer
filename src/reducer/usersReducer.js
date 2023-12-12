import getTask from "../assets/utilities/localstorage";

/* eslint-disable no-case-declarations */
export const initialState = {
  users: getTask(),
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "ADD__USER":
      return {
        ...state,
        users: [...state.users, action.payload],
      };

    case "DELETE__USER":
      const filteredUser = state.users.filter(
        (user) => user.id !== action.payload
      );
      return { ...state, users: filteredUser };

    case "UPDATE__USER": //{[{}]}
      console.log(action);
      return {
        ...state,
        users: [...state.users].map((user) => {
          if (user.id === action.payload.id) {
            return { ...user, username: action.payload.updated };
          }
          return user;
        }),
      };

    default:
      return state;
  }
};
