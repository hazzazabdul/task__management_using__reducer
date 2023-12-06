// eslint-disable-next-line no-unused-vars

/* eslint-disable no-unused-vars */
import classes from "./AddTaskForm.module.css";
import { useContext, useState } from "react";
import { ACTIONS } from "../../assets/utilities/actions";
import TodoContext from "../../assets/utilities/UseTodoContext";

const AddTask = () => {
  // eslint-disable-next-line no-unused-vars
  const { dispatch } = useContext(TodoContext);
  const [text, setText] = useState("");




  const handleFormSubmit = (event) => {
    event.preventDefault();
    dispatch({ type: ACTIONS.ADD__TODO, payload: { text: text } });
    setText("");
  };

  // console.log(todo)
  return (
    <>
    <h1 className={classes.form__heading}>Task Management</h1>
      <form onSubmit={handleFormSubmit} className={classes.TodoForm}>
        <input
        className={classes.todo__input}
          required
          type="text"
          value={text}
          placeholder="Add Task"
           onChange={(e) => setText(e.target.value)}
        />
        <button disabled = {text ? false : true} className={classes.todo__btn}>Add</button>
      </form>
    </>
  );
};

export default AddTask;
