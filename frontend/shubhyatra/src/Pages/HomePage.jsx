import { Box } from "@chakra-ui/react";
import React from "react";
import Navbar from "../Components/HomePage/TopSection/Navbar";
import OffersCarousel from "../Components/HomePage/OffersCarousel/OffersCarousel";
import MmtLuxe from "../Components/HomePage/MMT/MmtLuxe";
import FlightSlider from "../Components/HomePage/FlightSlider/FlightSlider";
import { StateFlights } from "../Components/HomePage/StateFlights/StateFlights";
import ProductOffering from "../Components/HomePage/ProductOffering/ProductOffering";
import Footer from "../Components/HomePage/Footer/Footer";

const HomePage = () => {
  return (
    <Box bg="#F2F2F2">
      <Navbar />
      <Box mt="5rem">
        <OffersCarousel />
      </Box>
      <Box mt="3rem">
        <MmtLuxe />
      </Box>
      <Box mt="3rem">
        <FlightSlider />
      </Box>
      <Box mt="3rem">
        <StateFlights />
      </Box>
      <Box mt="3rem">
        <ProductOffering />
      </Box>
      <Box>
        <Footer />
      </Box>
    </Box>
  );
};

export default HomePage;
