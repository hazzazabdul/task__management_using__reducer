/* eslint-disable react/prop-types */

import classes from "./TaskItem.module.css";
import { useState } from "react";
import { ACTIONS } from "../../assets/utilities/actions";
import { CiEdit } from "react-icons/ci";
import { MdFileDownloadDone } from "react-icons/md";
import { FaSave } from "react-icons/fa";
import { MdDeleteSweep } from "react-icons/md";

//
const TaskItem = ({ todo, dispatch, edit: { isEdit, setIsEdit } }) => {
  const [updateText, setUpdateText] = useState(todo.text);

  const handleEdit = () => {
    setIsEdit(todo.id);
  };

  const handleDeleteTask = () => {
    dispatch({
      type: ACTIONS.DELETE__TODO,
      payload: { id: todo.id },
    });
  };

  const handleCompleteTask = () => {
    dispatch({
      type: ACTIONS.COMPLETE__TODO,
      payload: { id: todo.id },
    });
  };

  const handleUpdateSave = () => {
    dispatch({
      type: ACTIONS.UPDATE__TODO,
      payload: { text: updateText, id: todo.id },
    });
    setIsEdit(null);
  };

  return (
    <div className={classes.Todo}>
      {isEdit !== todo.id ? (
        <p
          style={{
            color: todo.complete ? "#aaa" :"#fff",
            textDecoration: todo.complete ? "line-through" : "none",
            width: "65%",
            lineBreak: "anywhere",
            fontSize: "18px",
          }}
        >
          {todo.text}
        </p>
      ) : (
        <input
          className={classes.update__input}
          placeholder=""
          type="text"
          value={updateText}
          onChange={(e) => setUpdateText(e.target.value)}
        />
      )}

      <div className={classes.task__call__to__action}>
        {!todo.complete && isEdit !== todo.id && (
          <button
            className={classes.edit__icon}
            onClick={handleEdit}
          >
            <CiEdit />
          </button>
        )}

        {isEdit === todo.id ? (
          <button
            className={classes.save__btn}
            onClick={handleUpdateSave}
          >
            <FaSave />
          </button>
        ) : (
          <button
            className={classes.complete__btn}
            onClick={handleCompleteTask}
          >
            <MdFileDownloadDone />
          </button>
        )}

        <button
          className={classes.delete__icon}
          disabled={isEdit === todo.id}
          onClick={handleDeleteTask}
        >
          <MdDeleteSweep color="red" />
        </button>
      </div>
    </div>
  );
};

export default TaskItem;
