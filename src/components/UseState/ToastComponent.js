import * as React from "react";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

const ToastComponent = ({ hideToast, type }) => {
  return (
    <Stack sx={{ width: "100%" }} spacing={2}>
      <Alert
        severity={type}
        action={
          <Button color="inherit" size="small" onClick={hideToast}>
            Hide Toast
          </Button>
        }
      >
        {`This is a ${type} alert`}
      </Alert>
    </Stack>
  );
};

export default ToastComponent;
