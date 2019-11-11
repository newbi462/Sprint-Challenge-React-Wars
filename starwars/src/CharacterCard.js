import React from "react";
import styled from "styled-components";

const CharCards = styled.div`
  color: white;
  width: 30%;
  padding: 15px;
  border-radius: 13px;
  box-sizing: border-box;
  margin: 10px 0;
  transition: transform 0.2s ease-in;
  border: solid 3px white;
  text-shadow: 1px 1px #18cae6;

  &:hover {
    transform: translate(-5px) scale(1.15);
    border: solid 3px #18cae6;
  }
`;


export default function CharacterCard(props) {

  return (
    <>
      {props.propsName.map(function(item) {
        return (

            <CharCards className="card">
              <h2>{item.name}</h2>
              <p>Born:{item.birth_year}</p>
            </CharCards>

        );
      })}
    </>


  );
}
