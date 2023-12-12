/* eslint-disable react/prop-types */
import TaskItem from "../TaskItem/TaskItem";
import classes from "./TaskList.module.css";
import { useUserContext } from "../../Hook/useUserContext";
import { useState } from "react";

const TaskList = () => {
  const { state } = useUserContext();
  const [isEdit, setIsEdit] = useState(null);

  return (
    <section className={classes.task__list}>
      {
        state.users.length > 0 ? 
        state.users.map((user) => (
        <TaskItem
          key={user.id}
          user={user}
          edit={{ isEdit, setIsEdit }}
        />
      )) :
          <h3>No Task Added</h3>
      }
    </section>
  );
};

export default TaskList;
