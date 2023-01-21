import { Box } from '@chakra-ui/react'
import React from 'react'
import Sing from './SingleHotel'


export default function Allhotel({data}) {
  console.log(data.data)
  return (
    <Box>
 {data&&data.data.map((i)=>
            
                <Sing 
                key={i._id}
                name={i.name}
                 image={i.image}
                 rating={i.star_category} 
                 verified_rating={i.verified_rating}
                 location={i.location}
                 rate={i.rate}
                 price={i.price}
                 tax={i.tax}
                 id={i._id}
                 />
            
        )}
    </Box>
  )
}