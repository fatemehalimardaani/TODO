import React from "react";
import { JobTab } from "../contentLayout/JobTab";
import ThemeContext from '../../Comp/global/ThemeContext'

export const JobPanel = () => {
    const context = React.useContext(ThemeContext);
    return(
        context.jobs.map((job) => (
            <JobTab job={job} key={job.id}/>
           ))
    )
   
};


