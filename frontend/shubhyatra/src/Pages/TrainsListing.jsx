import { Box } from "@chakra-ui/react"
import NavContainer from "../Components/HomePage/TopSection/Navbar"
import { SearchSection } from "../Components/Trains/TrainListing/SearchSection"



export const TrainsListing = () =>{
    return (
        <Box bgColor="blackAlpha.200">
             <NavContainer />
             <SearchSection />
            
        </Box>
    )
}