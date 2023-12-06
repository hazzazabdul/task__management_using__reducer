import AddTaskForm from "./Components/TaskForm/AddTaskForm"
import TaskList from "./Components/TaskList/TaskList";
import { TodoContextProvider } from "./assets/utilities/UseTodoContext";
import classes from "./App.module.css"

export const App = () => {
  return (
    <div className={classes.TodoWrapper}>
      <TodoContextProvider>
        <AddTaskForm/>
        <TaskList/>
      </TodoContextProvider>
    </div>
  );
};
