import { Box } from "@chakra-ui/react";
import React from "react";
import "./StateFlights.css";

export const StateFlights = () => {
  return (
    <Box
      bg="white"
      w="90%"
      color="black"
      align="center"
      justify="center"
      margin="auto"
      borderRadius="1rem"
      p="1.5rem"
      // border="1px solid white"
      textAlign="left"
      box-shadow="rgba(0, 0, 0, 0.1) 0px 4px 12px"
    >
      <Box className="mainContainer">
        <Box className="row">
          <Box className="indContainer">
            <img
              src="http://promos.makemytrip.com/images/50x50-Ooty-23052019.png"
              alt=""
            />
            <Box className="indCardContent">
              <p className="indCardTitle">Hyderabad Flights</p>
              <p className="indCardLocation">
                Via:{" "}
                <span className="span">Delhi, Mumbai, Chennai, Ahmedabad</span>{" "}
              </p>
            </Box>
          </Box>
          <Box className="indContainer">
            <img src="https://promos.makemytrip.com/store/DelhiDT.JPG" alt="" />
            <Box className="indCardContent">
              <p className="indCardTitle">Delhi Flights</p>
              <p className="indCardLocation">
                Via:{" "}
                <span className="span">Delhi, Mumbai, Chennai, Ahmedabad</span>{" "}
              </p>
            </Box>
          </Box>
          <Box className="indContainer">
            <img src="https://promos.makemytrip.com/store/PuneDT.JPG" alt="" />
            <Box className="indCardContent">
              <p className="indCardTitle">Pune Flights</p>
              <p className="indCardLocation">
                Via:{" "}
                <span className="span">Delhi, Mumbai, Chennai, Ahmedabad</span>{" "}
              </p>
            </Box>
          </Box>
        </Box>
        <Box className="row">
          <Box className="indContainer">
            <img
              src="https://promos.makemytrip.com/store/SingaporeDT.JPG"
              alt=""
            />
            <Box className="indCardContent">
              <p className="indCardTitle">Kolkata Flights</p>
              <p className="indCardLocation">
                Via:{" "}
                <span className="span">Delhi, Mumbai, Chennai, Ahmedabad</span>{" "}
              </p>
            </Box>
          </Box>
          <Box className="indContainer">
            <img
              src="https://promos.makemytrip.com/store/BangaloreDT.JPG"
              alt=""
            />
            <Box className="indCardContent">
              <p className="indCardTitle">Bangalore Flights</p>
              <p className="indCardLocation">
                Via:{" "}
                <span className="span">Delhi, Mumbai, Chennai, Ahmedabad</span>{" "}
              </p>
            </Box>
          </Box>
          <Box className="indContainer">
            <img
              src="https://promos.makemytrip.com/store/JaipurDT.JPG"
              alt=""
            />
            <Box className="indCardContent">
              <p className="indCardTitle">Jaipur Flights</p>
              <p className="indCardLocation">
                Via:{" "}
                <span className="span">Delhi, Mumbai, Chennai, Ahmedabad</span>{" "}
              </p>
            </Box>
          </Box>
        </Box>
        <Box className="row">
          <Box className="indContainer">
            <img
              src="http://promos.makemytrip.com/images/50x50-Other-23052019.png"
              alt=""
            />
            <Box className="indCardContent">
              <p className="indCardTitle">Chennai Flights</p>
              <p className="indCardLocation">
                Via:{" "}
                <span className="span">Delhi, Mumbai, Chennai, Ahmedabad</span>{" "}
              </p>
            </Box>
          </Box>
          <Box className="indContainer">
            <img src="https://promos.makemytrip.com/store/GoaDT.JPG" alt="" />
            <Box className="indCardContent">
              <p className="indCardTitle">Goa Flights</p>
              <p className="indCardLocation">
                Via:{" "}
                <span className="span">Delhi, Mumbai, Chennai, Ahmedabad</span>{" "}
              </p>
            </Box>
          </Box>
          <Box className="indContainer">
            <img
              src="https://promos.makemytrip.com/store/MumbaiDT.JPG"
              alt=""
            />
            <Box className="indCardContent">
              <p className="indCardTitle">Mumbai Flights</p>
              <p className="indCardLocation">
                Via:{" "}
                <span className="span">Delhi, Mumbai, Chennai, Ahmedabad</span>{" "}
              </p>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
