import React, { useState, useEffect } from "react";
import { Box } from "@mui/system";
import Button from "@mui/material/Button";
import "../Component.css";

const ExampleTwo = () => {
  const [apiFlag, setApiFlag] = useState(false);
  const [prodList, setProdList] = useState([{ title: "test 1" }]);

  useEffect(() => {
    if (apiFlag) {
      getData();
    }
  }, [apiFlag]);

  const getData = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    setProdList(data);
  };

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
          <Button
            variant="contained"
            onClick={() => {
              setApiFlag(true);
            }}
          >
            Get Data from Fake Api using useEffect
          </Button>
          <Button
            variant="contained"
            onClick={() => {
              setApiFlag(false);
              setProdList([]);
            }}
          >
            Reset List
          </Button>
        </Box>
        <div>
          {apiFlag &&
            prodList?.map((element) => {
              return (
                <>
                  <h4>{element?.title}</h4>
                </>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default ExampleTwo;
