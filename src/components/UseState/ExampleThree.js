import React, { useState } from "react";
import { Button, TextField } from "@mui/material";
import { Box } from "@mui/system";
import "../Component.css";

const ExampleThree = () => {
  const [count, setCount] = useState(0);
  const [inputString, setInputString] = useState("");
  const [isValidCharCount, setIsValidCharCount] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const checkCharCount = (e) => {
    if (count === 50) {
      setIsValidCharCount(true);
      setErrorMsg("Maximum char count reached...!");
      return;
    }
    setInputString(e?.target?.value);
    setCount(count + 1);
  };

  const reset = () => {
    setCount(0);
    setInputString("");
    setIsValidCharCount(false);
    setErrorMsg("");
  };

  return (
    <div>
      <h3>Example 3. Character Count Checker</h3>
      <div className="code-sample">
        <Box
          sx={{
            width: "400px",
          }}
        >
          <TextField
            fullWidth
            id="charInput"
            label="Enter Text"
            variant="filled"
            value={inputString}
            onChange={checkCharCount}
            error={isValidCharCount}
            helperText={errorMsg}
          />
          {count}/50
        </Box>
        <Box
          sx={{
            marginTop: 5,
            display: "flex",
            gap: 5,
          }}
        >
          <Button variant="outlined" onClick={reset}>
            Reset
          </Button>
        </Box>
      </div>
    </div>
  );
};

export default ExampleThree;
