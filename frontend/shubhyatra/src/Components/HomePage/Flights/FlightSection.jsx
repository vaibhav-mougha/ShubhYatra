import React, { useState } from "react";
import {
  Box,
  Flex,
  Button,
  Text,
  Radio,
  RadioGroup,
  Stack,
  FormControl,
  FormLabel,
  Select,
  Input,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Hide,
} from "@chakra-ui/react";
import { BsArrowLeftRight } from "react-icons/bs";
import stylesFlightSection from "./flightSection.module.css";
import FareType from "./FareType";

const FlightSection = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [selectedButtonColor, setSelectedButtonColor] = useState(1);
  const [travellers, setTravellers] = React.useState(null);
  const arr = [1, 2, 3, 4, 5, 6, 7, 8];
  let ar1 = [0, 1, 2, 3, 4, 5];
  const [togglePassengerColor, setTogglePassengerColor] = useState(false);

  const onClickNoOfPass = (val) => {
    setTravellers(val);
  };

  return (
    <Box
      w="90%"
      bg="white"
      p="1rem"
      color="black"
      align="center"
      justify="center"
      m="auto"
      mt="2rem"
      mb="2rem"
      // border="3px solid white"
      borderRadius="0.5rem"
    >
      {/* ONEWAY ROUNDTRIP MULTICITY */}
      <Flex
        w="90%"
        // border="1px solid white"
        justify="space-between"
      >
        <Box>
          <RadioGroup>
            <Stack direction="row">
              <Radio value="1">
                <Text
                  fontSize={{ base: "0.6rem", md: "0.8rem", lg: "1rem" }}
                  fontWeight="bold"
                >
                  ONE WAY
                </Text>
              </Radio>
              <Radio value="2">
                <Text
                  fontSize={{ base: "0.6rem", md: "0.8rem", lg: "1rem" }}
                  fontWeight="bold"
                >
                  ROUND TRIP
                </Text>
              </Radio>
              <Radio value="3">
                <Text
                  fontSize={{ base: "0.6rem", md: "0.8rem", lg: "1rem" }}
                  fontWeight="bold"
                >
                  MULTI CITY
                </Text>
              </Radio>
            </Stack>
          </RadioGroup>
        </Box>
        <Box>
          <Text
            fontSize={{ base: "0.6rem", md: "0.8rem", lg: "1rem" }}
            fontWeight="bold"
          >
            Book International and Domestic Flights
          </Text>
        </Box>
      </Flex>
      {/* ONEWAY ROUNDTRIP MULTICITY */}

      {/* Arrival & Departure Of Flights  */}
      <Flex
        w="90%"
        // border="1px solid white"
        justify="space-between"
      >
        <FormControl>
          <FormLabel>
            <Text
              fontSize={{ base: "0.6rem", md: "0.9rem", lg: "1.5rem" }}
              //   fontWeight="bold"
            >
              FROM
            </Text>
          </FormLabel>
          <Select placeholder="To">
            <option>New Delhi</option>
            <option>Mumbai</option>
            <option>Chennai</option>
            <option>Kolkata</option>
          </Select>
        </FormControl>

        <Box
          ml="1rem"
          mr="1rem"
          mt={{ base: "2.2rem", md: "2.6rem", lg: "3.5rem" }}
        >
          <BsArrowLeftRight />
        </Box>

        <FormControl>
          <FormLabel>
            <Text
              fontSize={{ base: "0.6rem", md: "0.9rem", lg: "1.5rem" }}
              //   fontWeight="bold"
            >
              TO
            </Text>
          </FormLabel>
          <Select placeholder="To">
            <option>Kolkata</option>
            <option>Chennai</option>
            <option>Mumbai</option>
            <option>New Delhi</option>
          </Select>
        </FormControl>

        <Hide below="md">
          <Box
            ml="1rem"
            mr="1rem"
            mt={{ base: "1.4rem", md: "1.8rem", lg: "2.7rem" }}
          >
            <Input
              placeholder="Select Date and Time"
              size={{ base: "xm", md: "sm", lg: "md" }}
              type="datetime-local"
            />
          </Box>
        </Hide>

        {/* Travellers & Classes */}
        <Hide below="md">
          <Box mt={{ base: "0.6rem", md: "1.8rem", lg: "2.7rem" }}>
            <Button onClick={onOpen}>TRAVELLERS & CLASS</Button>
            <Text
              fontSize={{ base: "1.2rem", md: "2rem", lg: "1rem" }}
              fontWeight="bold"
            >
              <span>{travellers}</span>
              {travellers > 1 ? "Travellers" : ""}
            </Text>
            <Modal
              closeOnOverlayClick={false}
              isOpen={isOpen}
              onClose={onClose}
            >
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>TRAVELLERS & CLASS</ModalHeader>
                <ModalCloseButton />
                <ModalBody pb={6}></ModalBody>
                <Box p="1rem">
                  {/* ADULT */}
                  <Box className={stylesFlightSection.adultChild}>
                    ADULTS (12y +)
                  </Box>
                  <Box className={stylesFlightSection.passengerButtonContainer}>
                    {arr.map((val) => (
                      <Box
                        key={val}
                        className={`${
                          selectedButtonColor === val
                            ? stylesFlightSection.clickPassenger
                            : stylesFlightSection.passengerButton
                        }`}
                        onClick={() => {
                          setTogglePassengerColor(!togglePassengerColor);
                          onClickNoOfPass(val);
                          setSelectedButtonColor(val);
                        }}
                      >
                        {val}
                      </Box>
                    ))}
                  </Box>
                  {/* ADULT */}

                  {/* Children */}
                  <Box className={stylesFlightSection.infantChildren}>
                    <Box>
                      <Box className={stylesFlightSection.adultChild}>
                        CHILDREN (2y - 12y )
                      </Box>
                      <Box
                        className={stylesFlightSection.passengerButtonContainer}
                      >
                        {ar1.map((val) => (
                          <Box
                            key={val}
                            className={
                              val === 0
                                ? stylesFlightSection.clickPassenger
                                : stylesFlightSection.passengerButton
                            }
                            onClick={() => {
                              setTogglePassengerColor(!togglePassengerColor);
                              onClickNoOfPass(val);
                            }}
                          >
                            {val}
                          </Box>
                        ))}
                      </Box>
                    </Box>
                    <Box>
                      {/* Children */}

                      {/* INFANTS */}
                      <Box className={stylesFlightSection.adultChild}>
                        INFANTS (below 2y)
                      </Box>
                      <Box
                        className={stylesFlightSection.passengerButtonContainer}
                      >
                        {ar1.map((val) => (
                          <Box
                            key={val}
                            className={
                              val === 0
                                ? stylesFlightSection.clickPassenger
                                : stylesFlightSection.passengerButton
                            }
                            onClick={() => {
                              setTogglePassengerColor(!togglePassengerColor);
                              onClickNoOfPass(val);
                            }}
                          >
                            {val}
                          </Box>
                        ))}
                      </Box>
                      {/* INFANTS */}
                    </Box>
                  </Box>
                  {/*CHILDREN*/}
                </Box>
                <ModalFooter>
                  <Button colorScheme="blue" mr={3} onClick={onClose}>
                    Save
                  </Button>
                  <Button onClick={onClose}>Cancel</Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
          </Box>
        </Hide>

        {/* Travellers & Classes  */}
      </Flex>
      {/* Arrival & Departure Of Flights  */}

      {/* FareType  */}
      <FareType />
      {/* FareType  */}

      {/* SUBMIT BUTTON */}
      <Button
        mt={{ base: "1rem", md: "2rem", lg: "2rem" }}
        fontSize={{ base: "0.7rem", md: "1rem", lg: "1.8rem" }}
        w={{ base: "5rem", md: "8rem", lg: "15rem" }}
        h={{ base: "1.7rem", md: "2.2rem", lg: "2.9rem" }}
        borderRadius="2rem"
        _hover={{
          background: "white",
          color: "#0B5FF4",
          border: "2px solid #0B5FF4",
        }}
        bg="#0B5FF4"
        color="white"
        py={{ base: "0rem", md: "0.1rem", lg: "1.8rem" }}
        px={{ base: "1.5rem", md: "2.2rem", lg: "2rem" }}
      >
        SEARCH
      </Button>
      {/* SUBMIT BUTTON */}
    </Box>
  );
};

export default FlightSection;
