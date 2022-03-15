import React, { useState, useEffect } from "react";
import "../Component.css";

const FakeShop = () => {
  const [prodList, setProdList] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setProdList(data);
    })();
  });
  return <div className="code-sample"></div>;
};

export default FakeShop;
