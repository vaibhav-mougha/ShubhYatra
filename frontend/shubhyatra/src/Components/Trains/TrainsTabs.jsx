import { Box, Button, Center, Flex, Input, 
    InputGroup, Radio, RadioGroup, 
    Select, Stack, Text,
 } from "@chakra-ui/react"
import { Link, Navigate } from "react-router-dom"


export const TrainsTabs = ()=>{
   
    return (
        <Box 
        bgColor="#0E25A8"
        pb="20px"
        >
            <Box 
            w="6xl"
            m="auto"
            p="40px 20px"
            borderRadius="10px"
            
            bgColor= "white"
            >
                <Flex 
                justifyContent="space-between" 
                >
                        
                    <RadioGroup defaultValue="1">
                        <Stack 
                        color="blackAlpha.600"
                        fontWeight="bold" 
                        direction={{md:"row"}}
                        gap="2"
                        >
                            <Radio value = "1">BOOK TRAIN TICKETS</Radio>
                            <Radio value = "2">CHECK PNR STATUS</Radio>
                            <Radio value = "3">LIVE TRAINS STATUS</Radio>
                        </Stack>
                
                    </RadioGroup>  
                    <Box>
                        <Text
                        fontSize="0.9rem"
                        fontWeight="bold" 
                        >IRCTC Train Ticket Booking</Text>
                        <Text color="gray.500">IRCTC Authorized e-ticketing</Text>
                    </Box>    
                </Flex>

                <Flex
                mt="20px"
                gap="4"
                >
                    <Input type="text" value = "Delhi" placeholder="From" />
                    <Input type="text" value = "Mumbai" placeholder="To" />
                    <Input type = "date" />

                    <Select placeholder="Select class">
                        <option value="All Class">All Class</option>
                        <option value="Sleeper Class">Sleeper Class</option>
                        <option value="Third AC">Third AC</option>
                        <option value="Second AC">Second AC</option>
                        <option value="First AC">First AC</option>
                        <option value="Second Seating">Second Seating</option>
                        <option value="AC Chair Car">AC Chair Car</option>
                        <option value="First Class">First Class</option>
                        <option value="Third AC Economy">Third AC Economy</option>
                    </Select>
                </Flex>

                <Center>
                    <Button  
                    mt="20px"
                    colorScheme="blue"
                    px="50px"
                    borderRadius="30px"
                    >
                    <Link to="./listing">SEARCH</Link>
                    
                    </Button>
                </Center>
                
            </Box>
        </Box>
       

       
        
    )
}