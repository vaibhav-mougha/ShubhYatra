import {
  Button,
  Grid,
  Image,
  Menu,
  MenuButton,
  MenuList,
} from "@chakra-ui/react";
import React from "react";
import { BsFillCaretDownFill } from "react-icons/bs";
function Photo() {
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsFillCaretDownFill />}>
        Photos
      </MenuButton>
      <MenuList w="-webkit-max-content" m="auto" p="5">
        <Grid gap={["1","2","3"]} gridTemplateColumns={["repeat(1,1fr)","repeat(1,1fr)","repeat(1,1fr)","repeat(2,1fr)","repeat(4,1fr)"]}>
          <Image
            src="https://s3-ap-southeast-1.amazonaws.com/rb-plus/BI/APP/IND/SCALED/18243/1087/SI/DL/stupHw.jpeg"
            alt="IMG1"
            w="250px"
            h="150"
          />
          <Image
            src="https://s3-ap-southeast-1.amazonaws.com/rb-plus/BI/APP/IND/SCALED/18243/1087/ST/DL/juo5vn.jpeg"
            alt="IMG1"
            w="250px"
            h="150"
          />
          <Image
            src="https://s3-ap-southeast-1.amazonaws.com/rb-plus/BI/APP/IND/SCALED/18243/1087/FR/DL/ApR2jC.jpeg"
            alt="IMG1"
            w="220px"
            h="150"
          />
          <Image
            src="https://s3-ap-southeast-1.amazonaws.com/rb-plus/BI/APP/IND/SCALED/18243/1087/ST/DL/te7Xra.jpeg"
            alt="IMG1"
            w="250px"
            h="150"
          />
        </Grid>
      </MenuList>
    </Menu>
  );
}

export default Photo;
