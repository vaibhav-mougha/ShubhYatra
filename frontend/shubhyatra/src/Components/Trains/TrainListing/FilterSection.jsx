import { Box, Checkbox, Flex, Heading, Input, Stack, Text } from "@chakra-ui/react"

const filters = [
    {name:"Night - 12 AM to 6 AM"},
    {name:"Morning - 6 AM to 12 PM"},
    {name:"Afternoon - 12 PM to 6 PM"},
    {name:"Evening - 6 PM to 12 AM"},
]

export const FilterSection = () => {
    return (
        <Box>
            <Heading>Search data using filters</Heading>
            <Stack>
                {
                    filters.map((item, i) => (
                        <Flex alignItems="center" gap="2" key={i}>
                            <Checkbox />
                            <Text>{item.name}</Text>
                        </Flex>
                    ))
                }
            </Stack>
        </Box>
    )
}