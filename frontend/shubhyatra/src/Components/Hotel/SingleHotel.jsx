import { Box, Button,Image } from '@chakra-ui/react'
import React from 'react'
import "../../Styles/hotel.css"
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/Auth.context";
export default function Sing({id,name,image,rating,verified_rating,location,rate,price,tax}) {
  const{handleProdId}=useContext(AuthContext)
  const Navigate=useNavigate()
  const handleBook = () => {
    handleProdId(id)
    Navigate("/hotelcheckout")
  };
  
  return (
    

      <Box className="main">
 
        <Box className="mindiv">
          <Box className="first">
            <Image src={image} />
          </Box>
          <Box className="sec">
            <Box className="res_name">
              <Box className="tagdiv">
                <Image
                  className="tag"
                  src="https://promos.makemytrip.com/Hotels_product/Value_Stays/v2/logo/ValueStays-3.png"
                />
              </Box>
              <Box className="rating">
                <h3>{rating}</h3><Box mr="0.5rem"></Box>
                <h4>
                  <span style={{color:"rgb(54, 54, 217)"}}>{verified_rating}</span>(124 VERIFIED RATING)
                </h4>
              </Box>
              <Box className="namediv" mt="0.5rem">
                <Box mt="0.5rem"></Box>
                <h1 style={{fontWeight:"bold",fontSize:"22px"}}>{name}</h1>
                <Box mt="1.7rem"></Box>
                <p className="location">
                  <span style={{color:"blue",fontWeight:"bold"}}>{location}</span>| 4.2 km from Indira
                </p>
              </Box >
              <p className="couple">couple friendly</p>
              <Button className="bookbt" mt="0.5rem" onClick={handleBook}>Book Now</Button>
            </Box>

            <Box className="res">

<Box className="third_res">
 <Box className="end">
   <Box className="rate">
     <s>
       <span>&#8377;</span>{rate}
     </s>
     <h1 className="cheak" style={{fontWeight:"bold",fontSize:"20px"}}>
       <span>&#8377;</span><span >{price}</span>
     </h1>
   </Box>
   <p>+{tax} taxes & fee</p>
   <p className="night">per nigth</p>
   <p className="emi">
     No Cost <span className="EMI">EMI</span>
   </p>
   <p className="emi">
     Started at <span>&#8377;</span>8,113
   </p>
   <p className="pay">Login book now & pay later</p>
 </Box>
</Box>
</Box>



          </Box>
          <Box className="third">
            <Box className="end">
              <Box className="rate">
                <s>
                  <span>&#8377;</span>{rate}
                </s>
                <h1 className="cheak" style={{fontWeight:"bold",fontSize:"20px"}}>
                  <span>&#8377;</span>{price}
                </h1>
              </Box>
              <p>+{tax} taxes & fee</p>
              <p className="night">per nigth</p>
              <p className="emi">
                No Cost <span className="EMI">EMI</span>
              </p>
              <p className="emi">
                Started at <span>&#8377;</span> 8,113
              </p>
              <p className="pay">Login book now & pay later</p>
            </Box>
          </Box>
        </Box>
      </Box>
    
  )
}
