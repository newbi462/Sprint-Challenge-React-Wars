import React from "react";
import styled from "styled-components";

const ButtonNext = styled.button`

`;
const ButtonLast = styled.button`

`;


export default function PageButtons(props) {
  if (props.propsName > 1) {
    return (
      <>
      <button onClick={() => props.setPropsName(props.propsName - 1)}>Last 10</button>
      <button onClick={() => props.setPropsName(props.propsName + 1)}>Next 10</button>
      </>
    );
  }
  else {
    return (
      <button onClick={() => props.setPropsName(props.propsName + 1)}>Next 10</button>
    );
  }
}
