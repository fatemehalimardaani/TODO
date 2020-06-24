import React from "react";
import ThemeContext from '../Comp/global/ThemeContext';

export const AddNewTask = () => {
  const context = React.useContext(ThemeContext);
 
  return (
    <div className="add-new-task" onClick={() => context.openModal("task")}>+</div>
  );
};
