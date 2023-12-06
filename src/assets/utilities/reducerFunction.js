import { ACTIONS } from "./actions";

export function reducer(todos, action) {
  switch (action.type) {
    case ACTIONS.ADD__TODO:
      return [...todos, newTodo(action.payload.text)];

    case ACTIONS.UPDATE__TODO:
      return todos.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todos, text: action.payload.text };
        }
        return todo;
      });

    case ACTIONS.COMPLETE__TODO:
      return todos.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, complete: !todo.complete };
        }
        return todo;
      });

    case ACTIONS.DELETE__TODO:
      return todos.filter((todo) => todo.id !== action.payload.id);

    default:
      return todos;
  }
}

export function newTodo(text) {
  return {
    id: Date.now(),
    text: text,
    complete: false,
  };
}
