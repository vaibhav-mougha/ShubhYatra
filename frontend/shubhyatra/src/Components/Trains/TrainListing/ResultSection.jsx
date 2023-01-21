import { Box, Checkbox, Flex, Heading, Stack, Text } from "@chakra-ui/react"
import axios from "axios"
import { useState } from "react"
import { FilterSection } from "./FilterSection"
import { ShowResults } from "./ShowResults"

const filters = [
    {name:"Night - 12 AM to 6 AM"},
    {name:"Morning - 6 AM to 12 PM"},
    {name:"Afternoon - 12 PM to 6 PM"},
    {name:"Evening - 6 PM to 12 AM"},
]


export const ResultSection = ({data}) => {
    // const [data, setData] = useState([]);

    return (
        <Flex 
        w="90%"
        // border="1px solid gray"
        m="auto"
        mt="50px"
        p="20px"
        borderRadius="15px"
        bgColor="whiteAlpha.900"
        direction = {{base:"column", md: "row"}}
        gap="40px"
        >
            <Stack w={{base:"100%", md:"20%"}}>
                <Heading 
                fontSize="xl"
                color="blackAlpha.700"
                >
                Search data using filters
                </Heading>

                <Stack
                py="20px"
                pr="20px"
                borderRight="1px solid gray"
                
                >
                    {
                        filters.map((item, i) => (
                            <Flex fontSize="1.1rem" alignItems="center" gap="2" key={i}>
                                <Checkbox />
                                <Text fontSize="1.1rem">{item.name}</Text>
                            </Flex>
                        ))
                    }
                </Stack>
            </Stack>

            <ShowResults data={data} />
        </Flex>
    )
}