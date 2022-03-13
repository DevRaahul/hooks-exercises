import React, { useState, useEffect } from "react";
import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import "../Component.css";

const ExampleTwo = () => {
  const [count, setCount] = useState(0);
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    if ((errorMsg && count > 0) || (errorMsg && count < 10)) {
      setErrorMsg("");
    }
  }, [count]);

  const countIncrement = () => {
    if (count === 10) {
      setErrorMsg("Count can not be more than 10");
      return;
    }
    setCount(count + 1);
  };

  const countDecrement = () => {
    if (count === 0) {
      setErrorMsg("Count can not be less than 0");
      return;
    }
    setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
    setErrorMsg("");
  };
  return (
    <div>
      <h3>Example 2. Age checker</h3>
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
        <Typography variant="h6" gutterBottom component="div">
          {errorMsg}
        </Typography>
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

export default ExampleTwo;
