import { Box, Heading } from "@chakra-ui/react"
import { TrainsNavbar } from "../Components/Trains/TrainsNavbar"
import { TrainsTabs } from "../Components/Trains/TrainsTabs"



export const Trains = () =>{
    return (
        <Box>
            <Heading>Trains</Heading>
            <TrainsNavbar />
            <TrainsTabs />
        </Box>
    )
}