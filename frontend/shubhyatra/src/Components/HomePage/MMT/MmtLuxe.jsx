import { Box } from "@chakra-ui/react";
import React from "react";
import styleMMT from "./Mmt.module.css";
const MmtLuxe = () => {
  return (
    <>
      <Box
        className={styleMMT.container}
        w="90%"
        borderRadius="1rem"
        p="0.5rem"
        align="center"
        justify="center"
        margin="auto"
      >
        <Box className={styleMMT.bigcard} p="0.5rem" margin="auto">
          <Box className={styleMMT.title}>
            <h4>
              {" "}
              <Box fontSize={{ base: "1rem", md: "0.9rem", lg: "1.2rem" }}>
                INTRODUCING
              </Box>{" "}
            </h4>
            <h1>
              <Box fontSize={{ base: "1.5rem", md: "1.5rem", lg: "2rem" }}>
                MMT Luxe
              </Box>
            </h1>
            <h1>
              <Box fontSize={{ base: "1.5rem", md: "1.5rem", lg: "2rem" }}>
                Selections
              </Box>
            </h1>
            <p>
              <Box fontSize={{ base: "0.7rem", md: "0.8rem", lg: "18px" }}>
                Escape to the epitome of luxury, packed <br />
                With signature amenities and services
              </Box>
            </p>
            <button>
              <Box fontSize={{ base: "0.9rem", md: "0.8rem", lg: "15px" }}>
                Learn More
              </Box>
            </button>
          </Box>

          <Box
            className={styleMMT.cardsBox}
            gap="1rem"
            display={{ md: "flex", lg: "flex" }}
          >
            <Box className={styleMMT.smallcard}>
              <img
                src="https://promos.makemytrip.com/Hotels_product/Luxe/brands.png"
                alt="MMT LUXE"
              />
              <Box className={styleMMT.titleCard}>
                <h2>
                  <Box fontSize={{ base: "0.7rem", md: "0.9rem", lg: "18px" }}>
                    Discover by Brands
                  </Box>
                </h2>
                <p>
                  <Box fontSize={{ base: "0.6rem", md: "0.6rem", lg: "18px" }}>
                    Taj, Marriott,Oberoi,Hyatt & <br /> More{" "}
                  </Box>
                </p>
              </Box>
            </Box>

            <Box className={styleMMT.smallcard}>
              <img
                src="https://promos.makemytrip.com/altacco_luxe/imgs/luxe_villa.jpg"
                alt="MMT LUXE"
              />
              <Box className={styleMMT.titleCard}>
                <h2>
                  <Box fontSize={{ base: "0.7rem", md: "0.9rem", lg: "18px" }}>
                    Luxe Vilas
                  </Box>
                </h2>
                <p>
                  <Box fontSize={{ base: "0.6rem", md: "0.6rem", lg: "18px" }}>
                    Premimu Villas with Superlative <br /> Experience
                  </Box>
                </p>
              </Box>
            </Box>

            <Box className={styleMMT.smallcard}>
              <img
                src="https://promos.makemytrip.com/Hotels_product/Luxe/themes.png"
                alt="MMT LUXE"
              />
              <Box className={styleMMT.titleCard}>
                <h2>
                  <Box fontSize={{ base: "0.7rem", md: "0.9rem", lg: "18px" }}>
                    Discover by Themes
                  </Box>
                </h2>
                <p>
                  <Box fontSize={{ base: "0.6rem", md: "0.6rem", lg: "18px" }}>
                    Explore Luxury Stays based on <br /> your interest
                  </Box>
                </p>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default MmtLuxe;
