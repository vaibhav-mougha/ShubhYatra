import { Box, Button, Text } from "@chakra-ui/react";
import React from "react";
import { ChevronDownIcon } from "@chakra-ui/icons";

const UserOrder = () => {
  return (
    <>
      <Box
        borderRadius="1rem"
        mt="2rem"
        p="1rem"
        boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
      >
        <Box
          display="flex"
          bg="#F0F2F2"
          justifyContent="space-between"
          p="0.8rem"
          borderRadius="1rem"
        >
          <Box>
            <Text
              fontSize={{ base: "0.6rem", md: "0.8rem", lg: "1rem" }}
              color="black"
            >
              Order Placed
            </Text>
            <Text
              fontSize={{ base: "0.6rem", md: "0.8rem", lg: "1rem" }}
              color="black"
            >
              Date:"From Auth"
            </Text>
          </Box>

          <Box>
            <Text
              fontSize={{ base: "0.6rem", md: "0.8rem", lg: "1rem" }}
              color="black"
            >
              Total
            </Text>
            <Text
              fontSize={{ base: "0.6rem", md: "0.8rem", lg: "1rem" }}
              color="black"
            >
              ₹ : "Auth"
            </Text>
          </Box>

          <Box>
          <Text
              fontSize={{ base: "0.6rem", md: "0.8rem", lg: "1rem" }}
              color="black"
              textAlign="left"
            >
              Order # "Number"
            </Text>
          <Box display="flex" justifyContent="space-between">
            <Text
              fontSize={{ base: "0.6rem", md: "0.8rem", lg: "1rem" }}
              color="#257CFF"
            >
              View Order details
            </Text>
            <Text
              fontSize={{ base: "0.6rem", md: "0.8rem", lg: "1rem" }}
              color="#257CFF"
              ml="1rem"
            >
              Invoice <ChevronDownIcon />
            </Text>
           <Box>
           
           </Box>
          </Box>
          </Box>

          
        </Box>

        <Text
              fontSize={{ base: "0.6rem", md: "0.8rem", lg: "1.7rem" }}
              color="black"
              textAlign="left"
              fontWeight="bold"
              mt="0.7rem"
            >
              Successful
            </Text>

            <Text
              fontSize={{ base: "0.6rem", md: "0.8rem", lg: "1rem" }}
              color="black"
              textAlign="left"
            >
              Paid on : "date from auth"
            </Text>

<Button 
// onClick=route to home page or their respective route
                  bg="#257CFF"
                  borderRadius="1rem"
                  variant="solid"
                  ml="3rem"
                  color="white"
                  _hover={{
                    background: "white",
                    color: "#257CFF",
                    border: "2px solid #257CFF",
                  }}
                  mr={3}>Book Again</Button>
      </Box>
    </>
  );
};

export default UserOrder;
