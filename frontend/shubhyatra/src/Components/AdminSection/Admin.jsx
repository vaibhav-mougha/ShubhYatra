import React from "react";
import Navbar from "../HomePage/TopSection/Navbar";
import {
  Box,
  Tabs,
  TabList,
  TabPanels,
  TabPanel,
  Tab,
  Text,
  Heading,
} from "@chakra-ui/react";
import Footer from "../HomePage/Footer/Footer";
import FlightAdmin from "./FlightAdmin";
import BusAdmin from "./BusAdmin";
import UserAdmin from "./UserAdmin";
import HotelAdmin from "./HotelAdmin";

const Admin = () => {

  return (
    <div>
      <Box bg="#EBF7FF">
        <Navbar />

        <Box color="black" align="center" justify="center" pb="1rem">
          {/* Container */}

          <Box
            mt="2rem"
            mb="2rem"
            w="100%"
            //   border="2px solid black"
            bg="white"
            borderRadius="2rem"
            pt="3rem"
            pb="15rem"
            boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
          >
            <Heading
              fontSize={{ base: "0.9rem", md: "2rem", lg: "2.8rem" }}
              textDecoration="underline"
              color="#257CFF"
            >
              Admin Section
            </Heading>

            <Box
              border="1px solid gray"
              mt="2rem"
              width="80%"
              borderRadius="1rem"
              p="1rem"
            >
              <Text fontSize="2rem">ShubhYatra Travels/Hotels Plans</Text>

              <Text fontSize="1.5rem" color="gray">
                Select any specific tabs for managing Plans
              </Text>

              <Box
                bg="white"
                w="90%"
                color="black"
                align="center"
                justify="center"
                margin="auto"
                borderRadius="1rem"
                p="3rem"
                // border="1px solid white"
                box-shadow="rgba(0, 0, 0, 0.1) 0px 4px 12px"
              >
                <Tabs>
                  <TabList>
                    <Text
                      textAlign="center"
                      fontSize={{ base: "0.7rem", md: "0.8rem", lg: "2rem" }}
                      fontWeight="bold"
                      mr="2rem"
                    >
                      Database
                    </Text>

                    <Tab>
                      <Text
                        textAlign="center"
                        fontSize={{ base: "0.7rem", md: "0.8rem", lg: "1rem" }}
                        fontWeight="bold"
                      >
                        USERS
                      </Text>
                    </Tab>

                    <Tab>
                      <Text
                        textAlign="center"
                        fontSize={{ base: "0.7rem", md: "0.8rem", lg: "1rem" }}
                        fontWeight="bold"
                      >
                        FLIGHTS
                      </Text>
                    </Tab>

                    <Tab>
                      <Text
                        textAlign="center"
                        fontSize={{ base: "0.7rem", md: "0.8rem", lg: "1rem" }}
                        fontWeight="bold"
                      >
                        HOTELS
                      </Text>
                    </Tab>

                    <Tab>
                      <Text
                        textAlign="center"
                        fontSize={{ base: "0.7rem", md: "0.8rem", lg: "1rem" }}
                        fontWeight="bold"
                      >
                        TRAINS
                      </Text>
                    </Tab>

                    <Tab>
                      <Text
                        textAlign="center"
                        fontSize={{ base: "0.7rem", md: "0.8rem", lg: "1rem" }}
                        fontWeight="bold"
                      >
                        BUSES
                      </Text>
                    </Tab>
                  </TabList>

                  <TabPanels>

                  <TabPanel>
                      {/* <h1>Users</h1> */}
                      <UserAdmin />
                    </TabPanel>

                    <TabPanel>
                      {/* <h1>Vaibhav Admin</h1> */}
                      <FlightAdmin />
                    </TabPanel>

                    <TabPanel>
                      <HotelAdmin/>
                    </TabPanel>

                    <TabPanel>
                      <h1>Priyanka Admin</h1>
                    </TabPanel>

                    <TabPanel>
                     <BusAdmin/>
                    </TabPanel>
                  </TabPanels>
                </Tabs>
              </Box>
            </Box>
          </Box>
        </Box>

        <Footer />
      </Box>
    </div>
  );
};

export default Admin;
