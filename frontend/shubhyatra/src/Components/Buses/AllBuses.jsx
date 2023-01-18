import { Box, Heading } from "@chakra-ui/react";
import React from "react";
import SingleBus from "./SingleBus";

function AllBuses({ data,date,month }) {
  return (
    <Box>
      {data&&data.length>0?data.map((i) => {
        return (
          <SingleBus
            key={i._id}
            title={i.name}
            type={i.type}
            start={i.start}
            end={i.end}
            price={i.price}
            duration={i.duration}
            date={date}
            month={month}
          />
        )
      }):<Heading>Data not found</Heading>}
    </Box>
  );
}

export default AllBuses;
