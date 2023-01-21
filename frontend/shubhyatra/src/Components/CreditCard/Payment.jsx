import { Box, Heading } from "@chakra-ui/react";
import React from "react";
import CreditCard from "./CreditCard";
import Navbar from "../HomePage/TopSection/Navbar";
import Footer from "../HomePage/Footer/Footer";

const Payment = () => {
  return (
    <>
      <Box bg="#EBF7FF">
        <Navbar />

        <Box color="black" align="center" justify="center" pb="1rem">
          {/* Container */}

          <Box
            mt="2rem"
            mb="2rem"
            w="85%"
            //   border="2px solid black"
            bg="white"
            borderRadius="2rem"
            pt="3rem"
            pb="3rem"
            boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
          >
            <Heading
              fontSize={{ base: "0.9rem", md: "2rem", lg: "2.8rem" }}
              textDecoration="underline"
              color="#257CFF"
            >
              ShubhYatra Payment Portal
            </Heading>

            <Box
              border="1px solid #257CFF"
              mt="2rem"
              width="80%"
              borderRadius="1rem"
              p="1rem"
            >
              <Box>
                <CreditCard />
              </Box>
            </Box>
          </Box>
        </Box>

        <Footer />
      </Box>
    </>
  );
};

export default Payment;
