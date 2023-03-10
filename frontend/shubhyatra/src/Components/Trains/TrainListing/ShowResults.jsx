import { Box, Button, Flex, Heading, Stack, Text, Icon } from "@chakra-ui/react"
import { useContext } from "react";
import {TbArrowsRightLeft} from "react-icons/tb"
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/Auth.context";


export const ShowResults = ({data}) =>{
    const{handleProdId}=useContext(AuthContext);

    const Navigate=useNavigate();

    const handleBook = (id) =>{
        handleProdId(id);
        Navigate("/traincheckout");
    }

    if(data.length <= 0){
        return (
            <Box>
            <Heading 
            color="blackAlpha.700" 
            mb="20px">Results:</Heading>
            <Heading fontSize="2xl">No data found</Heading>

            </Box>
        )
    }

    return (
        <Stack 
        w={{base:"100%", md:"80%"}}
       
        >
            <Heading
            color="blackAlpha.700" 
            mb="20px"
            >Results:</Heading>
            {
                data.map((item, i) => (
                    <Stack key={i}
                    w="100%"
                    p="10px"
                    border="1px solid gray"
                    borderRadius="10px"
                    >
                        <Heading fontSize="xl">{item.name}</Heading>
                        <Flex alignItems="center"  gap="20px">
                            <Text fontSize="1.1rem">{item.from}</Text>
                            <Icon as={TbArrowsRightLeft} />
                            <Text fontSize="1.1rem">{item.to}</Text>
                        </Flex>

                        <Flex gap="20px">
                            <Text fontSize="1.1rem">Arrival time: {item.arrival}</Text>
                            <Text fontSize="1.1rem">Departure time: {item.departure}</Text>
                        </Flex>

                        <Heading fontSize="lg">Rs. {item.price}</Heading>
                        <Button 
                        w="fit-content"
                        colorScheme="purple"
                        onClick={() => handleBook(item._id)}
                        >Book Now</Button>
                    </Stack>
                ))
            }
        </Stack>
    )
}