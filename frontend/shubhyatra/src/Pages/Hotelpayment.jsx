import { Box, Button,Image, Card,
    Flex,
    Heading,
    Link,
    ListItem,
    OrderedList,
    Stack,
    Text,
    VStack, } from '@chakra-ui/react'
import React from 'react'
import { useState } from 'react'
import { useEffect, useContext } from 'react'
import "../Styles/hotel.css"
import axios from 'axios'
import { AuthContext } from "../Components/Context/Auth.context";

  import { HiArrowLongRight } from "react-icons/hi2";
  import { CgArrowLongRight } from "react-icons/cg";
  import { FaArrowRight } from "react-icons/fa";
  import NavContainer from "../Components/HomePage/TopSection/Navbar";
  import Footer from "../Components/HomePage/Footer/Footer";
  import { useNavigate } from "react-router-dom";
export default function Hotelpayment(id) {
const [data,setData]=useState("")
const { authState } = useContext(AuthContext);

const Navigate=useNavigate()
const handlePayment = () => {
  
  Navigate("/payment")
};


console.log(data)
    useEffect(()=>{
        axios
    .get(`http://localhost:8080/hotels/${authState.ProdId}`, {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    })
    .then((res) => setData(res.data))
    .catch((err) => console.error(err));
    },[])
  return (
    <>
     <NavContainer />
    <Flex className="main" justifyContent="center">
        <Box className="mindiv" style={{border:"0px",width:"60%"}} justifyContent="center">
        <Box className="first" width="50%">
            <Image src={data.image} />
          </Box>
          <Box className="sec" >
            <Box className="res_name">
              <Box className="tagdiv">
                <Image
                  className="tag"
                  src="https://promos.makemytrip.com/Hotels_product/Value_Stays/v2/logo/ValueStays-3.png"
                />
              </Box>
              <Box className="rating">
                <h3>{data.rating}</h3><Box mr="0.5rem"></Box>
                <h4>
                  <span style={{color:"rgb(54, 54, 217)"}}>{data.verified_rating}</span>(124 VERIFIED RATING)
                </h4>
              </Box>
              <Box className="namediv" mt="0.5rem">
                <Box mt="0.5rem"></Box>
                <h1 style={{fontWeight:"bold",fontSize:"22px"}}>{data.name}</h1>
                <Box mt="1.7rem"></Box>
                <p className="location">
                  <span style={{color:"blue",fontWeight:"bold"}}>{data.location}</span>| 4.2 km from Indira
                </p>
              </Box >
              <p className="couple">couple friendly</p>
              
            </Box>

            <Box className="res">
{/* 
<Box className="third_res">
 <Box className="end">
   <Box className="rate">
     <s>
       <span>&#8377;</span>{rate}
     </s>
     <h1 className="cheak" style={{fontWeight:"bold",fontSize:"20px"}}>
       <span>&#8377;</span><span >{price}</span>
     </h1>
   </Box>
   <p>+{tax} taxes & fee</p>
   <p className="night">per nigth</p>
   <p className="emi">
     No Cost <span className="EMI">EMI</span>
   </p>
   <p className="emi">
     Started at <span>&#8377;</span>8,113
   </p>
   <p className="pay">Login book now & pay later</p>
 </Box> */}
</Box>
</Box>

</Box>
<Stack spacing="8" borderWidth="1px" rounded="lg" padding="8" w="450px">
          <Heading size="md">Order Summary</Heading>

          <Flex justify="space-between">
            <Text fontSize="lg" fontWeight="semibold">
            Price (per night)
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
            ₹ {data.tax}
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
            ₹{data.price+data.tax}
            </Text>
          </Flex>
          <Button
            colorScheme="blue"
            size="lg"
            fontSize="md"
            rightIcon={<FaArrowRight />}
            onClick={handlePayment}
          >
           Continue to Book Now
          </Button>
        </Stack>
      </Flex>    
      <Flex w="100%" p="5" ml="0" mt="4" bg="rgb(255,237,209)">
            <Box borderRight="1px solid black" p={2}>
            <Heading size="md">Property Rules</Heading>
            <OrderedList>
                <ListItem>Check-in: 2 PMCheck-out: 12 PM</ListItem>
              <ListItem>
                
PAN Card is not accepted as ID proof(s)
              </ListItem>
              <ListItem>
              Passport, Aadhar and Driving License are accepted as ID proof(s)
              </ListItem>
              <ListItem>
              Property staff is trained on hygiene guidelines
              </ListItem>
              <ListItem>
              Pets are not allowed.
              </ListItem>
            </OrderedList>
            </Box>
            
            <Box borderRight="1px solid black" p={2}>
            <Heading size="md">Safety And Hygiene </Heading>
            <OrderedList>
                <ListItem>Quarantine protocols are being followed as per local government authorities</ListItem>
              <ListItem>Guests from containment zones are allowed
              </ListItem>
              <ListItem>
              Passport, Aadhar and Driving License are accepted as ID proof(s)
              </ListItem>
              <ListItem>
              Shared resources in common areas are properly sanitized
              </ListItem>
              <ListItem>
              
Property staff is trained on hygiene guidelines
              </ListItem>
            </OrderedList>
            </Box>

            <Box  p={2}>
            <Heading size="md">Guest Profile</Heading>
            <OrderedList>
                <ListItem>Unmarried couples allowed</ListItem>
              <ListItem>Guests below 18 years of age are allowed
              </ListItem>
              <ListItem>
Bachelors allowed
              </ListItem>
              <ListItem>Suitable for children
              </ListItem>
              <ListItem>
              
Property staff is trained on hygiene guidelines
              </ListItem>
            </OrderedList>
            </Box>
          </Flex>
      <Footer/>
      </>
  )
}
