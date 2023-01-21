import {
  Box,
  Button,
  Heading,
  Input,
  Text,
  Tabs,
  TabList,
  TabPanels,
  TabPanel,
  Tab,
} from "@chakra-ui/react";
import React from "react";
import Footer from "../Components/HomePage/Footer/Footer";
import Navbar from "../Components/HomePage/TopSection/Navbar";
import UserOrder from "../Components/UserOrder/UserOrder";

const UserPage = () => {
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
            <Box
              display="flex"
              justifyContent="space-between"
              pl="3rem"
              pr="3rem"
            >
              <Heading
                fontSize={{ base: "0.9rem", md: "2rem", lg: "2.8rem" }}
                textDecoration="underline"
                color="#257CFF"
              >
                Your Orders
              </Heading>

              <Box mt="0.5rem">
                <Input
                  w="15rem"
                  size={["sm", "sm", "md", "md"]}
                  placeholder="Search all orders by name"
                  // value={query}
                  // onChange={(e) => setQuery(e.target.value)}
                />

                <Button
                  // onClick={getDataFromCity}
                  ml="2rem"
                  variant="outline"
                  size={["sm", "sm", "md", "md"]}
                >
                  Search
                </Button>
              </Box>
            </Box>

            <Box
              border="1px solid #257CFF"
              mt="2rem"
              width="80%"
              borderRadius="1rem"
              p="1rem"
            >
              <Box
                display="flex"
                bg="#F0F2F2"
                justifyContent="space-between"
                p="0.8rem"
                borderRadius="1rem"
              >
                <Text
                  fontSize={{ base: "0.6rem", md: "0.8rem", lg: "1rem" }}
                  color="black"
                >
                  User Name : "come from auth context"
                </Text>

                <Text
                  fontSize={{ base: "0.6rem", md: "0.8rem", lg: "1rem" }}
                  color="black"
                >
                  Email ID : "come from auth context"
                </Text>

                <Text
                  fontSize={{ base: "0.6rem", md: "0.8rem", lg: "1rem" }}
                  color="black"
                >
                  Mobile NO. : "come from auth context"
                </Text>
              </Box>

              <Box
                bg="white"
                w="95%"
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
                    <Tab>
                      <Text
                        textAlign="center"
                        fontSize={{ base: "0.7rem", md: "0.8rem", lg: "1rem" }}
                        fontWeight="bold"
                      >
                        Orders
                      </Text>
                    </Tab>

                    <Tab>
                      <Text
                        textAlign="center"
                        fontSize={{ base: "0.7rem", md: "0.8rem", lg: "1rem" }}
                        fontWeight="bold"
                      >
                        Buy Again
                      </Text>
                    </Tab>

                    <Tab>
                      <Text
                        textAlign="center"
                        fontSize={{ base: "0.7rem", md: "0.8rem", lg: "1rem" }}
                        fontWeight="bold"
                      >
                        Not Yet Shipped
                      </Text>
                    </Tab>

                    <Tab>
                      <Text
                        textAlign="center"
                        fontSize={{ base: "0.7rem", md: "0.8rem", lg: "1rem" }}
                        fontWeight="bold"
                      >
                        Cancelled Orders
                      </Text>
                    </Tab>
                  </TabList>

                  <TabPanels>
                    <TabPanel>
                      <UserOrder />
                    </TabPanel>

                    <TabPanel>
                      <h1>Buy Again</h1>
                    </TabPanel>

                    <TabPanel>
                      <h1>Not Yet Shipped</h1>
                    </TabPanel>

                    <TabPanel>
                      <h1>Cancelled Orders</h1>
                    </TabPanel>
                  </TabPanels>
                </Tabs>
              </Box>
            </Box>
          </Box>
        </Box>

        <Footer />
      </Box>
    </>
  );
};

export default UserPage;
