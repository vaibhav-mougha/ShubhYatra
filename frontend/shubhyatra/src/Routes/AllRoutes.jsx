import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../Components/LoginSignup/Login";
import Signup from "../Components/LoginSignup/Signup";
import Buses from "../Pages/Buses";
import HomePage from "../Pages/HomePage";
import Profile from "../Pages/Profile";
import PrivateRoute from "./Private.routes";
import Admin from "../Components/AdminSection/Admin";
import { AuthContext } from "../Components/Context/Auth.context";
import NotFound from "../Pages/PageNotFound";

const AllRoutes = () => {
  const { authState } = React.useContext(AuthContext);
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/buses"
          element={
            <PrivateRoute>
              <Buses />
            </PrivateRoute>
          }
        ></Route>
        <Route
          path="/profile"
          element={
            <PrivateRoute>
              <Profile />
            </PrivateRoute>
          }
        ></Route>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        {authState.email === "admin@shubhyatra.com" && (
          <Route
            path="/admin"
            element={
                <Admin />
            }
          ></Route>
        )}
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </>
  );
};

export default AllRoutes;
