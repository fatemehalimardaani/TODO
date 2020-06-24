import React from "react";
import { MakeClassName } from "../Comp/global/MakeClassName";
import ThemeContext from "../Comp/global/ThemeContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrashAlt,
  faCheck
} from "@fortawesome/free-solid-svg-icons";

export const Task = ({ job, task }) => {
  const context = React.useContext(ThemeContext);
  return (
    <div
      className={MakeClassName("task ", task.done && "done")}
      id={task.id}
    >
      <p
        className="task-title"
        onClick={() => context.toggleDoneTask(job.id, task.id)}
      >
        {task.title}
      </p>
      <FontAwesomeIcon
        icon={task.done ? faCheck : faTrashAlt}
        className="icon"
        onClick={() => context.deleteTask(job.id, task.id)}
      />
    </div>
  );
};
