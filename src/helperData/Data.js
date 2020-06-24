export const Jobs = [
  { id: "job1", title: "job1" },
  { id: "job2", title: "job2" },
  { id: "job3", title: "job3" }
];
export const Tasks = {
  "job1": [
    { id: "job1task1", title: "task1",done:false },
    { id: "job1task2", title: "task2" ,done:false},
    { id: "job1task3", title: "task3" ,done:false},
  ],
  "job2": [
    { id: "job2task1", title: "task1" ,done:false},
    { id: "job2task2", title: "task2" ,done:false},
  ],
  "job3": [
    { id: "job3task1", title: "task1" ,done:false},
    { id: "job3task2", title: "task2" ,done:false},
    { id: "job3task3", title: "task3" ,done:false},
    { id: "job3task4", title: "task4" ,done:false},
  ],
};

// const json = JSON.stringify(Jobs);
// localStorage.setItem('myJobs', json);

// const json2 = localStorage.getItem("Jobs");
// const c = JSON.parse(json2);

// console.log(c)
// console.log(c)
