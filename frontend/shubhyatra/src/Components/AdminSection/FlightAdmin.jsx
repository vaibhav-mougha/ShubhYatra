import React from "react";
import {
  Box,
  Input,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  FormControl,
  FormLabel,
} from "@chakra-ui/react";

const FlightAdmin = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = React.useRef(null);

  return (
    <div>
      <Box
        display="flex"
        w="25rem"
        margin="auto"
        // border="1px solid red"
        justifyContent="space-between"
      >
        <Input
          w="15rem"
          size={["sm", "sm", "md", "md"]}
          placeholder="Search Flights By Names"
          value=""
        />
        <Button ml="2rem" variant="outline" size={["sm", "sm", "md", "md"]}>
          Search
        </Button>
      </Box>

      <Box
        display={{ lg: "flex" }}
        mt="2rem"
        justify="space-between"
        // border="1px solid black"
        w="50%"
      >
        {/* All Flights */}
        <Button variant={"outline"} textTransform={"capitalize"}>
          All Flights
        </Button>

        {/*  Add New Flights */}
        <Button
          bg="#257CFF"
          borderRadius="1rem"
          variant="solid"
          ml={{ lg: "2rem" }}
          mr={{ lg: "2rem" }}
          mt={{ base: "2rem", lg: "0rem" }}
          mb={{ base: "2rem" }}
          color="white"
          _hover={{
            background: "white",
            color: "#257CFF",
            border: "2px solid #257CFF",
          }}
          onClick={onOpen}
        >
          Add New Flights
        </Button>

        {/* Save Flights will route you to the Booked Flights page */}

        <Button
          bg="#31AE33"
          borderRadius="1rem"
          variant="solid"
          // ml="3rem"
          color="white"
          _hover={{
            background: "white",
            color: "#31AE33",
            border: "2px solid #31AE33",
          }}
        >
          Save
        </Button>

        <Modal
          initialFocusRef={initialRef}
          isOpen={isOpen}
          onClose={onClose}
          size="sm"
        >
          <ModalOverlay />
          <ModalContent
          // border="1rem solid #257cff"
          >
            <ModalHeader
              textDecoration="underline"
              color="#257cff"
              fontWeight="bold"
              fontSize="2.5rem"
            >
              Flight Details
            </ModalHeader>
            <ModalCloseButton />

            <ModalBody pb={6}>
              <FormControl>
                <FormLabel>DEPARTURE TIME</FormLabel>
                <Input
                  ref={initialRef}
                  placeholder="Enter Departure Time"
                  type="text"
                  name="departtime"
                  value=""
                />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>ARRIVAL TIME</FormLabel>
                <Input
                  placeholder="Enter Arrival Time"
                  type="text"
                  name="aarivtime"
                  value=""
                />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>DURATION</FormLabel>
                <Input
                  placeholder="Enter Duration of travel"
                  type="text"
                  name="duration"
                  value=""
                />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>FARE</FormLabel>
                <Input
                  placeholder="Enter Fare"
                  type="number"
                  name="fare"
                  value=""
                />
              </FormControl>
            </ModalBody>

            <ModalFooter>
              <Button
                bg="#257CFF"
                borderRadius="1rem"
                variant="solid"
                ml="3rem"
                color="white"
                _hover={{
                  background: "white",
                  color: "#257CFF",
                  border: "2px solid #257CFF",
                }}
                mr={3}
                //   onClick={handleSubmit}  use onClick for saving new Flight Details
              >
                Save
              </Button>
              <Button onClick={onClose}>Cancel</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Box>
    </div>
  );
};

export default FlightAdmin;
