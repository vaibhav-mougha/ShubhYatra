import React from "react";
import { Routes, Route } from "react-router-dom";
import Buses from "../Pages/Buses";
import HomePage from "../Pages/HomePage";

const AllRoutes = () => {
  return (
    <>
      <Routes>
      <Route path="/buses" element={<Buses/>}></Route>
      <Route path="/" element={<HomePage />} />
      </Routes>
    </>
  );
};

export default AllRoutes;
