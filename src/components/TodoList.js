import React, { useState, useEffect } from "react";
import NewTask from "../models/NewTask";
import { Card } from "./Card";

export default function TodoList() {
  const [show, setShow] = useState(false);
  const [taskList, setTaskList] = useState([]);

  const handleClose = () => {
    setShow(!show);
  };

  useEffect(() => {
    let arr = localStorage.getItem("taskList");

    if (arr) {
      let obj = JSON.parse(arr);
      setTaskList(obj);
    }
  }, []);

  const saveTask = (taskjobj) => {
    if (taskList.length < 8) {
      let tempList = taskList;
      tempList.push(taskjobj);
      localStorage.setItem("taskList", JSON.stringify(tempList));
      setTaskList(tempList);
      console.log();
      setShow(false);
    } else {
      setShow(false);
    }
  };

  return (
    <div className="myContainer">
      <div className="text-center myHeader">
        <h1>Todo List</h1>
        <button className="btn btn-primary mt-2" onClick={() => setShow(true)}>
          New Task
        </button>
      </div>
      <div className="cardContainer">
        <NewTask show={show} handleClose={handleClose} save={saveTask} />
        {taskList &&
          taskList.map((obj, index) => <Card taskObj={obj} index={index} />)}
      </div>
    </div>
  );
}
