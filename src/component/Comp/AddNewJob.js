import React from "react";
import ThemeContext from '../Comp/global/ThemeContext'

export const AddNewJob = () => {
  const context = React.useContext(ThemeContext);
  return (
    <div
    className="add-new-job-button"
    onClick={() => context.openModal("job")}
  >
    ADD NEW LIST
  </div>
  );
};
