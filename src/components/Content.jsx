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

  // use curent state is counts
  function Increment() {
    setCount(counts + 1);
  }
  // annenames Function
  function Decrement() {
    setCount((prevcount) => prevcount - 1);
  }
  return (
    <main>
      <h1>Counter App - {counts}</h1>
      <Button onClick={Increment}>Increment</Button>
      <NewButton onClick={Decrement}>Decrement</NewButton>
    </main>
  );
}
export default Content;
