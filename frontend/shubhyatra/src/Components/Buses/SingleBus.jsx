import {
  Badge,
  Box,
  Button,
  Flex,
  Grid,
  Heading,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/Auth.context";
import Amenities from "./Amenities";
import Photo from "./Photo";
import Policies from "./Policies";

function SingleBus({
  id,
  title,
  type,
  start,
  end,
  duration,
  price,
  date,
  month,
}) {
  const{handleProdId}=useContext(AuthContext)
  const Navigate=useNavigate()
  const handleBook = () => {
    handleProdId(id)
    Navigate("/checkout")
  };
  return (
    <Box
      p={["1", "2", "4"]}
      w="100%"
      m="auto"
      border={"1px solid teal"}
      key={id}
      my="10px"
    >
      <Grid
        gridTemplateColumns={[
          "repeat(1,1fr)",
          "repeat(1,1fr)",
          "repeat(2,1fr)",
        ]}
        justifyContent={"space-between"}
        alignContent="center"
      >
        <VStack gap={["1", "2", "2"]} textAlign="left">
          <Flex gap={["1", "2", "5"]}>
            <Heading size={["xs", "sm", "lg"]}>{title}</Heading>
            <Badge
              variant="solid"
              colorScheme="green"
              h={["4", "3", "7"]}
              mt={["0", "1", "2"]}
            >
              <Heading size={["xs", "sm", "md"]}>4.5/5</Heading>
            </Badge>
            <Text fontSize={["xs", "sm", "md"]} color={"teal"}>
              13 Ratings
            </Text>
          </Flex>
          <Flex gap={["2", "5", "10"]}>
            <Text fontSize={["xs", "sm", "md"]}>{type}</Text>
            <Text fontSize={["xs", "sm", "md"]}>27 Seats Left</Text>
            <Text fontSize={["xs", "sm", "md"]}>9 Window Seats Seats</Text>
          </Flex>
          <Flex gap={["2", "5", "10"]} pt={[0, 0, "3"]}>
            <Heading color={"teal"} size={["xs", "sm", "md"]}>
              {start} {date} {month}
            </Heading>
            <Heading color={"teal"} size={["xs", "sm", "md"]}>
              {duration}
            </Heading>
            <Heading color={"teal"} size={["xs", "sm", "md"]}>
              {end} {+date + 2} {month}
            </Heading>
          </Flex>
          <Flex gap={["1", "3", "7"]} pt="3">
            <Policies />
            <Photo />
            <Amenities />
          </Flex>
        </VStack>
        <Grid
          ml={["0", "0", "150px", "250px", "350px"]}
          mt={["2", "3", "4", "4", "0"]}
          gridTemplateColumns={[
            "repeat(3,1fr)",
            "repeat(3,1fr)",
            "repeat(1,1fr)",
          ]}
          justifyContent="space-between"
        >
          <Text fontSize={["md", "md", "md", "xl", "xl"]} color={"teal"}>
            Stating From
          </Text>
          <Flex>
            <Text fontSize={["xs", "sm", "lg", "lg", "lg"]} color={"teal"}>
              <s>₹{price + 150}</s>
            </Text>
            <Heading size={["md", "md", "lg"]} py="3">
              ₹{price}
            </Heading>
          </Flex>
          <Button onClick={handleBook} w={["100px", "150px"]}>
            Book Now
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}

export default SingleBus;
