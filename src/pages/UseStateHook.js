import React, { useState } from "react";
import ExampleOne from "../components/UseState/ExampleOne";
import ExampleTwo from "../components/UseState/ExampleTwo";
import ExampleThree from "../components/UseState/ExampleThree";
import ExampleFour from "../components/UseState/ExampleFour";
import ExampleFive from "../components/UseState/ExampleFive";
import ExampleSix from "../components/UseState/ExampleSix";
import ExampleSeven from "../components/UseState/ExampleSeven";
import ExampleEight from "../components/UseState/ExampleEight";
import ExampleNine from "../components/UseState/ExampleNine";
import "../components/Component.css";
const UseStateHook = () => {
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
        <ExampleSeven productList={productList} />
        <ExampleEight />
        <ExampleNine />
      </div>
    </>
  );
};

export default UseStateHook;
