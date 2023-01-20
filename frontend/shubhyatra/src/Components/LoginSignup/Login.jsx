import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
  Link,
  Stack,
  Text,
  useColorModeValue,
  useToast,
} from "@chakra-ui/react";
import { useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import NavContainer from "../HomePage/TopSection/Navbar";
import Footer from "../HomePage/Footer/Footer";
import { AuthContext } from "../Context/Auth.context";

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {login}=React.useContext(AuthContext)
  const Navigate=useNavigate()
  const toast = useToast()
  const HnadleLogin = () => {
    const payload = {
      email,
      password,
    };
    fetch("http://localhost:8080/users/login", {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        // console.log(res);
        localStorage.setItem("token", res.token);
        // localStorage.setItem("name", res.name);
        console.log(res)
        if(res.token){
          login(res.token,res.name,res.email)
          toast({
            title: 'Login Success.',
            description:"You have successfully logged in",
            status: 'success',
            duration: 1000,
            isClosable: true,
          })
        }
        Navigate("/")
      })
      .catch((err) => {
        console.log("err :>> ", err)
        toast({
          title: 'Login Failed.',
          description:"Please Enter Correct Details",
          status: 'error',
          duration: 1000,
          isClosable: true,
        })
      });
  };
  return (
    <>
    <NavContainer/>
      <Flex
        minH={"70vh"}
        align={"center"}
        justify={"center"}
        bg={useColorModeValue("gray.50", "gray.800")}
      >
        <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
          <Stack align={"center"}>
            <Heading fontSize={"4xl"} textAlign={"center"}>
              Login
            </Heading>
            <Text fontSize={"lg"} color={"gray.600"}>
              for great deals and offers ✌️
            </Text>
          </Stack>
          <Box
            rounded={"lg"}
            bg={useColorModeValue("white", "gray.700")}
            boxShadow={"lg"}
            p={8}
          >
            <Stack spacing={4}>
              <FormControl id="email" isRequired>
                <FormLabel>Email address</FormLabel>
                <Input
                  type="email"
                  placeholder="Enter Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </FormControl>
              <FormControl id="password" isRequired>
                <FormLabel>Password</FormLabel>
                <InputGroup>
                  <Input
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <InputRightElement h={"full"}>
                    <Button
                      variant={"ghost"}
                      onClick={() =>
                        setShowPassword((showPassword) => !showPassword)
                      }
                    >
                      {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <Stack spacing={10} pt={2}>
                <Button
                  loadingText="Submitting"
                  size="lg"
                  bg={"blue.400"}
                  color={"white"}
                  _hover={{
                    bg: "blue.500",
                  }}
                  onClick={HnadleLogin}
                >
                  Login
                </Button>
              </Stack>
              <Stack pt={6}>
                <Text align={"center"}>
                  New to Shubhyatra? <NavLink to="/signup"> <Link color={"blue.400"}>SignUp</Link></NavLink>
                </Text>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
      <Footer/>
    </>
  );
}

export default Login;
