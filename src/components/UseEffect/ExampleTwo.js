import React from "react";
import { Box } from "@mui/system";
import { Link } from "react-router-dom";
import "../Component.css";

const ExampleTwo = () => {
  return (
    <div>
      <h3>Example 2. Fake Shop</h3>
      <div className="code-sample">
        <Box
          sx={{
            marginBottom: 5,
            display: "flex",
            gap: 5,
          }}
        >
          <Link to={"/fakeShop"}>Fake Shop</Link>
        </Box>
      </div>
    </div>
  );
};

export default ExampleTwo;
