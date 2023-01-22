import { Box, Heading } from "@chakra-ui/react";
import React from "react";
import SingleFlight from "./SingleFlight";

let logo = [
  "https://fastui.cltpstatic.com/image/upload/resources/images/logos/air-logos/6E_2x.png",
  "https://fastui.cltpstatic.com/image/upload/resources/images/logos/air-logos/I5_2x.png",
  "https://fastui.cltpstatic.com/image/upload/resources/images/logos/air-logos/SG_2x.png",
  "https://fastui.cltpstatic.com/image/upload/resources/images/logos/air-logos/AI_2x.png",
  "https://fastui.cltpstatic.com/image/upload/resources/images/logos/air-logos/UK_2x.png",
  "https://fastui.cltpstatic.com/image/upload/resources/images/logos/air-logos/G8_2x.png",
  "https://fastui.cltpstatic.com/image/upload/resources/images/logos/air-logos/AI_2x.png",
  "https://fastui.cltpstatic.com/image/upload/resources/images/logos/air-logos/UK_2x.png",
];

function AllFlights({ data, date, month }) {
  return (
    <Box>
      {data && data.length > 0 ? (
        data.map((ele, i) => {
          return (
            <SingleFlight
              key={ele._id}
              title={ele.name}
              type={ele.type}
              start={ele.start}
              end={ele.end}
              price={ele.price}
              duration={ele.duration}
              date={date}
              month={month}
              logo={logo[i]}
              id={ele._id}
            />
          );
        })
      ) : (
        <Heading>Please Search the Flights</Heading>
      )}
    </Box>
  );
}

export default AllFlights;
