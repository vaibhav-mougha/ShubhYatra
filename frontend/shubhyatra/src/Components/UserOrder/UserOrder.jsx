import { Box, Button, Flex, Heading, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { CgArrowLongRight } from "react-icons/cg";

const UserOrder = ({data}) => {
  const current = new Date();
  const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
];
const dayNames = ["Mon","Tue","Wed","Thu","Fri","Sat","Sun"]
  const date = `${current.getDate()}${monthNames[current.getMonth()]}'${current.getFullYear()},${dayNames[current.getDay()-1]}`;
  const Newdate = `${current.getDate()+2}${monthNames[current.getMonth()]}'${current.getFullYear()},${dayNames[current.getDay()-1]}`;
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
              Date:{date}
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
              ₹ {data.price}
            </Text>
          </Box>

          <Box>
          <Text
              fontSize={{ base: "0.6rem", md: "0.8rem", lg: "1rem" }}
              color="black"
              textAlign="left"
            >
              Order #{data._id.slice(0,10)}
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

        <Box mt="5" w="100%">
          <Flex w="90%" justifyContent={"space-between"} alignItems="center">
            <VStack>
              <Heading size="md">{data.name}</Heading>
              <Heading color="teal" size="sm">
                {data.type}
              </Heading>
            </VStack>
            <VStack>
              <Heading size="md">1 Seat selected</Heading>
              <Heading color="blue.400" size="sm">
                Seat No: UB1
              </Heading>
            </VStack>
          </Flex>
          <Flex w="70%" justifyContent={"space-between"} alignItems="center">
            <VStack>
              <Flex mt="2" gap="4">
                <Heading size="lg">{data.start}</Heading>
                <Heading mt="2" size="md" color="teal">
                  {date}
                </Heading>
              </Flex>
              <Heading size="md" color="green.300">
                {data.from}:Nehru Nagar
              </Heading>
            </VStack>
            <VStack>
              <CgArrowLongRight fontSize="70px" />
            </VStack>
            <VStack>
              <Flex mt="2" gap="4">
                <Heading size="lg">{data.end}</Heading>
                <Heading mt="2" size="md" color="teal">
                 {Newdate}
                </Heading>
              </Flex>
              <Heading size="md" color="green.300">
                {data.to}:Tilak Nagar
              </Heading>
            </VStack>
          </Flex>
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
              Paid on : {date}
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
