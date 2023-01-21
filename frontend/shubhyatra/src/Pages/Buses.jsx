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
  Select,
  Text,
  VStack,
} from "@chakra-ui/react";
import styles_buses from "../Styles/buses.module.css";
import React, { useState } from "react";
import { BsArrowLeftRight } from "react-icons/bs";
import AllBuses from "../Components/Buses/AllBuses";
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

function Buses() {
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");
  const [date, setDate] = useState("");
  const [data, setData] = useState([]);
  const [newDate, setNewDate] = useState("");
  const [newMonth, setNewMonth] = useState("");
  const [from, setFrom] = useState("");
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
      .get(`http://localhost:8080/bus/?from=${start}&to=${end}`, {
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
      .get(`http://localhost:8080/bus/?from=${start}&to=${end}&sort=${sort}`, {
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
  }

  const handleFilter = (filter) => {
    axios
      .get(
        `http://localhost:8080/bus/?from=${start}&to=${end}&filter=${filter}`,
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

  // console.log(localStorage.getItem("token"));

  return (
    <div>
      <NavContainer />
      <Box w="100%" m="auto" className={styles_buses.shubhYatra_wrapper_bus}>
        <HStack
          width={["95%", "60%", "55%", "45%"]}
          m="auto"
          p="2"
          justifyContent={"space-evenly"}
          alignItems="center"
        >
          <Select placeholder="From" fontSize={"large"}  color="black" onChange={(e) => setStart(e.target.value)}>
            <option value="Mumbai">Mumbai</option>
            <option value="Pune">Pune</option>
            <option value="Delhi">Delhi</option>
            <option value="Banglore">Banglore</option>
            <option value="Chennai">Chennai</option>
          </Select>
          <BsArrowLeftRight fontSize="75px" />
          <Select placeholder="To" fontSize={"large"}  color="black" onChange={(e) => setEnd(e.target.value)}>
            <option value="Mumbai">Mumbai</option>
            <option value="Pune">Pune</option>
            <option value="Delhi">Delhi</option>
            <option value="Banglore">Banglore</option>
            <option value="Chennai">Chennai</option>
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
            colorScheme="teal"
            fontSize={["lg", "lg", "-moz-initial"]}
            w={["xs", "sm", "md", "lg", "xl"]}
            onClick={handleSubmit}
          >
            Search
          </Button>
        </HStack>
      </Box>
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
            <Heading m="auto" size={["sm", "sm", "sm", "md", "md"]}>
              Showing {data.length} buses from {from}
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
              <Heading mb="3px" size="md">
                Pickup Time
              </Heading>
              <Grid gridTemplateColumns={"repeat(2,1fr)"} gap="10px">
                <VStack
                  onClick={() => handleFilter("Pmorning")}
                  spacing={"0.5"}
                  p="2px"
                  border="1px solid teal"
                >
                  <BsBrightnessAltHigh fontSize={"26px"} />
                  <Heading size="xs">Morning</Heading>
                  <Text fontSize="xs" color={"teal"}>
                    6AM to 11AM
                  </Text>
                </VStack>
                <VStack
                  onClick={() => handleFilter("Pafternoon")}
                  spacing={"0.5"}
                  p="2px"
                  border="1px solid teal"
                >
                  <BsBrightnessHigh fontSize={"26px"} />
                  <Heading size="xs">afternoon</Heading>
                  <Text fontSize="xs" color={"teal"}>
                    11AM to 6PM
                  </Text>
                </VStack>
                <VStack
                  onClick={() => handleFilter("Pevening")}
                  spacing={"0.5"}
                  p="2px"
                  border="1px solid teal"
                >
                  <BsFillCloudSunFill fontSize={"26px"} />
                  <Heading size="xs">evening</Heading>
                  <Text fontSize="xs" color={"teal"}>
                    6PM to 11PM
                  </Text>
                </VStack>
                <VStack
                  onClick={() => handleFilter("Pnight")}
                  spacing={"0.5"}
                  p="2px"
                  border="1px solid teal"
                >
                  <BsFillCloudMoonFill fontSize={"26px"} />
                  <Heading size="xs">night</Heading>
                  <Text fontSize="xs" color={"teal"}>
                    11PM to 6AM
                  </Text>
                </VStack>
              </Grid>
            </Box>
            <Box cursor={"pointer"} m="auto">
              <Heading mb="3px" size="md">
                Drop Time
              </Heading>
              <Grid gridTemplateColumns={"repeat(2,1fr)"} gap="10px">
                <VStack
                  onClick={() => handleFilter("Dmorning")}
                  spacing={"0.5"}
                  p="2px"
                  border="1px solid teal"
                >
                  <BsBrightnessAltHigh fontSize={"26px"} />
                  <Heading size="xs">Morning</Heading>
                  <Text fontSize="xs" color={"teal"}>
                    6AM to 11AM
                  </Text>
                </VStack>
                <VStack
                  onClick={() => handleFilter("Dafternoon")}
                  spacing={"0.5"}
                  p="2px"
                  border="1px solid teal"
                >
                  <BsBrightnessHigh fontSize={"26px"} />
                  <Heading size="xs">afternoon</Heading>
                  <Text fontSize="xs" color={"teal"}>
                    11AM to 6PM
                  </Text>
                </VStack>
                <VStack
                  onClick={() => handleFilter("Devening")}
                  spacing={"0.5"}
                  p="2px"
                  border="1px solid teal"
                >
                  <BsFillCloudSunFill fontSize={"26px"} />
                  <Heading size="xs">evening</Heading>
                  <Text fontSize="xs" color={"teal"}>
                    6PM to 11PM
                  </Text>
                </VStack>
                <VStack
                  onClick={() => handleFilter("Dnight")}
                  spacing={"0.5"}
                  p="2px"
                  border="1px solid teal"
                >
                  <BsFillCloudMoonFill fontSize={"26px"} />
                  <Heading size="xs">night</Heading>
                  <Text fontSize="xs" color={"teal"}>
                    11PM to 6AM
                  </Text>
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
                Bus Types
              </MenuButton>
              <MenuList
                w={["100px", "150px", "200px", "200px", "250px"]}
                m="auto"
              >
                <MenuItem onClick={() => handleFilter("ac")}>
                  A/C Sleeper
                </MenuItem>
                <MenuItem onClick={() => handleFilter("nac")}>
                  Non A/C Sleeper
                </MenuItem>
              </MenuList>
            </Menu>
          </Grid>
        </div>
        <AllBuses data={data} date={newDate} month={newMonth} />
      </Grid>
      <Footer />
    </div>
  );
}

export default Buses;
