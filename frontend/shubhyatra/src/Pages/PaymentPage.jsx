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
import { useNavigate } from "react-router-dom";
function PaymentPage() {
  const { authState } = useContext(AuthContext);
  const [data, setData] = useState([]);
  const Navigate = useNavigate();
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
  const handleOrder = () => {
    const payload = {
      ...data,
      email: authState.email,
    };
    fetch("http://localhost:8080/order/add", {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        "content-type": "application/json",
      },
    })
      .then(Navigate("/payment"))
      .catch((err) => console.log(err));
  };
  const current = new Date();
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const dayNames = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const date = `${current.getDate()}${
    monthNames[current.getMonth()]
  }'${current.getFullYear()},${
    dayNames[current.getDay() - 1] == undefined
      ? "sun"
      : dayNames[current.getDay() - 1]
  }`;
  const Newdate = `${current.getDate() + 2}${
    monthNames[current.getMonth()]
  }'${current.getFullYear()},${
    dayNames[current.getDay() - 1] == undefined
      ? "sun"
      : dayNames[current.getDay() - 1]
  }`;
  return (
    <>
      <NavContainer />
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
          <Stack
            spacing="8"
            borderWidth="1px"
            rounded="lg"
            padding="8"
            w="450px"
          >
            <Heading fontWeight="extrabold" size="md">
              Order Summary
            </Heading>

            <Flex justify="space-between">
              <Text fontSize="lg" fontWeight="semibold">
                Bus Fare
              </Text>
              <Text fontSize="xl" fontWeight="extrabold">
                ₹{data.price}
              </Text>
            </Flex>
            <Flex justify="space-between">
              <Text fontSize="lg" fontWeight="semibold">
                Tax
              </Text>
              <Text fontSize="xl" fontWeight="extrabold">
                ₹151
              </Text>
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
                ₹{data.price + 151}
              </Text>
            </Flex>
            <Button
              onClick={handleOrder}
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
      <Footer />
    </>
  );
}

export default PaymentPage;
