import React from "react";
import { Routes, Route } from "react-router-dom";
import Buses from "../Pages/Buses";

const AllRoutes = () => {
  return (
    <>
      <Routes>
      <Route path="/buses" element={<Buses/>}></Route>
      </Routes>
    </>
  );
};

export default AllRoutes;
