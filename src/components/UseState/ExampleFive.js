import React, { useState, useEffect } from "react";
import { Button, TextField } from "@mui/material";
import { Box } from "@mui/system";
import "../Component.css";

const ExampleFive = () => {
  const [pwd, setPwd] = useState("");
  const [secondPwd, setSecondPwd] = useState("");
  const [isPwdValid, setIsPwdValid] = useState(false);

  const reset = (e) => {
    setPwd("");
    setSecondPwd("");
    setIsPwdValid(false);
  };
  const checkPwd = (e) => {
    setSecondPwd(e.target.value);
    if (pwd === e.target.value) {
      setIsPwdValid(false);
    } else if (pwd !== e.target.value) {
      setIsPwdValid(true);
    }
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
          <TextField
            fullWidth
            id="password"
            label="Enter password"
            variant="filled"
            value={pwd}
            onChange={(e) => {
              setPwd(e.target.value);
            }}
          />
        </Box>
        <Box
          sx={{
            width: "400px",
          }}
        >
          <TextField fullWidth id="password" label="Enter password" variant="filled" value={secondPwd} onChange={checkPwd} />
        </Box>
        <Box
          sx={{
            marginTop: 5,
            display: "flex",
            gap: 5,
          }}
        >
          <Button variant="outlined" disabled={isPwdValid}>
            Submit
          </Button>
          <Button variant="outlined" onClick={reset}>
            Reset
          </Button>
        </Box>
      </div>
    </div>
  );
};

export default ExampleFive;
