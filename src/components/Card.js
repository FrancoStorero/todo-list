import React, { useState } from "react";
import { CardStyled } from "./styled/CardStyled";
import { H3Styled } from "./styled/H3Styled";
import { PStyled } from "./styled/PStyled";
import edit from "../assets/images/editar.png";
import delet from "../assets/images/tacho-de-basura.png";
import EditTask from "../models/EditTask";

export const Card = ({ taskObj, index, deleteTask, update }) => {
  const [show, setShow] = useState(false);

  const colors = [
    {
      colorPrimary: "#F70707",
      colorSecondary: "#F7070760",
    },
    {
      colorPrimary: "#ECE80A",
      colorSecondary: "#ECE80A60",
    },
    {
      colorPrimary: "#67EC0A",
      colorSecondary: "#67EC0A60",
    },
    {
      colorPrimary: "#0AECCF",
      colorSecondary: "#0AECCF60",
    },
    {
      colorPrimary: "#0A46EC",
      colorSecondary: "#0A46EC60",
    },
    {
      colorPrimary: "#CE0AEC",
      colorSecondary: "#CE0AEC60",
    },
    {
      colorPrimary: "#EC0A5C",
      colorSecondary: "#EC0A5C60",
    },
    {
      colorPrimary: "#ECB10A",
      colorSecondary: "#ECB10A60",
    },
  ];

  const handleDelete = () => {
    console.log(index);
    deleteTask(index);
  };

  const handleUpdate = (obj) => {
    console.log(index); 
    update(obj, index);
  };

  const toggle = () => {
    setShow(!show);
  };

  return (
    <CardStyled randomColor={colors[index].colorPrimary}>
      <H3Styled randomColor={colors[index].colorSecondary}>
        {taskObj.Name}
      </H3Styled>
      <PStyled>
        {taskObj.Description}
        <div className="miDiv">
          <img onClick={handleDelete} src={delet} alt="icono" />
          <img onClick={() => setShow(true)} src={edit} alt="icono" />
        </div>
      </PStyled>

      <EditTask
        show={show}
        toggle={toggle}
        updateTask={handleUpdate}
        taskObj={taskObj}
      />
    </CardStyled>
  );
};
