import React from "react";
import { JobPanel } from "../contentLayout/JobPanel";
import { AddNewTask } from "../../Comp/AddNewTask";

export const JobContent = () => {
  return (
    <div className="job-content">
      <JobPanel/>
      <AddNewTask />
    </div>
  );
};
