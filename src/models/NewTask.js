import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

const NewTask = ({ show, handleClose, save }) => {
  const [taskName, setTaskName] = useState("Empty");
  const [descripton, setDescription] = useState("Description");

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    /* const {name, value} = event.target */

    if (name === "taskName") {
      setTaskName(value);
    } else {
      setDescription(value);
    }
  };

  const handleSave = () => {
    
    let taskObj = {};
    taskObj["Name"] = taskName;
    taskObj["Description"] = descripton;
    save(taskObj);
    
  };

  return (
    <div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>New Task</Modal.Title>
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
                value={descripton}
                name="description"
              ></textarea>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSave}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default NewTask;
