import { Box, Heading, Stack, Text, VStack } from "@chakra-ui/react"
import Styles from "./AboutSite.module.css";

export const AboutSite = () =>{
    return (
        <Stack
        w="80%" 
        m="auto"
         textAlign="left" 
         align="left"
         spacing={5}
         >
            <Box>
                <Heading 
                fontSize="0.8rem"
                color="gray.700"
                 >
                 PRODUCT OFFERING
                 </Heading>

                <Text 
                fontSize="0.9rem"
                color="gray.600"
                >
                Flights, International Flights, Charter Flights, Hotels, International Hotels, Homestays and Villas, Activities, Holidays In India, International Holidays, Book Hotels From UAE, myBiz for Corporate Travel, Book Online Cabs, Book Bus Tickets, Book Train Tickets, Cheap Tickets to India, Book Flights From US, Book Flights From UAE, Trip Planner, Gift Cards, Trip Money, Trip Ideas, Travel Blog, PNR Status, One Way Cab
                </Text>
            </Box>

            <Box>
                <Heading
                fontSize="0.8rem"
                color="gray.700"
                >
                MAKEMYTRIP
                </Heading>
                <Text
                fontSize="0.9rem"
                color="gray.600"
                >
                About Us, Investor Relations, Careers, MMT Foundation, CSR Policy, myPartner - Travel Agent Portal, Foreign Exchange, List your hotel, Partners- Redbus, Partners- Goibibo
                </Text>
            </Box>

            <Box>
                <Heading
                fontSize="0.8rem"
                color="gray.700"
                >
                ABOUT THE SITE
                </Heading>
                <Text
                fontSize="0.9rem"
                color="gray.600"
                >
                Customer Support, Payment Security, Privacy Policy, User Agreement, Terms of Service, More Offices, Make A Payment, Work From Home
                </Text>
            </Box>

            <Box>
                <Heading
                fontSize="0.8rem"
                color="gray.700"
                >
                IMPORTANT LINKS
                </Heading>
                <Text
                fontSize="0.9rem"
                color="gray.600"
                >
                Bangalore to Mysore Trains, Mumbai to Goa Trains, Pune to Mumbai Trains, Delhi to Jaipur Trains, Hyderabad to Tirupati Trains, Delhi to Agra Trains, Bangalore to Goa Trains, Bangalore to Chennai Trains, Mumbai to Ahmedabad Trains, Mumbai to Delhi Trains, Pune to Goa Trains, Hyderabad to Bangalore Trains, Delhi to Amritsar Trains, Jaipur To Goa Trains, Kolkata To Goa Trains, Lakhimpur To Lucknow Train
                </Text>
            </Box>

            <Box>
                <Heading
                fontSize="0.8rem"
                color="gray.700"
                >
                QUICK LINKS
                </Heading>
                <Text
                fontSize="0.9rem"
                color="gray.600"
                >
                IRCTC Train Ticket, Southern Railway, Western Railway, RCTC Seat Availability, Railway Time Table, Indian Railway Stations, Taktal Reservation, Garib Rath, Shatabdi Express, Duronto Express, Rajdhani Express, Live Train Status, Gomti Express, Shalimar Express, Vande Bharat Express, Gatimaan Express, Gitanjali Express, Sabari Express, Avadh Express, Vivek Express, Tejas Express, Intercity Express, Tapti Ganga Express
                </Text>
            </Box>
        </Stack>
    )
}