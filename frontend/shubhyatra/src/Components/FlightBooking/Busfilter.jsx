// import {
//   Box,
//   Button,
//   Grid,
//   Heading,
//   Menu,
//   MenuButton,
//   MenuItem,
//   MenuList,
//   Text,
//   VStack,
// } from "@chakra-ui/react";
// import React from "react";
// import {
//   BsBrightnessAltHigh,
//   BsBrightnessHigh,
//   BsFillCaretDownFill,
//   BsFillCloudMoonFill,
//   BsFillCloudSunFill,
// } from "react-icons/bs";
// function Busfilter({ length = 0,start,handleLowest,handleHighest}) {
//   return (
//     <div w="95%" p="3" m="auto">
//       <Grid
//         justifyContent={"space-evenly"}
//         alignItems="center"
//         gridTemplateColumns={[
//           "repeat(2,1fr)",
//           "repeat(2,1fr)",
//           "repeat(1,1fr)",
//           "repeat(1,1fr)",
//           "repeat(1,1fr)",
//         ]}
//         spacing={"5"}
//         gap="7"
//       >
//         <Heading m="auto" size={"md"}>
//           Showing {length} buses from {start}
//         </Heading>
//         <Menu>
//           <MenuButton
//             w="250px"
//             m="auto"
//             as={Button}
//             rightIcon={<BsFillCaretDownFill />}
//           >
//             Sorted By
//           </MenuButton>
//           <MenuList w="250px" m="auto">
//             <MenuItem onClick={handleLowest}>Lowest Price</MenuItem>
//             <MenuItem onClick={handleHighest}>Highest Price</MenuItem>
//             <MenuItem>Early Departure</MenuItem>
//             <MenuItem>Late Departure</MenuItem>
//             <MenuItem>Duration</MenuItem>
//           </MenuList>
//         </Menu>
//         <Box cursor={"pointer"} w="80%" m="auto">
//           <Heading mb="3px" size="md">
//             Pickup Time
//           </Heading>
//           <Grid gridTemplateColumns={"repeat(2,1fr)"} gap="10px">
//             <VStack spacing={"0.5"} p="2px" border="1px solid teal">
//               <BsBrightnessAltHigh fontSize={"26px"} />
//               <Heading size="xs">Morning</Heading>
//               <Text fontSize="xs" color={"teal"}>
//                 6AM to 11AM
//               </Text>
//             </VStack>
//             <VStack spacing={"0.5"} p="2px" border="1px solid teal">
//               <BsBrightnessHigh fontSize={"26px"} />
//               <Heading size="xs">afternoon</Heading>
//               <Text fontSize="xs" color={"teal"}>
//                 11AM to 6PM
//               </Text>
//             </VStack>
//             <VStack spacing={"0.5"} p="2px" border="1px solid teal">
//               <BsFillCloudSunFill fontSize={"26px"} />
//               <Heading size="xs">evening</Heading>
//               <Text fontSize="xs" color={"teal"}>
//                 6PM to 1PM
//               </Text>
//             </VStack>
//             <VStack spacing={"0.5"} p="2px" border="1px solid teal">
//               <BsFillCloudMoonFill fontSize={"26px"} />
//               <Heading size="xs">night</Heading>
//               <Text fontSize="xs" color={"teal"}>
//                 6AM to 11AM
//               </Text>
//             </VStack>
//           </Grid>
//         </Box>
//         <Box cursor={"pointer"} w="80%" m="auto">
//           <Heading mb="3px" size="md">
//             Drop Time
//           </Heading>
//           <Grid gridTemplateColumns={"repeat(2,1fr)"} gap="10px">
//             <VStack spacing={"0.5"} p="2px" border="1px solid teal">
//               <BsBrightnessAltHigh fontSize={"26px"} />
//               <Heading size="xs">Morning</Heading>
//               <Text fontSize="xs" color={"teal"}>
//                 6AM to 11AM
//               </Text>
//             </VStack>
//             <VStack spacing={"0.5"} p="2px" border="1px solid teal">
//               <BsBrightnessHigh fontSize={"26px"} />
//               <Heading size="xs">afternoon</Heading>
//               <Text fontSize="xs" color={"teal"}>
//                 11AM to 6PM
//               </Text>
//             </VStack>
//             <VStack spacing={"0.5"} p="2px" border="1px solid teal">
//               <BsFillCloudSunFill fontSize={"26px"} />
//               <Heading size="xs">evening</Heading>
//               <Text fontSize="xs" color={"teal"}>
//                 6PM to 1PM
//               </Text>
//             </VStack>
//             <VStack spacing={"0.5"} p="2px" border="1px solid teal">
//               <BsFillCloudMoonFill fontSize={"26px"} />
//               <Heading size="xs">night</Heading>
//               <Text fontSize="xs" color={"teal"}>
//                 6AM to 11AM
//               </Text>
//             </VStack>
//           </Grid>
//         </Box>
//         <Menu>
//           <MenuButton
//             w="250px"
//             m="auto"
//             as={Button}
//             rightIcon={<BsFillCaretDownFill />}
//           >
//             Bus Types
//           </MenuButton>
//           <MenuList w="250px" m="auto">
//             <MenuItem>A/C Sleeper</MenuItem>
//             <MenuItem>Non A/C Sleeper</MenuItem>
//           </MenuList>
//         </Menu>
//       </Grid>
//     </div>
//   );
// }

// export default Busfilter;
