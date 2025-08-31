import React from "react";
import { Route, Routes } from "react-router";
import Signup from "../pages/Signup";
// import Modal from "../pages/policy";
function AppRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default AppRoutes;
