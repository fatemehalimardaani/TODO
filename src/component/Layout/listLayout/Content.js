import React from "react";
import { AllJobs } from "../listLayout/AllJobs";
import { AddNewJob } from "../../Comp/AddNewJob"

export const Content = () => {
  return (
    <div className="content job-list-content">
      <AllJobs />
      <AddNewJob/>
    </div>
  );
};
