import { Box, Grid, GridItem, Heading, Stack, Text } from "@chakra-ui/react"

const data = [
    {
        title:"Book Train Tickets Without Any Hassle", 
        desc:"Traveling by train is a popular choice for both short commutes and longer journeys, and for a good reason. With over a thousand routes connecting cities in India, traveling by train is the most convenient mode of travel. The combination of price, convenience, and speed makes train travel a sweet spot for discerning travelers. Travelers can now search routes, check fares and book train tickets with MakeMyTrip’s train booking system. Moreover, you can also use the MakeMyTrip’s app for easy access"
    },
    {
        title:"Easy IRCTC Train Booking", 
        desc:"Indian Railways is among the world’s largest rail networks with an operating route length of more than 65,000 km. IRCTC (Indian Railway Catering and Tourism Corporation) is the face of India's online train tickets booking system. MakeMyTrip is the leading portal for booking IRCTC train tickets online which is offering the most convenient ways to book train tickets, check train schedule, train availability, and view live train status. IRCTC has been the most used website for train tickets booking"
    },
    {
        title:"Check Your PNR Status", 
        desc:"Apart from providing e-tickets by mail, MakeMyTrip also sends you the relevant updates on your registered number over text and WhatsApp. When you book train tickets each ticket holder gets a unique PNR, an acronym for Passenger Name Record, to check the status of the train and booking details. With the help of PNR enquiry, you can check live train status from the comfort of your home. With PNR enquiry, you will get to know whether your ticket is confirmed or if will you get a seat only if someon."
    },
    {
        title:"Hassle-free Train Ticket Booking on MakeMyTrip", 
        desc:"Counted among the world’s largest rail networks, Indian Railways is the most popular mode of transport for passengers. MakeMyTrip is the leading portal for making your IRCTC ticket booking within a few minutes. All you have to do is enter your source and destination and look at all the trains available on the selected route. In order to confirm your tickets, enter your IRCTC login ID and be ready to embark on a journey of a lifetime. You can also book your train tickets on MakeMyTrip’s mobile app. Once you are done booking your ticket, you will receive a confirmation message on your mobile. Moreover, you would receive your e-train ticket on the mentioned email ID. Instead of carrying physical tickets, all you have to do is show your e-train ticket received on your mobile to the ticket collector."
    },
    {
        title:"How Book Train Tickets Online with MakeMyTrip", 
        desc:`Having confusion on how to book your train tickets online? process of booking your tickets in simple easy steps.
        Step 1: Log in to our website and select the train icon. Under the ‘book train tickets’ section, choose your city and its station where you will depart from and arrive at.
        
        Step 2: Then select the date of departure and choose from the preferred class of train travel. You can choose between Sleeper Class, Third Class, First AC, Second AC, Third AC, AC Chair car, and so on. Remember, while you book train tickets, the train fare varies according to the class of travel you choose.
        
        Step 3: You can now see all the updated train details with their schedule and availability. You can filter out by pricing, departure time, date, travel class, train types, and even stations.
        
        Step 4: Once you choose your desired train, you now reach the review page where you can fill up your details, berth preference, and also check the booking details and total amount. You can also avail free cancellation policy and travel insurance exclusive available on MakeMyTrip.
        
        Step 5: To proceed further, you will need to put your IRCTC login details. If you don’t have your IRCTC username, you can always create a new one by adding the details.
        
        Step 6: The final step is to add coupon codes (if you have any) and proceed to pay. After selecting the mode of payment, you will be redirected to IRCTC for authentication. All you need to do is type in your password and have your tickets delivered to your mailbox.`
    },
    {
        title:"Why should you book Train Tickets with MakeMyTrip", 
        desc:`MakeMyTrip can provide you the most reliable and secure way of train booking and all you need to do is plan your itinerary. The portal provides a user-friendly experience to our customers. Instead of waiting or queueing up in lines for hours to book a train ticket, you can visit the website. The train tickets online booking system of MakeMyTrip allow you to book your travel package from anywhere. All you need to do is enter your IRCTC login detail and you have all the information you need.`
    }
   
]

export const Details = () => {
    return (
        <Box 
         bgColor="#E7E7E7"
         padding="20px"
        >
        <Grid
        templateColumns={{base:"repeat(1, 1fr)", md:"repeat(2, 1fr)"}}
        // gap="20"
       
        w="80%"
        m="auto"
        mt="40px"
       
        >
            {
                data.map((item, i) =>(
                    <GridItem key={i}
                    borderBottom="1px solid gray"
                    p="30px"
                    >
                        <Heading
                        fontSize="lg"
                        color="gray.800"
                        fontWeight="500"
                        >
                        {item.title}
                        </Heading>
                        
                        <Text 
                        noOfLines={5}
                        fontSize="0.9rem"
                        color="gray.600"
                        >
                        {item.desc}
                        </Text>
                    </GridItem>
                ))
            }
        </Grid>
        </Box>
       
    )
}