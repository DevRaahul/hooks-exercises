import React, { useState, useEffect } from "react";
import { Button, TextField } from "@mui/material";
import { Box } from "@mui/system";
import "../Component.css";

const ExampleSix = () => {
  const [inputType, setInputType] = useState(true);

  const showPassword = (e) => {
    setInputType(!inputType);
  };

  return (
    <div>
      <h3>Example 5. Disable Submit Button</h3>
      <div className="code-sample">
        <Box
          sx={{
            width: "400px",
            marginBottom: 5,
          }}
        >
          <TextField fullWidth id="password" label="Enter password" variant="filled" type={inputType ? "password" : "text"} />
        </Box>
        <Box
          sx={{
            marginTop: 5,
            display: "flex",
            gap: 5,
          }}
        >
          <Button variant="outlined" onClick={showPassword}>
            {inputType ? "Show Password" : "Hide Password"}
          </Button>
        </Box>
      </div>
    </div>
  );
};

export default ExampleSix;
