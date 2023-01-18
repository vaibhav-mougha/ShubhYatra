import { Box, Flex, Icon, Stack, Text } from "@chakra-ui/react";
import { IoAirplane, IoTrainSharp } from "react-icons/io5";
import { RiHotelFill, RiCurrencyFill } from "react-icons/ri";
import { AiFillHome, AiFillCar } from "react-icons/ai";
import { BiBus } from "react-icons/bi";
import { GiCommercialAirplane, GiSwordwoman } from "react-icons/gi";
import { SiYourtraveldottv } from "react-icons/si";



const navTitles = [
    {name: "Flights", icon:IoAirplane},
    {name: "Hotels", icon:RiHotelFill},
    {name: "Homestays", icon:AiFillHome},
    {name: "Holiday Packages", icon:SiYourtraveldottv},
    {name: "Trains", icon:IoTrainSharp},
    {name: "Buses", icon:BiBus},
    {name: "Cabs", icon:AiFillCar},
    {name: "Forex", icon:RiCurrencyFill},
    {name: "Charter Flights", icon:GiCommercialAirplane},
    {name: "Activities", icon:GiSwordwoman},
    
    
]
export const TrainsNavbar = () =>{
    return (
        <Flex 
        justifyContent="center" 
        alignItems="center"
        gap="20px">
            {
                navTitles.map((item, i) =>(
                    <Stack align={"center"} textAlign={"center"} key={i} >
                        <Icon as ={item.icon} />
                        <Text>{item.name}</Text>
                    </Stack>
                ))
            }
        </Flex>
    )
}