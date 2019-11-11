import React, {useState, useEffect} from "react";
import axios from "axios";

import styled from "styled-components";
import './App.css';


import CharacterCard from "./CharacterCard";
import PageButtons from "./PageButtons";

const ForceFlex = styled.div`
  display: flex
  flex-flow: row wrap;
  justify-content: space-around;
`;


const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [apiData, setApiData] = useState([{}])
  const [callType, setCallType] = useState("people")
  const [number, setNumber] = useState(1)

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  useEffect(() => {
    axios.get(`https://swapi.co/api/${callType}/?page=${number}`)
    .then(response => {
      console.log(response.data.results)
      setApiData(response.data.results)
    })
    .catch( error => {
      console.log("sorry no dogs", error)
    })
  },[callType, number])

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <ForceFlex>
        <CharacterCard propsName={apiData} />
      </ForceFlex>
      <PageButtons propsName={number} setPropsName={setNumber}  />
    </div>
  );
}

export default App;
