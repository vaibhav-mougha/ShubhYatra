import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../Components/LoginSignup/Login";
import Signup from "../Components/LoginSignup/Signup";
import Buses from "../Pages/Buses";
import { Trains } from "../Pages/Trains";
import HomePage from "../Pages/HomePage";
import PrivateRoute from "./Private.routes";
import Admin from "../Components/AdminSection/Admin";
import { AuthContext } from "../Components/Context/Auth.context";
import NotFound from "../Pages/PageNotFound";
import FlightBooking from "../Pages/FlightBooking";
import PaymentPage from "../Pages/PaymentPage";
import Hotel from "../Pages/Hotel";

import Hotelpayment from "../Pages/Hotelpayment";

import Payment from "../Components/CreditCard/Payment";
import UserPage from "../Pages/UserPage";
import FlightPaymentPage from "../Components/FlightBooking/FlightPaymentPage";

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

        {/* <Route path="/trains" element={<PrivateRoute><Trains /></PrivateRoute>} /> */}

        <Route path="/trains" element={<Trains />} />

        <Route
          path="/hotels"
          element={
            <PrivateRoute>
              <Hotel />
            </PrivateRoute>
          }
        />

        <Route
          path="/hotelcheckout"
          element={
            <PrivateRoute>
              <Hotelpayment />
            </PrivateRoute>
          }
        />

        <Route
          path="/payment"
          element={
            <PrivateRoute>
              <Payment />
            </PrivateRoute>
          }
        />

        <Route
          path="/profile"
          element={
            <PrivateRoute>
              <UserPage />
            </PrivateRoute>
          }
        />

        <Route
          path="/flightcheckout"
          element={
            <PrivateRoute>
              <FlightPaymentPage />
            </PrivateRoute>
          }
        />
      </Routes>
    </>
  );
};

export default AllRoutes;
