import { Box, Button, Flex, Input, 
    InputGroup, Radio, RadioGroup, 
    Select, Stack, Text,
 } from "@chakra-ui/react"


export const TrainsTabs = ()=>{
   
    return (
        <Box 
        w="6xl"
        m="auto"
        p="40px 20px"
        borderRadius="10px"
        border="1px solid black">
            <Flex 
            justifyContent="space-between" 
            >
                    
                <RadioGroup defaultValue="1">
                    <Stack direction="row">
                        <Radio value = "1">BOOK TRAIN TICKETS</Radio>
                            <Radio value = "2">CHECK PNR STATUS</Radio>
                            <Radio value = "3">LIVE TRAINS STATUS</Radio>
                    </Stack>
            
                </RadioGroup>  
                <Stack>
                    <Text>IRCTC Train Ticket Booking</Text>
                    <Text>IRCTC Authorized e-ticketing</Text>
                </Stack>    
            </Flex>

            <Flex>
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

            <Button>SEARCH</Button>
        </Box>

       
        
    )
}