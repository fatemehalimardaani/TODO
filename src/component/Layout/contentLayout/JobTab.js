import React from "react";
import { Header } from "../../Comp/Header";
import { Content } from "../contentLayout/Content";
import {MakeClassName} from '../../Comp/global/MakeClassName'
import ThemeContext from '../../Comp/global/ThemeContext'

export const JobTab = ({job}) => {
  const context = React.useContext(ThemeContext);
  return (
    <div
      className={MakeClassName(
        "job-tap ",
        context.activeJob === `${job.id}` && "active"
      )}
      id={job.id}
    >
      <Header text={job.title}/>
      <Content job={job} />
    </div>
  );
};
