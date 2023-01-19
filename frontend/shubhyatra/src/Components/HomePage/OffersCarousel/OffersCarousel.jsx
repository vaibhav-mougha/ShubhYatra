import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "./OffersCarousel.module.css";
import { slider } from "./OffersCarouselData";

import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper/core";

import {
  Box,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  Flex,
  Text,
  Image,
  Hide,
  Show,
} from "@chakra-ui/react";

SwiperCore.use([Autoplay, Pagination, Navigation]);

export default function OffersCarousel() {
  return (
    <>
      <Box
        bg="white"
        w="90%"
        color="black"
        align="center"
        justify="center"
        margin="auto"
        borderRadius="1rem"
        p="3rem"
        // border="1px solid white"
        box-shadow="rgba(0, 0, 0, 0.1) 0px 4px 12px"
      >
        <Tabs>
          <TabList>
            <Text
              textAlign="center"
              fontSize={{ base: "0.7rem", md: "0.8rem", lg: "2rem" }}
              fontWeight="bold"
              mr="2rem"
            >
              OFFERS
            </Text>
            <Hide below="md">
              <Tab>
                <Text
                  textAlign="center"
                  fontSize={{ base: "0.7rem", md: "0.8rem", lg: "1rem" }}
                  fontWeight="bold"
                >
                  ALL OFFERS
                </Text>
              </Tab>

              <Tab>
                <Text
                  textAlign="center"
                  fontSize={{ base: "0.7rem", md: "0.8rem", lg: "1rem" }}
                  fontWeight="bold"
                >
                  FLIGHTS
                </Text>
              </Tab>

              <Tab>
                <Text
                  textAlign="center"
                  fontSize={{ base: "0.7rem", md: "0.8rem", lg: "1rem" }}
                  fontWeight="bold"
                >
                  HOTELS
                </Text>
              </Tab>

              <Tab>
                <Text
                  textAlign="center"
                  fontSize={{ base: "0.7rem", md: "0.8rem", lg: "1rem" }}
                  fontWeight="bold"
                >
                  HOLIDAYS
                </Text>
              </Tab>

              <Tab>
                <Text
                  textAlign="center"
                  fontSize={{ base: "0.7rem", md: "0.8rem", lg: "1rem" }}
                  fontWeight="bold"
                >
                  TRAINS
                </Text>
              </Tab>

              <Tab>
                <Text
                  textAlign="center"
                  fontSize={{ base: "0.7rem", md: "0.8rem", lg: "1rem" }}
                  fontWeight="bold"
                >
                  CABS
                </Text>
              </Tab>

              <Tab>
                <Text
                  textAlign="center"
                  fontSize={{ base: "0.7rem", md: "0.8rem", lg: "1rem" }}
                  fontWeight="bold"
                >
                  BANK OFFERS
                </Text>
              </Tab>

              <Tab>
                <Text
                  textAlign="center"
                  fontSize={{ base: "0.7rem", md: "0.8rem", lg: "1rem" }}
                  fontWeight="bold"
                >
                  OTHERS
                </Text>
              </Tab>
            </Hide>
          </TabList>

          <TabPanels>
            {/* <TabPanel>
              <p>one!</p>
            </TabPanel> */}
          </TabPanels>
        </Tabs>

        <Hide below="md">
          <Box border="1px solid white" mt="3rem" w="100%">
            <Swiper
              slidesPerView={2}
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
                <SwiperSlide key={ele.first.id}>
                  <Flex
                    p="1rem"
                    border="1px solid gray"
                    borderRadius="1rem"
                    box-shadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
                  >
                    <Box border="1px solid white">
                      <Image src={ele.first.thumbnail_image} alt="" />
                      <Text
                        textAlign="center"
                        color="gray"
                        mt="2rem"
                        fontSize={{
                          base: "0.7rem",
                          md: "0.8rem",
                          lg: "0.7rem",
                        }}
                      >
                        T&C's Apply
                      </Text>
                    </Box>
                    <Box ml="1rem">
                      <Text
                        textAlign="left"
                        color="gray"
                        // mt="1rem"
                        fontSize={{ base: "0.7rem", md: "0.8rem", lg: "1rem" }}
                      >
                        {ele.first.title}
                      </Text>

                      <Text
                        textAlign="left"
                        color="black"
                        // mt="1rem"
                        fontSize={{
                          base: "0.7rem",
                          md: "0.8rem",
                          lg: "1.3rem",
                        }}
                        fontWeight="bold"
                        textDecoration="underline"
                        textDecorationColor="red"
                      >
                        {ele.first.subTitle}
                      </Text>

                      <Text
                        textAlign="left"
                        color="gray"
                        // mt="1rem"
                        fontSize={{ base: "0.7rem", md: "0.8rem", lg: "1rem" }}
                      >
                        {ele.first.offer}
                      </Text>

                      <Text
                        textAlign="left"
                        color="#0C61F4"
                        mt="3rem"
                        fontSize={{
                          base: "0.7rem",
                          md: "0.8rem",
                          lg: "1.2rem",
                        }}
                      >
                        KNOW MORE
                      </Text>
                    </Box>
                  </Flex>

                  <Flex
                    mt="2rem"
                    p="1rem"
                    border="1px solid gray"
                    borderRadius="1rem"
                    box-shadow="rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px"
                  >
                    <Box border="1px solid white">
                      <Image src={ele.second.thumbnail_image} alt="" />
                      <Text
                        textAlign="center"
                        color="gray"
                        mt="2rem"
                        fontSize={{
                          base: "0.7rem",
                          md: "0.8rem",
                          lg: "0.7rem",
                        }}
                      >
                        T&C's Apply
                      </Text>
                    </Box>
                    <Box ml="1rem">
                      <Text
                        textAlign="left"
                        color="gray"
                        // mt="1rem"
                        fontSize={{ base: "0.7rem", md: "0.8rem", lg: "1rem" }}
                      >
                        {ele.second.title}
                      </Text>

                      <Text
                        textAlign="left"
                        color="black"
                        // mt="1rem"
                        fontSize={{
                          base: "0.7rem",
                          md: "0.8rem",
                          lg: "1.3rem",
                        }}
                        fontWeight="bold"
                        textDecoration="underline"
                        textDecorationColor="red"
                      >
                        {ele.second.subTitle}
                      </Text>

                      <Text
                        textAlign="left"
                        color="gray"
                        // mt="1rem"
                        fontSize={{ base: "0.7rem", md: "0.8rem", lg: "1rem" }}
                      >
                        {ele.second.offer}
                      </Text>

                      <Text
                        textAlign="left"
                        color="#0C61F4"
                        mt="3rem"
                        fontSize={{
                          base: "0.7rem",
                          md: "0.8rem",
                          lg: "1.2rem",
                        }}
                      >
                        KNOW MORE
                      </Text>
                    </Box>
                  </Flex>
                </SwiperSlide>
              ))}
            </Swiper>
          </Box>
        </Hide>

        <Show below="md">
          <Box border="1px solid white" mt="3rem" w="100%">
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
                <SwiperSlide key={ele.first.id}>
                  <Flex
                    p="1rem"
                    border="1px solid gray"
                    borderRadius="1rem"
                    box-shadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
                  >
                    <Box border="1px solid white">
                      <Image src={ele.first.thumbnail_image} alt="" />
                      <Text
                        textAlign="center"
                        color="gray"
                        mt="2rem"
                        fontSize={{
                          base: "0.7rem",
                          md: "0.8rem",
                          lg: "0.7rem",
                        }}
                      >
                        T&C's Apply
                      </Text>
                    </Box>
                    <Box ml="1rem">
                      <Text
                        textAlign="left"
                        color="gray"
                        // mt="1rem"
                        fontSize={{ base: "0.7rem", md: "0.8rem", lg: "1rem" }}
                      >
                        {ele.first.title}
                      </Text>

                      <Text
                        textAlign="left"
                        color="black"
                        // mt="1rem"
                        fontSize={{
                          base: "0.7rem",
                          md: "0.8rem",
                          lg: "1.3rem",
                        }}
                        fontWeight="bold"
                        textDecoration="underline"
                        textDecorationColor="red"
                      >
                        {ele.first.subTitle}
                      </Text>

                      <Text
                        textAlign="left"
                        color="gray"
                        // mt="1rem"
                        fontSize={{ base: "0.7rem", md: "0.8rem", lg: "1rem" }}
                      >
                        {ele.first.offer}
                      </Text>

                      <Text
                        textAlign="left"
                        color="#0C61F4"
                        mt="3rem"
                        fontSize={{
                          base: "0.7rem",
                          md: "0.8rem",
                          lg: "1.2rem",
                        }}
                      >
                        KNOW MORE
                      </Text>
                    </Box>
                  </Flex>

                  <Flex
                    mt="2rem"
                    p="1rem"
                    border="1px solid gray"
                    borderRadius="1rem"
                    box-shadow="rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px"
                  >
                    <Box border="1px solid white">
                      <Image src={ele.second.thumbnail_image} alt="" />
                      <Text
                        textAlign="center"
                        color="gray"
                        mt="2rem"
                        fontSize={{
                          base: "0.7rem",
                          md: "0.8rem",
                          lg: "0.7rem",
                        }}
                      >
                        T&C's Apply
                      </Text>
                    </Box>
                    <Box ml="1rem">
                      <Text
                        textAlign="left"
                        color="gray"
                        // mt="1rem"
                        fontSize={{ base: "0.7rem", md: "0.8rem", lg: "1rem" }}
                      >
                        {ele.second.title}
                      </Text>

                      <Text
                        textAlign="left"
                        color="black"
                        // mt="1rem"
                        fontSize={{
                          base: "0.7rem",
                          md: "0.8rem",
                          lg: "1.3rem",
                        }}
                        fontWeight="bold"
                        textDecoration="underline"
                        textDecorationColor="red"
                      >
                        {ele.second.subTitle}
                      </Text>

                      <Text
                        textAlign="left"
                        color="gray"
                        // mt="1rem"
                        fontSize={{ base: "0.7rem", md: "0.8rem", lg: "1rem" }}
                      >
                        {ele.second.offer}
                      </Text>

                      <Text
                        textAlign="left"
                        color="#0C61F4"
                        mt="3rem"
                        fontSize={{
                          base: "0.7rem",
                          md: "0.8rem",
                          lg: "1.2rem",
                        }}
                      >
                        KNOW MORE
                      </Text>
                    </Box>
                  </Flex>
                </SwiperSlide>
              ))}
            </Swiper>
          </Box>
        </Show>
      </Box>
    </>
  );
}
