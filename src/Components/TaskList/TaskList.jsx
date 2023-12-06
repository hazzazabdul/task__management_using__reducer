import { useContext, useEffect, useState } from "react";
import TaskItem from "../TaskItem/TaskItem";
import TodoContext from "../../assets/utilities/UseTodoContext";

const TaskList = () => {
  const [isEdit, setIsEdit] = useState(null);
  const { todo, dispatch } = useContext(TodoContext);
  console.log(todo)

  useEffect(() => {
    localStorage.setItem("task", JSON.stringify(todo))
  },[todo])

  return (
    <>
      {todo.map((todos) => (
        <TaskItem
          key={todo.id}
          todo={todos}
          dispatch={dispatch}
          edit={{ isEdit, setIsEdit }}
        />
      ))}
    </>
  );
};

export default TaskList;
