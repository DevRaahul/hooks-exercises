import React from "react";
import { Route, Routes } from "react-router-dom";
import UseContextHook from "./pages/UseContextHook";
import UseEffectHook from "./pages/UseEffectHook";
import UseStateHook from "./pages/UseStateHook";
import LayoutComponent from "./pages/LayoutComponent";
const AppRoute = () => {
  return (
    <>
      <LayoutComponent>
        <Routes>
          <Route path="/useState" element={<UseStateHook />} />
          <Route path="/useEffect" element={<UseEffectHook />} />
          <Route path="/useContext" element={<UseContextHook />} />
        </Routes>
      </LayoutComponent>
    </>
  );
};

export default AppRoute;
