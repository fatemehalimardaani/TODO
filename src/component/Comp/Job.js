import React from "react";
import { MakeClassName } from "../Comp/global/MakeClassName";
import ThemeContext from "../Comp/global/ThemeContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

export const Job = ({ job }) => {
  const context = React.useContext(ThemeContext);
  return (
    <div
      className={MakeClassName(
        "job ",
        context.activeJob === `${job.id}` && "active"
      )}
      tab-content={job.id}
    >
      <p className="job-title" onClick={() => context.setActiveJob(job.id)}>
        {job.title}
      </p>
      <FontAwesomeIcon
        icon={faTrashAlt}
        className="icon"
        onClick={() => context.deleteJob(job.id)}
      />
    </div>
  );
};
