import React from "react";
import "./LayoutComponent.css";
const LayoutComponent = ({ children }) => {
  return (
    <>
      <div className="fluid-div">{children}</div>
    </>
  );
};

export default LayoutComponent;
