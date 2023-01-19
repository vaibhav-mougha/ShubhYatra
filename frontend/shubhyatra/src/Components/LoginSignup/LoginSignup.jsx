import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/hooks";
import { Box } from "@chakra-ui/layout";
import React from "react";
import { FaChevronDown } from "react-icons/fa";
import Login from "./Login";
import Signup from "./Signup";

function LoginSignup() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <div>
      <Button
        onClick={onOpen}
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
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody>
            <Tabs variant="enclosed">
              <TabList>
                <Tab>Register</Tab>
                <Tab>Login</Tab>
              </TabList>
              <TabPanels>
                <TabPanel>
                  <Signup />
                </TabPanel>
                <TabPanel>
                  <Login />
                </TabPanel>
              </TabPanels>
            </Tabs>
          </ModalBody>
        </ModalContent>
      </Modal>
    </div>
  );
}

export default LoginSignup;
