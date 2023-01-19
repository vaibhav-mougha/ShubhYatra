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
        <Grid
          gap={["1", "2", "3"]}
          gridTemplateColumns={[
            "repeat(1,1fr)",
            "repeat(1,1fr)",
            "repeat(1,1fr)",
            "repeat(2,1fr)",
            "repeat(4,1fr)",
          ]}
        >
          <Image
            src="https://media.istockphoto.com/id/1073261410/photo/empty-air-plane-seats-blue-sky-and-clouds-in-the-window-airplane-interior.jpg?s=612x612&w=0&k=20&c=0F2S07o4byWT8TRLV6y3pRJaqRLkazLC3_mWef2k_BQ="
            alt="IMG1"
            w="250px"
            h="150"
          />
          <Image
            src="https://theluxurytravelexpert.com/wp-content/uploads/2021/03/best-airlines-for-flying-first-class.jpg"
            alt="IMG1"
            w="250px"
            h="150"
          />
          <Image
            src="https://media.architecturaldigest.com/photos/5cb4bbaeaff8466a96559a4a/4:3/w_4372,h_3279,c_limit/037.jpg"
            alt="IMG1"
            w="220px"
            h="150"
          />
          <Image
            src="https://i.pinimg.com/originals/34/c2/a9/34c2a98410451cd6175abb8b9f6377d6.jpg"
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
