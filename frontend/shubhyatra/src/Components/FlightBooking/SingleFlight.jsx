import {
  Badge,
  Box,
  Button,
  Flex,
  Grid,
  Heading,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import Amenities from "./Amenities";
import Photo from "./Photo";
import Policies from "./Policies";

function SingleFlight({
  id,
  title,
  type,
  start,
  end,
  duration,
  price,
  date,
  month,
  logo
}) {
  return (
    <Box
      p={["1", "2", "4"]}
      w="100%"
      m="auto"
      border={"1px solid #257CFF"}
      borderRadius="1rem"
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
            <Heading size={["xs", "sm", "lg"]} display="flex" > <Image mr="0.5rem" w={{base:"2.2rem"}} src={logo} alt="" /> {title}</Heading>
            <Badge
              variant="solid"
              colorScheme="blue"
              h={["4", "3", "7"]}
              mt={["0", "1", "2"]}
            >
              <Heading size={["xs", "sm", "md"]}>4.7/5</Heading>
            </Badge>
            <Text fontSize={["xs", "sm", "md"]} color={"#257CFF"}>
              19 Ratings
            </Text>
          </Flex>
          <Flex gap={["2", "5", "10"]}>
            <Text
              fontSize={["xs", "sm", "md"]}
              fontWeight="bold"
              color="#257CFF"
            >
              {type}
            </Text>
            <Text fontSize={["xs", "sm", "md"]}>25 Seats Left</Text>
            <Text fontSize={["xs", "sm", "md"]}>7 Window Seats</Text>
          </Flex>
          <Flex gap={["2", "5", "10"]} pt={[0, 0, "3"]}>
            <Heading color="#0E26AC" size={["xs", "sm", "md"]}>
              {start} {date} {month}
            </Heading>
            <Heading color="#0E26AC" size={["xs", "sm", "md"]}>
              {duration}
            </Heading>
            <Heading color="#0E26AC" size={["xs", "sm", "md"]}>
              {end} {+date} {month}
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
          <Text fontSize={["md", "md", "md", "xl", "xl"]} color={"#257CFF"}>
            Stating From
          </Text>
          <Flex>
            <Text fontSize={["xs", "sm", "lg", "lg", "lg"]} color={"#DB1E2C"}>
              <s>₹{price + 1500}</s>
            </Text>
            <Heading size={["md", "md", "lg"]} py="3">
              ₹{price}
            </Heading>
          </Flex>
          <Button
            w={["100px", "150px"]}
            _hover={{
              background: "white",
              color: "#0B5FF4",
              border: "2px solid #0B5FF4",
            }}
            bg="#0B5FF4"
            color="white"
          >
            Book Now
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}

export default SingleFlight;
