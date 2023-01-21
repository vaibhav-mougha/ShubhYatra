import React, { useContext, useEffect } from "react";
import {
  Box,
  Button,
  Card,
  Flex,
  Heading,
  Link,
  ListItem,
  OrderedList,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { AuthContext } from "../Components/Context/Auth.context";
import axios from "axios";
import { useState } from "react";
import { HiArrowLongRight } from "react-icons/hi2";
import { CgArrowLongRight } from "react-icons/cg";
import { FaArrowRight } from "react-icons/fa";
import NavContainer from "../Components/HomePage/TopSection/Navbar";
import Footer from "../Components/HomePage/Footer/Footer";
function PaymentPage() {
  const { authState } = useContext(AuthContext);
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:8080/bus/${authState.ProdId}`, {
        headers: {
          authorization: localStorage.getItem("token"),
        },
      })
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, [authState.ProdId]);
  return (
    <>
    <NavContainer/>
    <Box w={"90%"} p="5" m="auto">
      <Flex>
        <Box w="100%">
          <Flex w="90%" justifyContent={"space-between"} alignItems="center">
            <VStack>
              <Flex color={"red"}>
                <Heading size={"sm"}>{data.from}</Heading>
                <HiArrowLongRight fontWeight={"bold"} fontSize="23px" />
                <Heading size={"sm"}>{data.to}</Heading>
              </Flex>
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
                  26JAN'23,THU
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
                  28JAN'23,THU
                </Heading>
              </Flex>
              <Heading size="md" color="green.300">
                {data.to}:Tilak Nagar
              </Heading>
            </VStack>
          </Flex>
          <Card w="90%" p="5" ml="0" mt="4" bg="rgb(255,237,209)">
            <Heading size="md">{data.to} Govt. Travel Guidelines</Heading>
            <OrderedList>
              <ListItem>
                As per Govt. guidelines, passengers shall be tested for COVID
                symptoms including body temperature, on entering {data.to}.
              </ListItem>
              <ListItem>
                Passengers without symptoms can continue with the travel.
              </ListItem>
              <ListItem>
                Passengers with symptoms can either go back or continue the
                travel post a negative Antigen test result.
              </ListItem>
              <ListItem>
                Passengers testing positive shall be sent to Covid Care Centre
                (CCC) for further care, the cost of which will be borne by the
                passengers themselves.
              </ListItem>
            </OrderedList>
          </Card>
        </Box>
        <Stack spacing="8" borderWidth="1px" rounded="lg" padding="8" w="450px">
          <Heading size="md">Order Summary</Heading>

          <Flex justify="space-between">
            <Text fontSize="lg" fontWeight="semibold">
            Bus Fare
            </Text>
            <Link href="#" textDecor="underline">
            {data.price}
          </Link>
          </Flex>
          <Flex justify="space-between">
            <Text fontSize="lg" fontWeight="semibold">
            Tax
            </Text>
            <Link href="#" textDecor="underline">
            ₹ 151
          </Link>
          </Flex>
          <Flex justify="space-between">
            <Text fontSize="lg" fontWeight="semibold">
            Coupon Code
            </Text>
            <Link href="#" textDecor="underline">
            Add coupon code
          </Link>
          </Flex>
          
          <Flex justify="space-between">
            <Text fontSize="lg" fontWeight="semibold">
              Total
            </Text>
            <Text fontSize="xl" fontWeight="extrabold">
            ₹{data.price+151}
            </Text>
          </Flex>
          <Button
            colorScheme="blue"
            size="lg"
            fontSize="md"
            rightIcon={<FaArrowRight />}
          >
           Continue to Book Now
          </Button>
        </Stack>
      </Flex>
    </Box>
    <Footer/>
    </>
  );
}

export default PaymentPage;
