import React, { useState, useEffect } from "react";
import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import "../Component.css";

const ExampleOne = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(`Hey! This is the initial value of Counter: ${count}`);
  }, []);

  const countIncrement = () => {
    if (count === 10) return;
    setCount(count + 1);
  };

  const countDecrement = () => {
    if (count === 0) return;
    setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
  };
  return (
    <div>
      <h3>Example 1. Counter</h3>
      <div className="code-sample">
        <Box
          sx={{
            width: "400px",
          }}
        >
          <Typography variant="h3" gutterBottom component="div">
            {count}
          </Typography>
        </Box>
        <Box
          sx={{
            marginTop: 5,
            display: "flex",
            gap: 5,
          }}
        >
          <Button variant="outlined" onClick={countDecrement}>
            -
          </Button>
          <Button variant="outlined" onClick={reset}>
            Reset
          </Button>
          <Button variant="outlined" onClick={countIncrement}>
            +
          </Button>
        </Box>
      </div>
    </div>
  );
};

export default ExampleOne;
