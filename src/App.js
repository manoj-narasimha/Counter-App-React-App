import "./styles.css";
import React, { useState } from "react";
import { Button } from "@material-ui/core";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import Box from "@material-ui/core/Box";
import RemoveIcon from "@material-ui/icons/Remove";
import RotateLeftIcon from "@material-ui/icons/RotateLeft";
function App() {
  const [counter, setCount] = useState(0);
  // setInterval(Increment,1000);

  function Increment() {
    setCount(counter + 1);
  }
  function Decrement() {
    setCount(counter - 1);
  }
  function Reset() {
    setCount(0);
  }

  return (
    <div className="App">
      <h1>Counter App</h1>

      <div className="main">
        <Box component="span" m={1}>
          <p>{counter}</p>
          <Button
            startIcon={<AddCircleOutlineIcon />}
            onClick={Increment}
            variant="contained"
            color="primary"
          >
            Increment
          </Button>
          <Button
            startIcon={<RemoveIcon />}
            onClick={Decrement}
            variant="contained"
            color="primary"
            className="btn"
          >
            Decrement
          </Button>
          <Button
            startIcon={<RotateLeftIcon />}
            onClick={Reset}
            variant="contained"
            color="primary"
            className="btn-1"
          >
            Reset
          </Button>
        </Box>
      </div>
    </div>
  );
}
export default App;
