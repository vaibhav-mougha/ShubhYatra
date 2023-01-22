import { Box } from "@chakra-ui/react"
import { TrainsTabs } from "../Components/Trains/TrainsTabs"
import NavContainer from "../Components/HomePage/TopSection/Navbar";
import OffersCarousel from "../Components/HomePage/OffersCarousel/OffersCarousel";
import { Details } from "../Components/Trains/Details";
import { AboutSite } from "../Components/Trains/AboutSite";
import { QandA } from "../Components/Trains/QandA";
import TrainFooter from "../Components/Trains/TrainFooter/TrainFooter";


export const Trains = () =>{
    return (
        <Box>
            <NavContainer />
            <TrainsTabs />
            {/* <TopCarousel /> */}
            <OffersCarousel />
            <AboutSite />
            <Details />
            <QandA />
            <TrainFooter />
        </Box>
    )
}