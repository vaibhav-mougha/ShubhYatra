import React from "react";
import styles from "./topSection.module.css";
import {
  Box,
  Flex,
  Image,
  Menu,
  MenuButton,
  Hide,
  Show,
  IconButton,
  Accordion,
  AccordionItem,
  AccordionButton,
  Drawer,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
  Text,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import { MdFlight, MdDownhillSkiing } from "react-icons/md";
import {
  FaHotel,
  FaHome,
  FaTrain,
  FaBus,
  FaCar,
  FaRegCreditCard,
  FaChevronDown,
} from "react-icons/fa";
import { GiCommercialAirplane, GiHamburgerMenu } from "react-icons/gi";
import { Link, NavLink } from "react-router-dom";
import FlightSection from "../Flights/FlightSection";
import { AuthContext } from "../../Context/Auth.context";
import { ChevronDownIcon } from "@chakra-ui/icons";

const NavContainer = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const { authState, logout } = React.useContext(AuthContext);
  // const [name, setName] = React.useState("");
  // const [token, setToken] = React.useState(false);
  // useEffect(() => {
  //   const data = localStorage.getItem("name");
  //   if (data) {
  //     setName(data);
  //     setToken(true);
  //   }
  // }, [token, name]);
  return (
    <div className={styles.shubhYatra_wrapper}>
      {/* NAVBAR */}
      <Hide below="sm" mt="10rem">
        <Flex
          w="90%"
          bg="white"
          p="1rem"
          color="white"
          align="center"
          justify="center"
          m="auto"
          mt="3rem"
          mb="3rem"
          // border="3px solid white"
          borderRadius="0.5rem"
        >
          <Flex
            w="90%"
            // border="1px solid white"
            justify="space-between"
          >
            {/* LOGO */}
            <Box
              w="11%"
              // border="1px solid white"
            >
              <Link to="/">
                <Image
                  src="/Assets/ShubhYatra.png"
                  w="100%"
                  alt="ShubhYatraLogo"
                  borderRadius="0.5rem"
                />
              </Link>
            </Box>

            {/* Mid Nav */}
            <Box w="85%">
              <Flex
                justify="space-between"
                // border="1px solid white"
                fontSize={{ base: "0.7rem", md: "0.6rem", lg: "1.2rem" }}
                pt="0.5rem"
              >
                <Box
                  bg="white"
                  color="#555454"
                  _hover={{ color: "#EB2226" }}
                  fontSize={{ base: "0.7rem", md: "1.5rem", lg: "2.2rem" }}
                >
                  <Link to="/">
                    <MdFlight />
                    <Text
                      textAlign="center"
                      fontSize={{ base: "0.7rem", md: "0.8rem", lg: "1rem" }}
                      color="#555454"
                      _hover={{ color: "#EB2226" }}
                    >
                      Flights
                    </Text>
                  </Link>
                </Box>

                <Box
                  bg="white"
                  color="#555454"
                  _hover={{ color: "#EB2226" }}
                  fontSize={{ base: "0.7rem", md: "1.5rem", lg: "2.2rem" }}
                >
                  <Link to="/">
                    <FaHotel />
                    <Text
                      textAlign="center"
                      fontSize={{ base: "0.7rem", md: "0.8rem", lg: "1rem" }}
                      color="#555454"
                      _hover={{ color: "#EB2226" }}
                    >
                      Hotels
                    </Text>
                  </Link>
                </Box>

                <Box
                  bg="white"
                  color="#555454"
                  _hover={{ color: "#EB2226" }}
                  fontSize={{ base: "0.7rem", md: "1.5rem", lg: "2.2rem" }}
                >
                  <Link to="/">
                    <FaHome />
                    <Text
                      textAlign="center"
                      fontSize={{ base: "0.7rem", md: "0.8rem", lg: "1rem" }}
                      color="#555454"
                      _hover={{ color: "#EB2226" }}
                    >
                      Homestays
                    </Text>
                  </Link>
                </Box>

                <Box
                  bg="white"
                  color="#555454"
                  _hover={{ color: "#EB2226" }}
                  fontSize={{ base: "0.7rem", md: "1.5rem", lg: "2.2rem" }}
                >
                  <Link to="/">
                    <FaTrain />
                    <Text
                      textAlign="center"
                      fontSize={{ base: "0.7rem", md: "0.8rem", lg: "1rem" }}
                      color="#555454"
                      _hover={{ color: "#EB2226" }}
                    >
                      Trains
                    </Text>
                  </Link>
                </Box>

                <Box
                  bg="white"
                  color="#555454"
                  _hover={{ color: "#EB2226" }}
                  fontSize={{ base: "0.7rem", md: "1.5rem", lg: "2.2rem" }}
                >
                  <Link to="/buses">
                    <FaBus />
                    <Text
                      textAlign="center"
                      fontSize={{ base: "0.7rem", md: "0.8rem", lg: "1rem" }}
                      color="#555454"
                      _hover={{ color: "#EB2226" }}
                    >
                      Buses
                    </Text>
                  </Link>
                </Box>

                <Box
                  bg="white"
                  color="#555454"
                  _hover={{ color: "#EB2226" }}
                  fontSize={{ base: "0.7rem", md: "1.5rem", lg: "2.2rem" }}
                >
                  <Link to="/">
                    <FaCar />
                    <Text
                      textAlign="center"
                      fontSize={{ base: "0.7rem", md: "0.8rem", lg: "1rem" }}
                      color="#555454"
                      _hover={{ color: "#EB2226" }}
                    >
                      Cabs
                    </Text>
                  </Link>
                </Box>

                <Box
                  bg="white"
                  color="#555454"
                  _hover={{ color: "#EB2226" }}
                  fontSize={{ base: "0.7rem", md: "1.5rem", lg: "2.2rem" }}
                >
                  <Link to="/">
                    <FaRegCreditCard />
                    <Text
                      textAlign="center"
                      fontSize={{ base: "0.7rem", md: "0.8rem", lg: "1rem" }}
                      color="#555454"
                      _hover={{ color: "#EB2226" }}
                    >
                      Forex
                    </Text>
                  </Link>
                </Box>

                <Box
                  bg="white"
                  color="#555454"
                  _hover={{ color: "#EB2226" }}
                  fontSize={{ base: "0.7rem", md: "1.5rem", lg: "2.2rem" }}
                >
                  <Link to="/">
                    <GiCommercialAirplane />
                    <Text
                      textAlign="center"
                      fontSize={{ base: "0.7rem", md: "0.8rem", lg: "1rem" }}
                      color="#555454"
                      _hover={{ color: "#EB2226" }}
                    >
                      Charter
                    </Text>
                  </Link>
                </Box>

                <Box
                  bg="white"
                  color="#555454"
                  _hover={{ color: "#EB2226" }}
                  fontSize={{ base: "0.7rem", md: "1.5rem", lg: "2.2rem" }}
                >
                  <Link to="/">
                    <MdDownhillSkiing />
                    <Text
                      textAlign="center"
                      fontSize={{ base: "0.7rem", md: "0.8rem", lg: "1rem" }}
                      color="#555454"
                      _hover={{ color: "#EB2226" }}
                    >
                      Activites
                    </Text>
                  </Link>
                </Box>

                {/* Registration & Login */}
                <Box>
                  {!authState.token ? (
                    <Link to="/login">
                      <Button
                        fontSize={{ base: "0.4rem", md: "0.6rem", lg: "1rem" }}
                        // w={{ base: "1.7rem", md: "3rem", lg: "8.7rem" }}
                        // h={{ base: "1.2rem", md: "1.8rem", lg: "2.3rem" }}
                        _hover={{
                          background: "#257CFF",
                          color: "white",
                        }}
                        bg="#0A1C93"
                        color="white"
                        py={{ base: "0.1rem", md: "0.1rem", lg: "0.5rem" }}
                        px={{ base: "0.1rem", md: "0.5rem", lg: "2.2rem" }}
                      >
                        Login or Create Account <Box mr="0.2rem"></Box>
                        <FaChevronDown />
                      </Button>
                    </Link>
                  ) : (
                    <Menu>
                      <MenuButton
                        fontSize={{ base: "0.4rem", md: "0.6rem", lg: "1rem" }}
                        // w={{ base: "1.7rem", md: "3rem", lg: "8.7rem" }}
                        // h={{ base: "1.2rem", md: "1.8rem", lg: "2.3rem" }}
                        _hover={{
                          background: "#257CFF",
                          color: "white",
                        }}
                        bg="#0A1C93"
                        color="white"
                        py={{ base: "0.1rem", md: "0.1rem", lg: "0.5rem" }}
                        px={{ base: "0.1rem", md: "0.5rem", lg: "2.2rem" }}
                        as={Button}
                        rightIcon={<ChevronDownIcon />}
                      >
                        {authState.name.toUpperCase()}
                      </MenuButton>
                      <MenuList color={"black"}>
                        <NavLink to="/profile">
                          <MenuItem>Profile</MenuItem>
                        </NavLink>
                        <MenuItem onClick={logout}>Logout</MenuItem>
                      </MenuList>
                    </Menu>
                  )}
                </Box>
              </Flex>
            </Box>
          </Flex>
        </Flex>
        {/* NAVBAR */}

        {/* Flight Section */}
        <FlightSection />
        {/* Flight Section */}
      </Hide>

      <Show below="sm">
        <Flex
          w="90%"
          bg="white"
          p="1rem"
          color="white"
          align="center"
          justify="center"
          m="auto"
          mt="2rem"
          mb="2rem"
          // border="3px solid white"
          borderRadius="0.5rem"
        >
          <Flex
            w="90%"
            // border="1px solid white"
            justify="space-between"
          >
            {/* LOGO */}
            <Box
              w="50%"
              // border="1px solid white"
            >
              <Link to="/">
                <Image
                  src="/Assets/ShubhYatra.png"
                  w="100%"
                  alt="ShubhYatraLogo"
                  borderRadius="0.5rem"
                />
              </Link>
            </Box>

            {/* Mid Nav */}
            <Box pt="0.5rem">
              <Menu>
                <MenuButton
                  as={IconButton}
                  aria-label="Options"
                  icon={<GiHamburgerMenu />}
                  variant="outline"
                  border="3px solid white"
                  bg="#0A1C93"
                  _hover={{ bg: "#0A1C93" }}
                  _expanded={{ bg: "#0A1C93" }}
                  onClick={onOpen}
                />
              </Menu>
            </Box>
          </Flex>
        </Flex>

        {/* Flight Section */}
        <FlightSection />
        {/* Flight Section */}

        <Drawer
          isOpen={isOpen}
          placement="right"
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent bg="white" color="black">
            <DrawerCloseButton />
            <DrawerHeader>
              <Box
                w="70%"
                ml="2.5rem"
                display="flex"
                justify="center"
                align="center"
              >
                {/* LOGO */}
                <Box
                  w="90%"
                  // border="1px solid white"
                >
                  <Link to="/">
                    <Image
                      src="/Assets/ShubhYatra.png"
                      w="100%"
                      alt="ShubhYatraLogo"
                      borderRadius="0.5rem"
                    />
                  </Link>
                </Box>
              </Box>
            </DrawerHeader>

            <Accordion allowToggle>
              <Link to="/">
                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Flex
                        bg="white"
                        color="#555454"
                        _hover={{ color: "#EB2226" }}
                        fontSize="30"
                      >
                        <MdFlight />
                        <Text
                          textAlign="center"
                          fontSize={{
                            base: "1.2rem",
                            md: "0.8rem",
                            lg: "1rem",
                          }}
                          // color="#555454"
                          // _hover={{ color: "#EB2226" }}
                          ml="1rem"
                        >
                          Flights
                        </Text>
                      </Flex>
                    </AccordionButton>
                  </h2>
                </AccordionItem>
              </Link>

              <Link to="/">
                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Flex
                        bg="white"
                        color="#555454"
                        _hover={{ color: "#EB2226" }}
                        fontSize="30"
                      >
                        <FaHotel />
                        <Text
                          textAlign="center"
                          fontSize={{
                            base: "1.2rem",
                            md: "0.8rem",
                            lg: "1rem",
                          }}
                          // color="#555454"
                          // _hover={{ color: "#EB2226" }}
                          ml="1rem"
                        >
                          Hotels
                        </Text>
                      </Flex>
                    </AccordionButton>
                  </h2>
                </AccordionItem>
              </Link>

              <Link to="/">
                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Flex
                        bg="white"
                        color="#555454"
                        _hover={{ color: "#EB2226" }}
                        fontSize="30"
                      >
                        <FaHome />
                        <Text
                          textAlign="center"
                          fontSize={{
                            base: "1.2rem",
                            md: "0.8rem",
                            lg: "1rem",
                          }}
                          // color="#555454"
                          // _hover={{ color: "#EB2226" }}
                          ml="1rem"
                        >
                          Homestays
                        </Text>
                      </Flex>
                    </AccordionButton>
                  </h2>
                </AccordionItem>
              </Link>

              <Link to="/">
                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Flex
                        bg="white"
                        color="#555454"
                        _hover={{ color: "#EB2226" }}
                        fontSize="30"
                      >
                        <FaTrain />
                        <Text
                          textAlign="center"
                          fontSize={{
                            base: "1.2rem",
                            md: "0.8rem",
                            lg: "1rem",
                          }}
                          // color="#555454"
                          // _hover={{ color: "#EB2226" }}
                          ml="1rem"
                        >
                          Trains
                        </Text>
                      </Flex>
                    </AccordionButton>
                  </h2>
                </AccordionItem>
              </Link>

              <Link to="/">
                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Flex
                        bg="white"
                        color="#555454"
                        _hover={{ color: "#EB2226" }}
                        fontSize="30"
                      >
                        <FaBus />
                        <Text
                          textAlign="center"
                          fontSize={{
                            base: "1.2rem",
                            md: "0.8rem",
                            lg: "1rem",
                          }}
                          // color="#555454"
                          // _hover={{ color: "#EB2226" }}
                          ml="1rem"
                        >
                          Buses
                        </Text>
                      </Flex>
                    </AccordionButton>
                  </h2>
                </AccordionItem>
              </Link>

              <Link to="/">
                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Flex
                        bg="white"
                        color="#555454"
                        _hover={{ color: "#EB2226" }}
                        fontSize="30"
                      >
                        <FaCar />
                        <Text
                          textAlign="center"
                          fontSize={{
                            base: "1.2rem",
                            md: "0.8rem",
                            lg: "1rem",
                          }}
                          // color="#555454"
                          // _hover={{ color: "#EB2226" }}
                          ml="1rem"
                        >
                          Cabs
                        </Text>
                      </Flex>
                    </AccordionButton>
                  </h2>
                </AccordionItem>
              </Link>

              <Link to="/">
                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Flex
                        bg="white"
                        color="#555454"
                        _hover={{ color: "#EB2226" }}
                        fontSize="30"
                      >
                        <FaRegCreditCard />
                        <Text
                          textAlign="center"
                          fontSize={{
                            base: "1.2rem",
                            md: "0.8rem",
                            lg: "1rem",
                          }}
                          // color="#555454"
                          // _hover={{ color: "#EB2226" }}
                          ml="1rem"
                        >
                          Forex
                        </Text>
                      </Flex>
                    </AccordionButton>
                  </h2>
                </AccordionItem>
              </Link>

              <Link to="/">
                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Flex
                        bg="white"
                        color="#555454"
                        _hover={{ color: "#EB2226" }}
                        fontSize="30"
                      >
                        <GiCommercialAirplane />
                        <Text
                          textAlign="center"
                          fontSize={{
                            base: "1.2rem",
                            md: "0.8rem",
                            lg: "1rem",
                          }}
                          // color="#555454"
                          // _hover={{ color: "#EB2226" }}
                          ml="1rem"
                        >
                          Charter Flights
                        </Text>
                      </Flex>
                    </AccordionButton>
                  </h2>
                </AccordionItem>
              </Link>

              <Link to="/">
                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Flex
                        bg="white"
                        color="#555454"
                        _hover={{ color: "#EB2226" }}
                        fontSize="30"
                      >
                        <MdDownhillSkiing />
                        <Text
                          textAlign="center"
                          fontSize={{
                            base: "1.2rem",
                            md: "0.8rem",
                            lg: "1rem",
                          }}
                          // color="#555454"
                          // _hover={{ color: "#EB2226" }}
                          ml="1rem"
                        >
                          Activites
                        </Text>
                      </Flex>
                    </AccordionButton>
                  </h2>
                </AccordionItem>
              </Link>

              {/* Registration & Login */}
              {!authState.token ? (
                <Link to="/login">
                  <Button
                    fontSize={{ base: "0.4rem", md: "0.6rem", lg: "1rem" }}
                    // w={{ base: "1.7rem", md: "3rem", lg: "8.7rem" }}
                    // h={{ base: "1.2rem", md: "1.8rem", lg: "2.3rem" }}
                    _hover={{
                      background: "#257CFF",
                      color: "white",
                    }}
                    bg="#0A1C93"
                    color="white"
                    py={{ base: "0.1rem", md: "0.1rem", lg: "0.5rem" }}
                    px={{ base: "0.1rem", md: "0.5rem", lg: "2.2rem" }}
                  >
                    Login or Create Account <Box mr="0.2rem"></Box>
                    <FaChevronDown />
                  </Button>
                </Link>
              ) : (
                <Menu>
                  <MenuButton
                    fontSize={{ base: "0.4rem", md: "0.6rem", lg: "1rem" }}
                    // w={{ base: "1.7rem", md: "3rem", lg: "8.7rem" }}
                    // h={{ base: "1.2rem", md: "1.8rem", lg: "2.3rem" }}
                    _hover={{
                      background: "#257CFF",
                      color: "white",
                    }}
                    bg="#0A1C93"
                    color="white"
                    py={{ base: "0.1rem", md: "0.1rem", lg: "0.5rem" }}
                    px={{ base: "0.1rem", md: "0.5rem", lg: "2.2rem" }}
                    as={Button}
                    rightIcon={<ChevronDownIcon />}
                  >
                    {authState.name.toUpperCase()}
                  </MenuButton>
                  <MenuList color={"black"}>
                    <NavLink to="/profile">
                      <MenuItem>Profile</MenuItem>
                    </NavLink>
                    <MenuItem onClick={logout}>Logout</MenuItem>
                  </MenuList>
                </Menu>
              )}
            </Accordion>
          </DrawerContent>
        </Drawer>
      </Show>
    </div>
  );
};

export default NavContainer;
