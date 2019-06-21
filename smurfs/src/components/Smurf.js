import React from "react";
import styled from "styled-components";

const StyledLi = styled.li`
    display: block;
    padding: 20px 20px;
    margin: 0 0 5px 0;
    font-size: 18px;
    text-align: center;
    border-radius: 4px;
    background-color: #8158fc;
`;

const Smurf = ({ smurf }) => {
  return (
    <StyledLi>
      <span>{smurf.name}</span>
      <span>{smurf.age}</span>
      <span>{smurf.height}</span>
    </StyledLi>
  );
};

export default Smurf;
