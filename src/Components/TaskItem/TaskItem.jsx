/* eslint-disable react/prop-types */
import classes from "./TaskItem.module.css";
import { useUserContext } from "../../Hook/useUserContext";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { FaEdit } from "react-icons/fa";
import { useState } from "react";
import { IoSaveSharp } from "react-icons/io5";

const TaskItem = ({ user, edit: { isEdit, setIsEdit } }) => {
  const { dispatch } = useUserContext();
  const { id, username } = user;
  const [updated, setUpdated] = useState(username);
  const handleDelete = (id) => {
    dispatch({ type: "DELETE__USER", payload: id });
  };

  const handleEditButton = () => {
    setIsEdit(id);
  };

  const handleSaveButton = (id) => {
    dispatch({ type: "UPDATE__USER", payload: { id, updated } });
    setIsEdit(null);
  };

  return (
    <article className={classes.task__item}>
      {isEdit !== id ? (
        <h4>{username}</h4>
      ) : (
        <input
          value={updated}
          onChange={(event) => setUpdated(event.target.value)}
          type="text"
        />
      )}

      <div className={classes.cta__buttons}>
        {isEdit !== id ? (
          <FaEdit
            color="#0b87ff"
            b
            onClick={handleEditButton}
          />
        ) : (
          <IoSaveSharp
            color="#1c364f"
            onClick={() => handleSaveButton(id)}
          />
        )}

        <RiDeleteBin5Fill
          color="red"
          onClick={() => handleDelete(id)}
        />
      </div>
    </article>
  );
};

export default TaskItem;
