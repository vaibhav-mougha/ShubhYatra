import { Box, Flex, Radio, RadioGroup, Stack, Text } from "@chakra-ui/react"


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
        </Box>

       
        
    )
}