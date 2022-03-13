import React, { useState } from "react";
import { Button, TextField } from "@mui/material";
import { Box } from "@mui/system";
import "../Component.css";

const ExampleOne = () => {
  const [age, setAge] = useState(0);
  const [isAgeLessThan18, setValidAge] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const checkAge = () => {
    if (age === 0) return;
    if (age < 18) {
      setErrorMsg("Invalid Age.");
      setValidAge(true);
    } else {
      setErrorMsg("Valid Age.");
    }
  };

  const reset = () => {
    setErrorMsg("");
    setValidAge(false);
    setAge(0);
  };

  return (
    <div>
      <h3>Example 1. Age checker</h3>
      <div className="code-sample">
        <Box
          sx={{
            width: "400px",
          }}
        >
          <TextField
            fullWidth
            id="ageInput"
            label="Enter Age"
            variant="filled"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            error={isAgeLessThan18}
            helperText={errorMsg}
          />
        </Box>
        <Box
          sx={{
            marginTop: 5,
            display: "flex",
            gap: 5,
          }}
        >
          <Button variant="outlined" onClick={checkAge}>
            Check Age
          </Button>
          <Button variant="outlined" onClick={reset}>
            Reset
          </Button>
        </Box>
      </div>
    </div>
  );
};

export default ExampleOne;
