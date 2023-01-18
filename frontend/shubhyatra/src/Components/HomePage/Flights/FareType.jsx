import React from "react";
import {
  Box,
  Flex,
  Text,
  Radio,
  RadioGroup,
  Stack,
  Hide,
} from "@chakra-ui/react";

const FareType = () => {
  return (
    <>
      <Hide below="md">
        <Flex
          w="90%"
          // border="1px solid white"
          justify="space-between"
          mt="1.5rem"
        >
          <Flex>
            <Box>
              <Text
                textAlign="left"
                fontSize={{ base: "0.5rem", md: "0.5rem", lg: "0.7rem" }}
                fontWeight="bold"
                color="gray"
              >
                Select A
              </Text>
              <Text
                textAlign="left"
                fontSize={{ base: "0.5rem", md: "0.5rem", lg: "0.7rem" }}
                fontWeight="bold"
                color="gray"
              >
                Fare Type:
              </Text>
            </Box>
            <Box textAlign="left">
              <RadioGroup>
                <Stack direction="row">
                  <Radio value="1" ml="0.7rem">
                    <Text
                      fontSize={{ base: "0.5rem", md: "0.5rem", lg: "0.7rem" }}
                      fontWeight="bold"
                      bg="#EAF5FF"
                      p="0.1rem"
                    >
                      Regular
                    </Text>
                    <Text
                      fontSize={{ base: "0.5rem", md: "0.5rem", lg: "0.7rem" }}
                      fontWeight="bold"
                      bg="#EAF5FF"
                      p="0.1rem"
                    >
                      Fares
                    </Text>
                  </Radio>

                  <Radio value="2" ml="0.7rem">
                    <Text
                      fontSize={{ base: "0.5rem", md: "0.5rem", lg: "0.7rem" }}
                      fontWeight="bold"
                      bg="#EAF5FF"
                      p="0.1rem"
                    >
                      Armed Forces
                    </Text>
                    <Text
                      fontSize={{ base: "0.5rem", md: "0.5rem", lg: "0.7rem" }}
                      fontWeight="bold"
                      bg="#EAF5FF"
                      p="0.1rem"
                    >
                      Fares
                    </Text>
                  </Radio>

                  <Radio value="3" ml="0.7rem">
                    <Text
                      fontSize={{ base: "0.5rem", md: "0.5rem", lg: "0.7rem" }}
                      fontWeight="bold"
                      bg="#EAF5FF"
                      p="0.1rem"
                    >
                      Student
                    </Text>
                    <Text
                      fontSize={{ base: "0.5rem", md: "0.5rem", lg: "0.7rem" }}
                      fontWeight="bold"
                      bg="#EAF5FF"
                      p="0.1rem"
                    >
                      Fares
                    </Text>
                  </Radio>

                  <Radio value="4" ml="0.7rem">
                    <Text
                      fontSize={{ base: "0.5rem", md: "0.5rem", lg: "0.7rem" }}
                      fontWeight="bold"
                      bg="#EAF5FF"
                      p="0.1rem"
                    >
                      Senior Citizen
                    </Text>
                    <Text
                      fontSize={{ base: "0.5rem", md: "0.5rem", lg: "0.7rem" }}
                      fontWeight="bold"
                      bg="#EAF5FF"
                      p="0.1rem"
                    >
                      Fares
                    </Text>
                  </Radio>

                  <Radio value="5" ml="0.7rem">
                    <Text
                      fontSize={{ base: "0.5rem", md: "0.5rem", lg: "0.7rem" }}
                      fontWeight="bold"
                      bg="#EAF5FF"
                      p="0.1rem"
                    >
                      Doctor & Nurses
                    </Text>
                    <Text
                      fontSize={{ base: "0.5rem", md: "0.5rem", lg: "0.7rem" }}
                      fontWeight="bold"
                      bg="#EAF5FF"
                      p="0.1rem"
                    >
                      Fares
                    </Text>
                  </Radio>

                  <Radio value="6" ml="0.7rem">
                    <Text
                      fontSize={{ base: "0.5rem", md: "0.5rem", lg: "0.7rem" }}
                      fontWeight="bold"
                      bg="#EAF5FF"
                      p="0.1rem"
                    >
                      Double Seat
                    </Text>
                    <Text
                      fontSize={{ base: "0.5rem", md: "0.5rem", lg: "0.7rem" }}
                      fontWeight="bold"
                      bg="#EAF5FF"
                      p="0.1rem"
                    >
                      Fares
                    </Text>
                  </Radio>
                </Stack>
              </RadioGroup>
            </Box>
          </Flex>
          <Hide below="md">
            <Flex>
              <Box>
                <Text
                  fontSize={{ base: "0.7rem", md: "0.7rem", lg: "0.7rem" }}
                  fontWeight="bold"
                  ml="0.7rem"
                >
                  Trending Searches:
                </Text>
              </Box>
              <Box>
                <Text
                  fontSize={{ base: "0.7rem", md: "0.7rem", lg: "0.8rem" }}
                  ml="0.7rem"
                  bg="#F2F2F2"
                  p="0.1rem"
                >
                  Mumbai to Bangkok
                </Text>
              </Box>
              <Box>
                <Text
                  fontSize={{ base: "0.7rem", md: "0.7rem", lg: "0.8rem" }}
                  ml="0.7rem"
                  bg="#F2F2F2"
                  p="0.1rem"
                >
                  Delhi to Kolkata
                </Text>
              </Box>
            </Flex>
          </Hide>
        </Flex>
      </Hide>
    </>
  );
};

export default FareType;
