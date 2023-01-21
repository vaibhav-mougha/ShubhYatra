import { Box, Grid, GridItem, Heading, Text } from "@chakra-ui/react"

const data = [
    {
        title: "Q. Why Book Train Tickets Online With MakeMyTrip?",
        desc: "A. MakeMyTrip, India's leading travel portal is the best way to book train tickets online. No matter where you are in the country, make a hassle-free railway reservation from us using your computer or smartphone. Along with it, you can avail exciting discounts on your first time of booking but also get them on the following rail tickets. Additionally, you will have all the updated information of the seats and classes of trains that are available to book."
    },

    {
        title: "Q. What is the process for booking online train tickets?",
        desc: "Q. What is the process for booking online train tickets?"
    },

    {
        title: "Q. How many people can I book in a single train ticket booking?",
        desc: "A. In one IRCTC ticket booking, there can be a maximum of only six passengers. You can easily add the names and ages of the ones along with whom you are travelling. By hitting on the edit button next to the names, choose each passenger's berth preference. You can also add the other passenger's meal choices on the app. Along with that you also have a few options when it comes to train reservations of six people in a single ticket. You can choose to book when all the berths are in the same coach or if only one or two lower berths are provided."
    },

    {
        title: "Q. How can I cancel my rail tickets at MakeMyTrip?",
        desc: "A. If you have to cancel your train ticket that you have booked, it is easy to do it on the app and our website. All you have to do is visit your profile. Go to the My Trips section to see your booking details. Click on the View & Manage Booking section to see all your ticket details. Along with it, you will have the options of cancelling your railway ticket booking. There is also a partial booking option, provided more people are under the same ticket. If you are unable to board the train and need a refund, you can check the TDR (Ticket Deposit Receipt) Procedure section."
    },

    {
        title: "Q. Are children charged for train tickets booking?",
        desc: "Q. Are children charged for train tickets booking?"
    },

    {
        title: "Q. What documents or ID Cards required for online train ticket booking?",
        desc: "A. While you are booking your railway ticket online, you are not required to provide any photo identity card detail. However, you would need to carry one of the identity cards while you are travelling, which includes, Voter photo identity card that has been issued by the Election Commission of India, Passport, Driving Licence that has been issued by RTO, PAN Card that has been issued by Income Tax Department, Student Identity Card with the student's photograph issued by the school or college, National Bank Passbook with photographs, Credit Cards issued by banks with laminated photographs & Aadhaar Card."
    },

    {
        title: "Q. What is the cancellation policy for train bookings? Will I get any refund?",
        desc: `A.
        Canceling a train ticket on the MakeMyTrip app or website is a hassle-free experience. If your booking is backed by MakeMyTrip’s free cancellation policy and you cancel the trip within the specified time frame, you get a full refund for your booking.
        
        Also, MakeMyTrip offers ‘Trip Guarantee’, which allows you to change the trip details, including your date of travel, for certain routes and bookings. Please go through the cancellation policy of your booking for more details.`
    },

    {
        title: "Q. How can I book my train ticket on mobile?",
        desc: "A. You can book your train ticket using MakeMyTrip. All you have to do is enter your source and destination and use your IRCTC login ID to confirm your train tickets. You would receive your e-ticket on mobile."
    },

    {
        title: "Q. How can I check the reservation status of my train ticket?",
        desc: "A. MakeMyTrip allows you to check the reservation status of your train ticket by simply typing your 10-digit PNR number."
    },

    {
        title: "Q. Do children get any discount on IRCTC train tickets?",
        desc: "A. IRCTC doesn’t charge children below the age of 5. For children who are above 5 years, you’d have to pay the full ticket fare, and they will be provided with a seat."
    },

    {
        title: "Q. How many days in advance can the rail tickets be booked?",
        desc: "A. You can make your IRCTC train ticket booking 120 days in advance."
    },

    {
        title: "Q. Can I book a tatkal ticket?",
        desc: "A. Yes, you can book your tatkal ticket on MakeMyTrip in case of emergencies or last-minute travel plans. The tatkal window opens for an hour."
    }
]

export const QandA = () =>{
    return (
        <Box 
        bgColor="#E7E7E7"
        padding="20px"
       >

        <Heading
        w="80%"
        m="auto"
        p="20px"
        fontSize="xl"
        textAlign="center"
        borderBottom="1px solid gray"
      
        >
            Frequently Asked Questions About IRCTC Ticket Booking
        </Heading>

       <Grid
       templateColumns="repeat(2, 1fr)"
    //    gap="20"
      
       w="80%"
       m="auto"
       mt="40px"
      
       >
           {
               data.map((item, i) =>(
                   <GridItem 
                   key={i}
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