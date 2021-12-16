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

      setShow(false);
    } else {
      setShow(false);
    }
  };

  const deleteTask = (index) => {
    console.log(index);
    let tempList = taskList;
    tempList.splice(index, 1);
    localStorage.setItem("taskList", JSON.stringify(tempList));
    setTaskList(tempList);

    window.location.reload();
  };

  const updateTask = (obj, index) => {
    let tempList = taskList;
    tempList[index] = obj;
    localStorage.setItem("taskList", JSON.stringify(tempList));
    setTaskList(tempList);
    window.location.reload();
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
          taskList.map((obj, index) => (
            <Card
              handleClose={handleClose}
              update={updateTask}
              taskObj={obj}
              index={index}
              deleteTask={deleteTask}
            />
          ))}
      </div>
    </div>
  );
}
