import React from "react";
import styled from "styled-components";

const ButtonNext = styled.button`
  float: right;
  position: relative;
  top: -160px;
  right: 2%;
  height: 140px;
  color: white;
  font-size: 2.2rem;
  width: 30%;
  padding: 15px;
  border-radius: 13px;
  box-sizing: border-box;
  margin: 10px 0;
  transition: transform 0.2s ease-in;
  border: solid 3px white;
  text-shadow: 1px 1px #18cae6
  background: black;

  &:hover {
    transform: translate(-5px) scale(1.15);
    border: solid 3px #18cae6;
  }
`;
const ButtonLast = styled.button`
  float: left;
  position: relative;
  top: -160px;
  left: 2%;
  height: 140px;
  color: white;
  font-size: 2.2rem;
  width: 30%;
  padding: 15px;
  border-radius: 13px;
  box-sizing: border-box;
  margin: 10px 0;
  transition: transform 0.2s ease-in;
  border: solid 3px white;
  text-shadow: 1px 1px #18cae6
  background: black;

  &:hover {
    transform: translate(-5px) scale(1.15);
    border: solid 3px #18cae6;
  }
`;

//MUST BE NAMED getCharacters? due to stretch; but that would break naming conventions to do
export default function PageButtons(props) {
  if (props.propsName > 1) {
    return (
      <>
      <ButtonLast onClick={() => props.setPropsName(props.propsName - 1)}>Last 10</ButtonLast>
      <ButtonNext onClick={() => props.setPropsName(props.propsName + 1)}>Next 10</ButtonNext>
      </>
    );
  }
  else {
    return (
      <ButtonNext onClick={() => props.setPropsName(props.propsName + 1)}>Next 10</ButtonNext>
    );
  }
}
