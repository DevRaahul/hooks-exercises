import React, { useState } from "react";
import { Box, Button } from "@mui/material";
import ToastComponent from "./ToastComponent";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const ExampleNine = () => {
  const [showToast, setShowToast] = useState(false);
  const [type, setType] = useState("");

  const hideToast = () => {
    setShowToast(!showToast);
  };

  const handleChange = (e) => {
    setType(e.target.value);
  };

  return (
    <div>
      <h3>Example 9. Toast</h3>
      <div className="code-sample">
        <Box
          sx={{
            marginBottom: 5,
            display: "flex",
            gap: 5,
          }}
        >
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Select Toaste Type</InputLabel>
            <Select labelId="demo-simple-select-label" id="demo-simple-select" value={type} label="type" onChange={handleChange}>
              <MenuItem value={"success"}>Success</MenuItem>
              <MenuItem value={"warning"}>Warning</MenuItem>
              <MenuItem value={"error"}>Error</MenuItem>
            </Select>
          </FormControl>
          <Button variant="outlined" onClick={() => setShowToast(!showToast)}>
            Show Toast
          </Button>
        </Box>
        {showToast && <ToastComponent hideToast={hideToast} type={type} />}
      </div>
    </div>
  );
};

export default ExampleNine;
