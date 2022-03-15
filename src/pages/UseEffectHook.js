import React from "react";
import ExampleOne from "../components/UseEffect/ExampleOne";
import ExampleTwo from "../components/UseEffect/ExampleTwo";
import "../components/Component.css";
import { Link } from "react-router-dom";
const UseEffectHook = () => {
  return (
    <>
      <div className="container">
        <ExampleOne />
        <Link to={"/fakeShop"} />
        <ExampleTwo />
      </div>
    </>
  );
};

export default UseEffectHook;
