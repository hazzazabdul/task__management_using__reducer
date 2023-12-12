import TaskList from "./Components/TaskList/TaskList";
import AddTaskForm from "./Components/TaskForm/AddTaskForm";
import { UserContextProvider } from "./Context/UsersContext";
import classes from "./App.module.css"


const App = () => {

  return (
    <UserContextProvider>
      <div className={classes.main__container}>
        <AddTaskForm />
        <TaskList />
      </div>
    </UserContextProvider>
  );
};

export default App;
