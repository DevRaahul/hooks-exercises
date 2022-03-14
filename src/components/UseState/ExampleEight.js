import React, { useState } from "react";
import { Button, TextField } from "@mui/material";
import { Box } from "@mui/system";
import "../Component.css";

const ExampleEight = () => {
  const [pwd, setPwd] = useState("");
  const [msg, setMsg] = useState("");
  const letter = /[a-zA-Z]/;
  const number = /[0-9]/;

  const pwdCheck = (e) => {
    setPwd(e.target.value);
    setMsg(letter.test(e.target.value) && number.test(e.target.value) ? "Valid password" : "Invalid password");
  };

  const reset = () => {
    setPwd("");
    setMsg("");
  };

  return (
    <div>
      <h3>Example 8. Alphanumeric password</h3>
      <div className="code-sample">
        <Box
          sx={{
            width: "400px",
          }}
        >
          <TextField fullWidth id="pwdInput" label="Enter Password" variant="filled" value={pwd} onChange={pwdCheck} />
        </Box>
        {msg}
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

export default ExampleEight;
