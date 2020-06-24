import React from "react";
import { Task } from "../../Comp/Task";
import ThemeContext from '../../Comp/global/ThemeContext'

export const Content = ({job}) => {
  const context = React.useContext(ThemeContext);
  return (
    <div className="content">
    {context.tasks[job.id].length ? (
      context.tasks[job.id].map((task) => <Task task={task} job={job} key={task.id}/>)
    ) : (
      <div> no task </div>
    )}
  </div>
  );
};
