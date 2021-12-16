import React, { useState, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";

const EditTask = ({ show, updateTask, taskObj, toggle }) => {
  const [taskName, setTaskName] = useState("");
  const [description, setDescription] = useState("");

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    /* const {name, value} = event.target  *** nice line!! */

    if (name === "taskName") {
      setTaskName(value);
    } else {
      setDescription(value);
    }
  };

  useEffect(() => {
    setTaskName(taskObj.Name);
    setDescription(taskObj.Description);
  }, []);

  const handleUpdate = (e) => {
    e.preventDefault();
    let tempObj = {};
    tempObj["Name"] = taskName;
    tempObj["Description"] = description;
    updateTask(tempObj);
  };

  return (
    <div>
      <Modal show={show} onHide={toggle}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <div className="form-group">
              <label>Task Name</label>
              <input
                type="text"
                className="form-control"
                onChange={handleChange}
                value={taskName}
                name="taskName"
              />
            </div>
            <div className="form-group mt-3">
              <label>Description</label>
              <textarea
                rows="5"
                className="form-control"
                onChange={handleChange}
                value={description}
                name="description"
              ></textarea>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={toggle}>
            Close
          </Button>
          <Button variant="primary" onClick={handleUpdate}>
            Update Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default EditTask;
