import React from "react";
import { Header } from "../../Comp/Header";
import { Content } from "../listLayout/Content";

export const JobList = () => {
  return (
    <div className="job-list">
      <Header text="TASK LISTS"/>
      <Content/>
    </div>
  );
};
