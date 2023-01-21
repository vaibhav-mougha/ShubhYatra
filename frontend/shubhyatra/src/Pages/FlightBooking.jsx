import {
  Box,
  Button,
  Grid,
  Heading,
  HStack,
  Input,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  VStack,
  Flex,
  Radio,
  RadioGroup,
  Stack,
  FormControl,
  FormLabel,
  Select,
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
import styles_buses from "../Styles/buses.module.css";
import React, { useState } from "react";
// import { BsArrowLeftRight } from "react-icons/bs";
import {
  BsBrightnessAltHigh,
  BsBrightnessHigh,
  BsFillCaretDownFill,
  BsFillCloudMoonFill,
  BsFillCloudSunFill,
} from "react-icons/bs";
import axios from "axios";
import NavContainer from "../Components/HomePage/TopSection/Navbar";
import Footer from "../Components/HomePage/Footer/Footer";
import AllFlights from "../Components/FlightBooking/AllFlights";
import { BsArrowLeftRight } from "react-icons/bs";
import stylesFlightSection from "../Components/HomePage/Flights//flightSection.module.css";
import FareType from "../Components/HomePage/Flights/FareType";

function Buses() {
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");
  const [date, setDate] = useState("");
  const [data, setData] = useState([]);
  const [newDate, setNewDate] = useState("");
  const [newMonth, setNewMonth] = useState("");
  const [from, setFrom] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [selectedButtonColor, setSelectedButtonColor] = useState(1);
  const [travellers, setTravellers] = React.useState(null);
  const arr = [1, 2, 3, 4, 5, 6, 7, 8];
  let ar1 = [0, 1, 2, 3, 4, 5];
  const [togglePassengerColor, setTogglePassengerColor] = useState(false);

  const onClickNoOfPass = (val) => {
    setTravellers(val);
  };
  // const Navigate=useNavigate()

  // useEffect(()=>{
  //   let data=localStorage.getItem("token")
  //   if(!data){
  //     Navigate("/")
  //   }
  // },[])

  let month = {
    JAN: "01",
    FEB: "02",
    MAR: "03",
    APR: "04",
    MAY: "05",
    JUN: "06",
    JUL: "07",
    AUG: "08",
    SEP: "09",
    OCT: "10",
    NOV: "11",
    DEC: "12",
  };

  const handleSubmit = () => {
    setFrom(start);
    axios
      .get(`http://localhost:8080/bookedflight/?from=${start}&to=${end}`, {
        headers: {
          authorization: localStorage.getItem("token"),
        },
      })
      .then((res) => setData(res.data))
      .catch((err) => console.error(err));
    let newDate = date.split("-");
    let newDay = newDate[2].split("T")[0];
    setNewDate(newDay);
    let newMonth = newDate[1];
    for (let key in month) {
      if (month[key] === newMonth) {
        setNewMonth(key);
      }
    }
  };

  function handleSort(sort) {
    axios
      .get(
        `http://localhost:8080/bookedflight/?from=${start}&to=${end}&sort=${sort}`,
        {
          headers: {
            authorization: localStorage.getItem("token"),
          },
        }
      )
      .then((res) => setData(res.data))
      .catch((err) => console.error(err));
    let newDate = date.split("-");
    let newDay = newDate[2].split("T")[0];
    setNewDate(newDay);
    let newMonth = newDate[1];
    for (let key in month) {
      if (month[key] === newMonth) {
        setNewMonth(key);
      }
    }
  }

  const handleFilter = (filter) => {
    axios
      .get(
        `http://localhost:8080/bookedflight/?from=${start}&to=${end}&filter=${filter}`,
        {
          headers: {
            authorization: localStorage.getItem("token"),
          },
        }
      )
      .then((res) => setData(res.data))
      .catch((err) => console.error(err));
    let newDate = date.split("-");
    let newDay = newDate[2].split("T")[0];
    setNewDate(newDay);
    let newMonth = newDate[1];
    for (let key in month) {
      if (month[key] === newMonth) {
        setNewMonth(key);
      }
    }
  };

  console.log(localStorage.getItem("token"));

  return (
    <div>
      <NavContainer />

      <Box className={styles_buses.shubhYatra_wrapper_bus} mb="3rem">
        <Box
          w="90%"
          bg="white"
          p="1rem"
          color="black"
          align="center"
          justify="center"
          m="auto"
          mt="0rem"
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
              <Select
                placeholder="From"
                onChange={(e) => setStart(e.target.value)}
              >
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
              <Select placeholder="To" onChange={(e) => setEnd(e.target.value)}>
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
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
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
                      <Box
                        className={stylesFlightSection.passengerButtonContainer}
                      >
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
                            className={
                              stylesFlightSection.passengerButtonContainer
                            }
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
                                  setTogglePassengerColor(
                                    !togglePassengerColor
                                  );
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
                            className={
                              stylesFlightSection.passengerButtonContainer
                            }
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
                                  setTogglePassengerColor(
                                    !togglePassengerColor
                                  );
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
            onClick={handleSubmit}
          >
            SEARCH
          </Button>
          {/* SUBMIT BUTTON */}
        </Box>
      </Box>

      {/* <Box w="100%" m="auto" className={styles_buses.shubhYatra_wrapper_bus}>
          <HStack
            width={["95%", "60%", "55%", "45%"]}
            m="auto"
            p="2"
            justifyContent={"space-evenly"}
            alignItems="center"
          >
            <Select placeholder="From" fontSize={"large"}  color="black" onChange={(e) => setStart(e.target.value)}>
            <option value="New Delhi">New Delhi</option>
              <option value="Mumbai">Mumbai</option>
              <option value="Chennai">Chennai</option>
              <option value="Kolkata">Kolkata</option>
            </Select>
            <BsArrowLeftRight fontSize="75px" />
            <Select placeholder="To" fontSize={"large"}  color="black" onChange={(e) => setEnd(e.target.value)}>
            <option value="New Delhi">New Delhi</option>
              <option value="Mumbai">Mumbai</option>
              <option value="Chennai">Chennai</option>
              <option value="Kolkata">Kolkata</option>
            </Select>
            <Input
              placeholder="Select Date and Time"
              size="md"
              type="datetime-local"
              fontSize={"large"}  color="black"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
            <Button
            //   colorScheme="teal"
              fontSize={["lg", "lg", "-moz-initial"]}
              w={["xs", "sm", "md", "lg", "xl"]}
              onClick={handleSubmit}
              _hover={{
                bg:"#0B5FF4",
                color:"white" ,
                border: "2px solid #0B5FF4",
              }}
             
              background="white"
                color="#0B5FF4"
            >
              Search
            </Button>
          </HStack>
        </Box> */}

      <Grid
        w="100%"
        gridTemplateColumns={[
          "repeat(1,1fr)",
          "repeat(1,1fr)",
          "repeat(2,1fr)",
          "repeat(2,1fr)",
          "0.20fr 0.75fr",
        ]}
        p="8px"
        m="auto"
        justifyContent={["space-around", "space-evenly"]}
      >
        <div w="95%" p="3" m="auto">
          <Grid
            justifyContent={"space-around"}
            alignItems="center"
            gridTemplateColumns={[
              "repeat(2,1fr)",
              "repeat(2,1fr)",
              "repeat(1,1fr)",
              "repeat(1,1fr)",
              "repeat(1,1fr)",
            ]}
            gap={["0", "2", "3", "5", "7"]}
          >
            <Heading
              m="auto"
              size={["sm", "sm", "sm", "md", "md"]}
              color="#0E26AC"
            >
              Showing {data.length} Flights from {from}
            </Heading>
            <Menu>
              <MenuButton
                m="auto"
                as={Button}
                rightIcon={<BsFillCaretDownFill />}
              >
                Sorted By
              </MenuButton>
              <MenuList
                w={["100px", "150px", "200px", "200px", "250px"]}
                m="auto"
              >
                <MenuItem onClick={() => handleSort("lowToHigh")}>
                  Lowest Price
                </MenuItem>
                <MenuItem onClick={() => handleSort("highToLow")}>
                  Highest Price
                </MenuItem>
                <MenuItem onClick={() => handleSort("earlyDeparture")}>
                  Early Departure
                </MenuItem>
                <MenuItem onClick={() => handleSort("lateDeparture")}>
                  Late Departure
                </MenuItem>
                <MenuItem onClick={() => handleSort("duration")}>
                  Duration
                </MenuItem>
              </MenuList>
            </Menu>
            <Box cursor={"pointer"} m="auto">
              <Heading mb="3px" size="md" color="#0E26AC">
                Departure At
              </Heading>
              <Grid gridTemplateColumns={"repeat(2,1fr)"} gap="10px">
                <VStack
                  onClick={() => handleFilter("Pmorning")}
                  spacing={"0.5"}
                  p="2px"
                  border="1px solid #257CFF"
                  borderRadius="0.3rem"
                >
                  <BsBrightnessAltHigh fontSize={"26px"} color="orange" />
                  <Heading size="xs" color="orange">
                    Morning
                  </Heading>
                  <Text fontSize="xs">6AM to 11AM</Text>
                </VStack>
                <VStack
                  onClick={() => handleFilter("Pafternoon")}
                  spacing={"0.5"}
                  p="2px"
                  border="1px solid #257CFF"
                  borderRadius="0.3rem"
                >
                  <BsBrightnessHigh fontSize={"26px"} color="#01A0C7" />
                  <Heading size="xs" color="#01A0C7">
                    Afternoon
                  </Heading>
                  <Text fontSize="xs">11AM to 6PM</Text>
                </VStack>
                <VStack
                  onClick={() => handleFilter("Pevening")}
                  spacing={"0.5"}
                  p="2px"
                  border="1px solid #257CFF"
                  borderRadius="0.3rem"
                >
                  <BsFillCloudSunFill fontSize={"26px"} color="#DC6778" />
                  <Heading size="xs" color="#DC6778">
                    Evening
                  </Heading>
                  <Text fontSize="xs">6PM to 11PM</Text>
                </VStack>
                <VStack
                  onClick={() => handleFilter("Pnight")}
                  spacing={"0.5"}
                  p="2px"
                  border="1px solid #257CFF"
                  borderRadius="0.3rem"
                >
                  <BsFillCloudMoonFill fontSize={"26px"} />
                  <Heading size="xs">Night</Heading>
                  <Text fontSize="xs">11PM to 6AM</Text>
                </VStack>
              </Grid>
            </Box>
            <Box cursor={"pointer"} m="auto">
              <Heading mb="3px" size="md" color="#0E26AC">
                Arrival
              </Heading>
              <Grid gridTemplateColumns={"repeat(2,1fr)"} gap="10px">
                <VStack
                  onClick={() => handleFilter("Dmorning")}
                  spacing={"0.5"}
                  p="2px"
                  border="1px solid #257CFF"
                  borderRadius="0.3rem"
                >
                  <BsBrightnessAltHigh fontSize={"26px"} color="orange" />
                  <Heading size="xs" color="orange">
                    Morning
                  </Heading>
                  <Text fontSize="xs">6AM to 11AM</Text>
                </VStack>
                <VStack
                  onClick={() => handleFilter("Dafternoon")}
                  spacing={"0.5"}
                  p="2px"
                  border="1px solid #257CFF"
                  borderRadius="0.3rem"
                >
                  <BsBrightnessHigh fontSize={"26px"} color="#01A0C7" />
                  <Heading size="xs" color="#01A0C7">
                    Afternoon
                  </Heading>
                  <Text fontSize="xs">11AM to 6PM</Text>
                </VStack>
                <VStack
                  onClick={() => handleFilter("Devening")}
                  spacing={"0.5"}
                  p="2px"
                  border="1px solid #257CFF"
                  borderRadius="0.3rem"
                >
                  <BsFillCloudSunFill fontSize={"26px"} color="#DC6778" />
                  <Heading size="xs" color="#DC6778">
                    Evening
                  </Heading>
                  <Text fontSize="xs">6PM to 11PM</Text>
                </VStack>
                <VStack
                  onClick={() => handleFilter("Dnight")}
                  spacing={"0.5"}
                  p="2px"
                  border="1px solid #257CFF"
                  borderRadius="0.3rem"
                >
                  <BsFillCloudMoonFill fontSize={"26px"} />
                  <Heading size="xs">Night</Heading>
                  <Text fontSize="xs">11PM to 6AM</Text>
                </VStack>
              </Grid>
            </Box>
            <Menu>
              <MenuButton
                w={["100px", "150px", "200px", "200px", "250px"]}
                m="auto"
                as={Button}
                rightIcon={<BsFillCaretDownFill />}
              >
                Flight Types
              </MenuButton>
              <MenuList
                w={["100px", "150px", "200px", "200px", "250px"]}
                m="auto"
              >
                <MenuItem onClick={() => handleFilter("luck")}>
                  Non Stop
                </MenuItem>
                <MenuItem onClick={() => handleFilter("non")}>
                  Flights With Journey Break
                </MenuItem>
              </MenuList>
            </Menu>
          </Grid>
        </div>
        <AllFlights data={data} date={newDate} month={newMonth} />
      </Grid>
      <Footer />
    </div>
  );
}

export default Buses;
