import React from "react";
import { Route, Routes } from "react-router-dom";
import UseContextHook from "./pages/UseContextHook";
import UseEffectHook from "./pages/UseEffectHook";
import UseStateHook from "./pages/UseStateHook";
import LayoutComponent from "./pages/LayoutComponent";
import FakeShop from "./components/UseEffect/FakeShop";
import App from "./App";

const AppRoute = () => {
  return (
    <>
      <App />
      <LayoutComponent>
        <Routes>
          <Route path="/useState" element={<UseStateHook />} />
          <Route path="/useEffect" element={<UseEffectHook />} />
          <Route path="/useContext" element={<UseContextHook />} />
          <Route path="/fakeShop" element={<FakeShop />} />
        </Routes>
      </LayoutComponent>
    </>
  );
};

export default AppRoute;
