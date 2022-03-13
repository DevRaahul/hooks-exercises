import React, { useState } from "react";
import ExampleOne from "./UseState/ExampleOne";
import ExampleTwo from "./UseState/ExampleTwo";
import ExampleThree from "./UseState/ExampleThree";
import ExampleFour from "./UseState/ExampleFour";
import ExampleFive from "./UseState/ExampleFive";
import ExampleSix from "./UseState/ExampleSix";
import ExampleSeven from "./UseState/ExampleSeven";
import "./Component.css";
const UseStateHook = () => {
  const [cartList, setCartList] = useState([]);

  const addToCart = (data) => {
    setCartList((prevState) => ({
      ...prevState,
      data,
    }));
  };

  const productList = [
    { id: 1, name: "Product 1" },
    { id: 2, name: "Product 2" },
    { id: 3, name: "Product 3" },
    { id: 4, name: "Product 4" },
  ];
  return (
    <>
      <div className="container">
        <ExampleOne />
        <ExampleTwo />
        <ExampleThree />
        <ExampleFour />
        <ExampleFive />
        <ExampleSix />
        <ExampleSeven productList={productList} cartList={cartList} addToCart={addToCart} />
      </div>
    </>
  );
};

export default UseStateHook;
