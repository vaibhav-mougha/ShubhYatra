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
import { AuthContext } from "../../Context/Auth.context";
import axios from "axios";
import { useState } from "react";
import { HiArrowLongRight } from "react-icons/hi2";
import { CgArrowLongRight } from "react-icons/cg";
import { FaArrowRight } from "react-icons/fa";
import NavContainer from "../../HomePage/TopSection/Navbar";
import { useNavigate } from "react-router-dom";
import Footer from "../../HomePage/Footer/Footer";

const iniState = {
    _id: 'new ObjectId("63ccf28e5017a77f31b77446")',
    from: "Kolkata",
    to:"Dubai",
    date: "2023-01-24",
    classtype:"AC class",
    price: 4567,
    __v:0
}

function TrainCheckout() {
  const { authState } = useContext(AuthContext);
  const [data, setData] = useState([iniState]);
  const Navigate=useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:8080/trains/listing/${authState.ProdId}`, {
        headers: {
          authorization: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        setData(res.data);
        // console.log(res.data);
    })
      .catch((err) => console.log(err));
  }, [authState.ProdId]);

  const handleOrder=()=>{
    // const payload={
    //   ...data,
    //   email:authState.email
    // }

  //   fetch("http://localhost:8080/order/add",{
  //     method:"POST",
  //     body:JSON.stringify(payload),
  //     headers:{
  //         "content-type":"application/json"
  //     }
  //  }).then(Navigate("/payment"))
  //  .catch((err)=>console.log(err))

    Navigate("/payment");
  }

  const current = new Date();
  const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
];
const dayNames = ["Mon","Tue","Wed","Thu","Fri","Sat","Sun"]
  const date = `${current.getDate()}${monthNames[current.getMonth()]}'${current.getFullYear()}`;

  return (
    <>
    <NavContainer/>

    <Box w={"90%"} p="5" m="auto">
      <Flex direction={{base:"column", lg:"row"}}>
        <Box w="100%">
          <Flex w="90%" 
          justifyContent={"space-between"} 
          alignItems="center"
          direction={{base:"column", md:"row"}}
          >
            <VStack>
              <Flex color={"red"}>
                <Heading size={"sm"}>
                {data[0].from}
                </Heading>
                <HiArrowLongRight fontWeight={"bold"} fontSize="23px" />
                <Heading size={"sm"}>
                {data[0].to}
                </Heading>
              </Flex>
              <Heading size="md">
              {data[0].name}
              </Heading>
              <Heading color="teal" size="sm">
                {data[0].classtype}
              </Heading>
            </VStack>
            <VStack>
              <Heading size="md">1 Seat selected</Heading>
              <Heading color="blue.400" size="sm">
                Seat No: D3-53
              </Heading>
            </VStack>
          </Flex>

          <Flex
           w="70%" 
           justifyContent={"space-between"} 
           alignItems="center"
           direction={{base:"column", md:"row"}}
           >
            <VStack>
              <Flex mt="2" gap="4">
                <Heading size="lg">
                {data[0].arrival}
                </Heading>
                <Heading mt="2" size="md" color="teal">
                  {date}
                </Heading>
              </Flex>
              <Heading size="md" color="green.300">
                {data[0].from} Railway Station
              </Heading>
            </VStack>
            <VStack>
              <CgArrowLongRight fontSize="70px" />
            </VStack>
            <VStack>
              <Flex mt="2" gap="4">
                <Heading size="lg">
                {data[0].departure}
                </Heading>
                <Heading mt="2" size="md" color="teal">
                  {date}
                </Heading>
              </Flex>
              <Heading size="md" color="green.300">
                {data[0].to} Railway Station
              </Heading>
            </VStack>
          </Flex>
          <Card w="90%" p="5" ml="0" mt="4" bg="rgb(255,237,209)">
            <Heading size="md">
            {data[0].to} Govt. Travel Guidelines
            </Heading>
            <OrderedList>
              <ListItem>
                As per Govt. guidelines, passengers shall be tested for COVID
                symptoms including body temperature, on entering {data[0].to}.
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
        <Stack spacing="8" borderWidth="1px" rounded="lg" padding="8" w={{base: "100%", lg:"450px"}}>
          <Heading fontWeight="extrabold" size="md">Order Summary</Heading>

          <Flex justify="space-between">
            <Text fontSize="lg" fontWeight="semibold">
            Train Fare
            </Text>
            <Text fontSize="xl" fontWeight="extrabold">
            ₹{data[0].price}
          </Text>
          </Flex>
          <Flex justify="space-between">
            <Text fontSize="lg" fontWeight="semibold">
            Tax
            </Text>
            <Text  fontSize="xl" fontWeight="extrabold">
            ₹125
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
            ₹{data[0].price+125}
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
    <Footer/>
    </>
  );
}

export default TrainCheckout;
