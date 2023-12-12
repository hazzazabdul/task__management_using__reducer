/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from "react";
import { useUserContext } from "../../Hook/useUserContext";
import classes from "./AddTaskForm.module.css";

function AddTaskForm() {
  const [username, setUsername] = useState("");
  const { dispatch } = useUserContext();

  const handleSubmitForm = (event) => {
    event.preventDefault();

    const newuser = { id: Date.now(), username: username };
    dispatch({ type: "ADD__USER", payload: newuser });
    setUsername("");
  };

  return (
    <>
      <h2>Task Management</h2>
      <div className={classes.new__task}>
        <form onSubmit={handleSubmitForm}>
          <input
            required
            type="text"
            placeholder="Your Task"
            name="username"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
          
        <button type="submit">Add</button>
        </form>
      </div>
    </>
  );
}

export default AddTaskForm;
