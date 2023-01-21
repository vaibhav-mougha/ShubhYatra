import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../Components/LoginSignup/Login";
import Signup from "../Components/LoginSignup/Signup";
import Buses from "../Pages/Buses";
import { Trains } from "../Pages/Trains";
import HomePage from "../Pages/HomePage";
import Profile from "../Pages/Profile";
import PrivateRoute from "./Private.routes";
import Admin from "../Components/AdminSection/Admin";
import { AuthContext } from "../Components/Context/Auth.context";
import NotFound from "../Pages/PageNotFound";
import FlightBooking from "../Pages/FlightBooking";
import PaymentPage from "../Pages/PaymentPage";
import Hotel from "../Pages/Hotel";
import Payment from "../Components/CreditCard/Payment"
import UserPage from "../Pages/UserPage";


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
          <Route path="/admin" element={<Admin />}></Route>
        )}

        <Route path="*" element={<NotFound />} />

        <Route
          path="/flight"
          element={
            <PrivateRoute>
              <FlightBooking />
            </PrivateRoute>
          }
        />

        <Route
          path="/checkout"
          element={
            <PrivateRoute>
              <PaymentPage />
            </PrivateRoute>
          }
        />


        <Route path="/trains" element={<PrivateRoute><Trains /></PrivateRoute>} />

        <Route
          path="/hotels"
          element={
            <PrivateRoute>
              <Hotel />
            </PrivateRoute>
          }
        />

        <Route path="/payment" element={<Payment />}/>

        <Route path="/userpage" element={<UserPage />}/>

      </Routes>
    </>
  );
};

export default AllRoutes;
