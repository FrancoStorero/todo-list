import React from "react";
import { CardStyled } from "../styled/CardStyled";
import { H3Styled } from "../styled/H3Styled";
import { PStyled } from "../styled/PStyled";

export const Card = ({ taskObj, index }) => {
  
    const colors = [
        {
            colorPrimary: '#F70707',
            colorSecondary: '#F7070760'
        },
        {
            colorPrimary: '#ECE80A',
            colorSecondary: '#ECE80A60'
        },
        {
            colorPrimary: '#67EC0A',
            colorSecondary: '#67EC0A60'
        },
        {
            colorPrimary: '#0AECCF',
            colorSecondary: '#0AECCF60'
        },
        {
            colorPrimary: '#0A46EC',
            colorSecondary: '#0A46EC60'
        },
        {
            colorPrimary: '#CE0AEC',
            colorSecondary: '#CE0AEC60'
        },
        {
            colorPrimary: '#EC0A5C',
            colorSecondary: '#EC0A5C60'
        },
        {
            colorPrimary: '#ECB10A',
            colorSecondary: '#ECB10A60'
        }
    ]

   

  return (
    <CardStyled randomColor={colors[index%8].colorPrimary}>
      <H3Styled randomColor={colors[index%8].colorSecondary}>{taskObj.Name}</H3Styled>
      <PStyled>{taskObj.Description}</PStyled>
    </CardStyled>
  );
};
