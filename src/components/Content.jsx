import { useState } from "react";
import styled from "styled-components";

let Button = styled.button`
  color: White;
  background-color: Black;
  width: 200px;
  height: 100px;
  margin: 10px;
  font-size: 22px;
`;

let NewButton = styled(Button)`
  background-color: red;
`;

function Content() {
  let [counts, setCount] = useState(0);
  let [data, setData] = useState("Loading"); // fix typo

  function Increment() {
    setCount(counts + 1);
  }

  let discomp = () => {
    switch (data) {
      case "Loading":
        return <Lodingcomp />;
      case "Success":
        return <Successcomp />;
      case "Error":
        return <Errorcomp />;
      default:
        return null;
    }
  };

  return (
    <main>
      <h1>Counter App - {counts}</h1>
      <Button onClick={Increment}>Increment</Button>

      {/* Conditional reward message */}
      {counts > 10 && <p>Ya you get the 10% Rewards</p>}

      {/* Render dynamic component */}
      {discomp()}
    </main>
  );
}
export default Content;

function Lodingcomp() {
  return <p>Loading...</p>;
}
function Successcomp() {
  return <p>If Find It...</p>;
}
function Errorcomp() {
  return <p>Error...</p>;
}
