import React, { useState, useEffect } from "react";
import { Jobs } from "../../helperData/Data";
import { Tasks } from "../../helperData/Data";
import { JobList } from "../Layout/listLayout/JobList";
import { JobContent } from "../Layout/contentLayout/JobContent";
import { GenerateRandomId } from "../Comp/global/GenerateRandomId";
import { Modal } from "../Comp/global/Modal";
import ThemeContext from "../Comp/global/ThemeContext";

const useStateWithLocalStorage = (localStorageKey,defaultValue) => {
  // localStorage.clear();
  let myLocal = localStorage.getItem(localStorageKey);
  if (myLocal === "undefined" || myLocal === null) {
    myLocal = JSON.stringify(defaultValue);
    localStorage.setItem(localStorageKey, myLocal);
  }
  return JSON.parse(myLocal);
};

export const App = () => {
  const [activeJob, setActiveJob] = useState("job1");
  const [jobs, setJobs] = useState(useStateWithLocalStorage("myJobs",Jobs)) ;
  const [tasks, setTasks] = useState(useStateWithLocalStorage("myTasks",Tasks));
  const [ModalState, setModalState] = useState(false);
  const [newElement, setNewElement] = useState("job");

  useEffect(() => {
    let jsonJobs = JSON.stringify(jobs);
    localStorage.setItem("myJobs", jsonJobs);
    let jsonTasks = JSON.stringify(tasks);
    localStorage.setItem("myTasks", jsonTasks);
  }, [jobs,tasks]);
  
  const changeActiveJob = (jobId) => setActiveJob(jobId);
  const deleteJob = (jobId) => {
    let deletedJobIndex = jobs.findIndex((job) => job.id === jobId);
    let newlistOfJobs = jobs.filter((job) => job.id !== jobId);

    if (newlistOfJobs.length === 0) setActiveJob("");
    else if (jobId === activeJob) {
      if (deletedJobIndex === jobs.length - 1)
        setActiveJob(newlistOfJobs[0].id);
      else setActiveJob(newlistOfJobs[deletedJobIndex].id);
    }
    setJobs(newlistOfJobs);
  };
  const addJob = (newName) => {
    let newID = GenerateRandomId();
    setJobs([...jobs, { id: newID, title: newName }]);
    setTasks({ ...tasks, [newID]: [] });
    setActiveJob(newID);
  };
  const toggleDoneTask = (jobId, taskId) => {
    let myTask = tasks[jobId].find((task) => task.id === taskId);
    myTask.done = !myTask.done;
    setTasks({ ...tasks });
  };
  const deleteTask = (jobId, taskId) => {
    let newTasks = tasks[jobId].filter((task) => task.id !== taskId);
    setTasks({ ...tasks, [jobId]: newTasks });
  };
  const addTask = (newName) => {
    if (activeJob) {
      let newID = GenerateRandomId();
      let newTask = { id: newID, title: newName, done: false };
      let newJob = [...tasks[activeJob], newTask];
      setTasks({ ...tasks, [activeJob]: newJob });
    }
  };
  const saveModal = (newName) => {
    if (newElement === "job") addJob(newName);
    else addTask(newName);
    setModalState(false);
  };
  const openModal = (newElement) => {
    setModalState(true);
    setNewElement(newElement);
  };

  return (
    <div className="App">
      <div className="main-box">
        <ThemeContext.Provider
          value={{
            activeJob,
            setActiveJob,
            jobs,
            setJobs,
            tasks,
            setTasks,
            changeActiveJob,
            deleteJob,
            addJob,
            toggleDoneTask,
            deleteTask,
            addTask,
            openModal,
            setModalState,
            saveModal,
          }}
        >
          <JobList />
          <JobContent />
          {ModalState && <Modal />}
        </ThemeContext.Provider>
      </div>
    </div>
  );
};
