import {
  Button,
  Flex,
  Grid,
  Heading,
  Menu,
  MenuButton,
  MenuList,
} from "@chakra-ui/react";
import React from "react";
import { BsFillCaretDownFill, BsFillTelephoneFill } from "react-icons/bs";
import { TbBottle, TbLamp2 } from "react-icons/tb";
import { BiBlanket, BiCctv, BiUsb } from "react-icons/bi";
import { GiCharging } from "react-icons/gi";
import { SiNewrelic } from "react-icons/si";
import { MdMobileFriendly, MdOutlineAirlineSeatFlat } from "react-icons/md";

function Amenities() {
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsFillCaretDownFill />}>
        Amenities
      </MenuButton>
      <MenuList
        w={["95%", "90%", "-webkit-max-content"]}
        m="auto"
        p="5"
        color="#CB2C64"
      >
        <Grid
          gridTemplateColumns={[
            "repeat(1,1fr)",
            "repeat(1,1fr)",
            "repeat(1,1fr)",
            "repeat(1,1fr)",
            "repeat(5,1fr)",
          ]}
          gap={["2", "3", "5"]}
        >
          <Flex gap="2">
            <BsFillTelephoneFill fontSize={"20px"} />
            <Heading size="xs">Emergency Contact Number</Heading>
          </Flex>
          <Flex gap="2">
            <TbBottle fontSize={"20px"} />
            <Heading size="xs">Bottle</Heading>
          </Flex>
          <Flex gap="2">
            <BiBlanket fontSize={"20px"} />
            <Heading size="xs">Blanket</Heading>
          </Flex>
          <Flex gap="2">
            <GiCharging fontSize={"20px"} />
            <Heading size="xs">Charging Point</Heading>
          </Flex>
          <Flex gap="2">
            <BiUsb fontSize={"20px"} />
            <Heading size="xs">USB port for charger</Heading>
          </Flex>
          <Flex gap="2">
            <TbLamp2 fontSize={"20px"} />
            <Heading size="xs">Reading Light</Heading>
          </Flex>
          <Flex gap="2">
            <MdOutlineAirlineSeatFlat fontSize={"20px"} />
            <Heading size="xs">Captain seat</Heading>
          </Flex>
          <Flex gap="2">
            <MdMobileFriendly fontSize={"20px"} />
            <Heading size="xs">M-ticket</Heading>
          </Flex>
          <Flex gap="2">
            <BiCctv fontSize={"20px"} />
            <Heading size="xs">CCTV</Heading>
          </Flex>
          <Flex gap="2">
            <SiNewrelic fontSize={"20px"} />
            <Heading size="xs">Pillow</Heading>
          </Flex>
        </Grid>
      </MenuList>
    </Menu>
  );
}

export default Amenities;
