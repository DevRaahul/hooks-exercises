import React, { useState } from "react";
import { Button, TextField } from "@mui/material";
import { Box } from "@mui/system";
import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
// import CloseIcon from "@mui/icons-material/Close";
import "../Component.css";

const ExampleFour = () => {
  const [pwd, setPwd] = useState("");
  const [secondPwd, setSecondPwd] = useState("");
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");

  const reset = (e) => {
    setPwd("");
    setSecondPwd("");
    setOpen(false);
  };

  const checkPwd = () => {
    if (pwd !== secondPwd) {
      setMessage("Password did not matched ...!");
      setOpen(true);
    }
    if (pwd === secondPwd) {
      setMessage("Password matched ...!");
      setOpen(true);
    }
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const action = (
    <React.Fragment>
      <Button color="secondary" size="small" onClick={handleClose}>
        UNDO
      </Button>
      <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}></IconButton>
    </React.Fragment>
  );

  return (
    <div>
      <h3>Example 4. Password Matcher</h3>
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
          <TextField
            fullWidth
            id="password"
            label="Enter password"
            variant="filled"
            value={secondPwd}
            onChange={(e) => {
              setSecondPwd(e.target.value);
            }}
          />
        </Box>
        <Box
          sx={{
            marginTop: 5,
            display: "flex",
            gap: 5,
          }}
        >
          <Button variant="outlined" onClick={checkPwd}>
            Check
          </Button>
          <Button variant="outlined" onClick={reset}>
            Reset
          </Button>
        </Box>
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose} message={message} action={action} />
      </div>
    </div>
  );
};

export default ExampleFour;
