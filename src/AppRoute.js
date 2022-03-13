import React from "react";
import { Route, Routes } from "react-router-dom";
import UseEffectHook from "./components/UseEffectHook";
import UseStateHook from "./components/UseStateHook";
import LayoutComponent from "./pages/LayoutComponent";
const AppRoute = () => {
  return (
    <>
      <LayoutComponent>
        <Routes>
          <Route path="/useState" element={<UseStateHook />} />
          <Route path="/useEffect" element={<UseEffectHook />} />
        </Routes>
      </LayoutComponent>
    </>
  );
};

export default AppRoute;
