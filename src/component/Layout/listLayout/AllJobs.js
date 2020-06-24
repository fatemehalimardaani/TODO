import React from "react";
import { Job } from "../../Comp/Job";
import ThemeContext from '../../Comp/global/ThemeContext'

export const AllJobs = () => {
  const context = React.useContext(ThemeContext);
  return (
    <div>
      {context.jobs.map((job) => (
        <Job job={job} key={job.id}/>
      ))}
    </div>
  );
};
