import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "./FlightSlider.module.css";
import { slider } from "./FlightSliderData";

import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper/core";

import { Box, Flex, Text, Image, Hide, Show } from "@chakra-ui/react";

SwiperCore.use([Autoplay, Pagination, Navigation]);

export default function FlightSlider() {
  return (
    <>
      <Hide below="md">
        <Box
          bg="white"
          w="90%"
          color="black"
          align="center"
          justify="center"
          margin="auto"
          borderRadius="1rem"
          p="1.5rem"
          // border="1px solid white"
          box-shadow="rgba(0, 0, 0, 0.1) 0px 4px 12px"
        >
          <Box border="1px solid white" w="100%">
            <Swiper
              slidesPerView={3}
              spaceBetween={15}
              centeredSlides={true}
              autoplay={{
                delay: 5000,
                disableOnInteraction: true,
              }}
              pagination={{
                clickable: true,
              }}
              // navigation={true}
              className="mySwiper"
              loop={true}
            >
              {slider.map((ele) => (
                <SwiperSlide key={ele.id}>
                  <Box
                    p="1rem"
                    border="1px solid gray"
                    borderRadius="1rem"
                    box-shadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
                  >
                    <Flex border="1px solid white" h="3.5rem">
                      <Image
                        w={{ base: "1rem", md: "4rem", lg: "5rem" }}
                        src={ele.image}
                        alt=""
                      />
                      <Text
                        textAlign="center"
                        color="black"
                        fontSize={{ base: "0.7rem", md: "0.8rem", lg: "1rem" }}
                      >
                        {ele.content}
                      </Text>
                    </Flex>
                  </Box>
                </SwiperSlide>
              ))}
            </Swiper>
          </Box>
        </Box>
      </Hide>

      <Show below="md">
        <Box
          bg="white"
          w="90%"
          color="black"
          align="center"
          justify="center"
          margin="auto"
          borderRadius="1rem"
          p="1.5rem"
          // border="1px solid white"
          box-shadow="rgba(0, 0, 0, 0.1) 0px 4px 12px"
        >
          <Box border="1px solid white" w="100%">
            <Swiper
              slidesPerView={1}
              spaceBetween={10}
              centeredSlides={true}
              autoplay={{
                delay: 5000,
                disableOnInteraction: true,
              }}
              pagination={{
                clickable: true,
              }}
              // navigation={true}
              className="mySwiper"
              loop={true}
            >
              {slider.map((ele) => (
                <SwiperSlide key={ele.id}>
                  <Box
                    p="1rem"
                    border="1px solid gray"
                    borderRadius="1rem"
                    box-shadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
                  >
                    <Flex border="1px solid white" h="3.5rem">
                      <Image src={ele.image} alt="" />
                      <Text
                        textAlign="center"
                        color="black"
                        fontSize={{ base: "0.7rem", md: "0.8rem", lg: "1rem" }}
                      >
                        {ele.content}
                      </Text>
                    </Flex>
                  </Box>
                </SwiperSlide>
              ))}
            </Swiper>
          </Box>
        </Box>
      </Show>
    </>
  );
}
