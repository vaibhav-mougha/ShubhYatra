import { Box, Heading } from "@chakra-ui/react"
import { TrainsNavbar } from "../Components/Trains/TrainsNavbar"
import { TrainsTabs } from "../Components/Trains/TrainsTabs"
import NavContainer from "../Components/HomePage/TopSection/Navbar";
import {TopCarousel} from "../Components/Trains/TopSection/TopCarousel";
import OffersCarousel from "../Components/HomePage/OffersCarousel/OffersCarousel";
import Footer from "../Components/HomePage/Footer/Footer";
import { Details } from "../Components/Trains/Details";
import { AboutSite } from "../Components/Trains/AboutSite";


export const Trains = () =>{
    return (
        <Box>
            <NavContainer />
            <TrainsTabs />
            {/* <TopCarousel /> */}
            <OffersCarousel />
            <AboutSite />
            <Details />
            <Footer />
        </Box>
    )
}