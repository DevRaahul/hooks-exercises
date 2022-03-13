import React from "react";
import App from "../App";
import "./LayoutComponent.css";
const LayoutComponent = ({ children }) => {
  return (
    <>
      <App />
      <div className="fluid-div">{children}</div>
    </>
  );
};

export default LayoutComponent;
