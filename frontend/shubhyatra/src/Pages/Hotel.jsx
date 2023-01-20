import {
  Box,
  Button,
  Grid,
  Heading,
  HStack,
  
  Input,
  
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Select,
  Text,
  VStack,
} from "@chakra-ui/react";
import styles_buses from "../Styles/buses.module.css";
import "../Styles/hotel.css";


import axios from "axios"
import { useEffect, useState } from "react";
import Allhotel from "../Components/Hotel/Allhotels";
import NavContainer from "../Components/HomePage/TopSection/Navbar";
function Hotel() {
const [data,setData]=useState("")
const [star,setStar]=useState("")
const [location,setLocation]=useState("")
const [cheak,setCheak]=useState(false)
const [price,setPrice]=useState("")
const [rating,setRating]=useState("")
const [property,setProperty]=useState("")
const [start, setStart] = useState("");
const [end, setEnd] = useState("");
const [date, setDate] = useState("");
const [newDate, setNewDate] = useState("");
  const [newMonth, setNewMonth] = useState("");
  let month = {
    JAN: "01",
    FEB: "02",
    MAR: "03",
    APR: "04",
    MAY: "05",
    JUN: "06",
    JUL: "07",
    AUG: "08",
    SEP: "09",
    OCT: "10",
    NOV: "11",
    DEC: "12",
  };
console.log(data.data)
useEffect(()=>{
  
    axios.get(`http://localhost:8080/hotels?star_category=${star}&location=${location}&price=${price}&property_type=${property}&rating=${rating}`,
  {headers: {
    Authorization : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySUQiOiI2M2M4ZTM0YjYzZjQ1OTgyZWUxZGI5YjMiLCJpYXQiOjE2NzQxMTI5MjF9.USzn4XGNbsFImGcIPo7HHUVu3KKfa2_6ScJVaxzOyOg"
    }
  }).then((res)=>setData(res.data))
  .catch((err)=>console.log(err))
  
},[star,location,rating,price,property])


  
const handleSubmit = () => {
  // setFrom(start);
  axios
    .get(`http://localhost:8080/hotels/?location=${start}`, {
      headers: {
        Authorization : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySUQiOiI2M2M4ZTM0YjYzZjQ1OTgyZWUxZGI5YjMiLCJpYXQiOjE2NzQxMTI5MjF9.USzn4XGNbsFImGcIPo7HHUVu3KKfa2_6ScJVaxzOyOg"
      },
    })
    .then((res) => setData(res.data))
    .catch((err) => console.error(err));
  let newDate = date.split("-");
  let newDay = newDate[2].split("T")[0];
  setNewDate(newDay);
  let newMonth = newDate[1];
  for (let key in month) {
    if (month[key] === newMonth) {
      setNewMonth(key);
    }
  }
};
console.log(data)
  return (
    <>
    <NavContainer />
    <Box w="100%" m="auto" className={styles_buses.shubhYatra_wrapper_bus}>
        <HStack
          width={["95%", "60%", "55%", "45%"]}
          m="auto"
          p="2"
          justifyContent={"space-evenly"}
          alignItems="center"
        >
   
          <Select placeholder="Location" fontSize={"large"}  color="withe" onChange={(e) => setStart(e.target.value)}>
            <option value="Mumbai">Mumbai</option>
            <option value="Pune">Pune</option>
            <option value="Delhi">Delhi</option>
            <option value="Banglore">Banglore</option>
            <option value="Chennai">Chennai</option>
          </Select>
         
          {/* <BsArrowLeftRight fontSize="75px" /> */}
         
          <Input
            placeholder="Select Date "
            size="md"
            type="datetime-local"
            fontSize={"large"}  color="black"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
         
          <Input
            placeholder="Select Date "
            size="md"
            type="datetime-local"
            fontSize={"large"}  color="black"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        
          <Button
            colorScheme="teal"
            fontSize={["lg", "lg", "-moz-initial"]}
            w={["xs", "sm", "md", "lg", "xl"]}
            onClick={handleSubmit}
          >
            Search
          </Button>
        </HStack>
      </Box>
    
    
    
    
    
    <Box className="Main" w="90%"
        borderRadius="1rem"
        p="0.5rem"
        
        justify="center"
        margin="auto" >
      

<Box className="filter_div" mt="3rem">
   <h1 style={{fontWeight:"bold",fontSize:"20px",borderBottom:"1px solid black"}}>Filter By :</h1>
         <Box className="filter_price" >
          <h1 style={{fontWeight:"bold",textDecoration:"underline"}}>
          Price(pre nigth)</h1>
          <Box className="price">
            <input type="checkbox" onClick={()=>setPrice(1000)
            } />
            <h5><span>&#8377;</span>0-<span>&#8377;</span>1000</h5>
          </Box>
          <Box className="price">
            <input type="checkbox" onClick={()=>setPrice(2000)}/>
            <h5><span>&#8377;</span>1000-<span>&#8377;</span>2000</h5>
          </Box>
          <Box className="price">
            <input type="checkbox" onClick={()=>setPrice(5000)}/>
            <h5><span>&#8377;</span>2000-<span>&#8377;</span>5000</h5>
          </Box>
          <Box className="price">
            <input type="checkbox" onClick={()=>setPrice(85000)}/>
            <h5><span>&#8377;</span>5000-<span>&#8377;</span>85000</h5>
          </Box>
          <Box className="price">
            <input type="checkbox" onClick={()=>setPrice(12000)}/>
            <h5><span>&#8377;</span>8500-<span>&#8377;</span>12000</h5>
          </Box>
         </Box>

         <Box className="filter_price">
          <h4 style={{fontWeight:"bold",textDecoration:"underline"}}>Star Category</h4>
          <Box className="price">
            <input type="checkbox" defaultChecked={star===5?true:false} onClick={()=>
              setStar(5)
            }/>
            <h5>5 Star</h5>
          </Box>
          <Box className="price">
            <input type="checkbox" onClick={()=>setStar(4)}/>
            <h5>4 Star</h5>
          </Box>
          <Box className="price">
            <input type="checkbox" onClick={()=>setStar(3)}/>
            <h5>3 Star</h5>
          </Box>
         
         </Box>



         <Box className="filter_price">
          <h4 style={{fontWeight:"bold",textDecoration:"underline"}}>User Rating</h4>
          <Box className="price" >
            <input type="checkbox" onClick={()=>setRating(4.5)}/>
            <h5>4.5 & above (Excellent)</h5>
          </Box>
          <Box className="price">
            <input type="checkbox" onClick={()=>setRating(4)}/>
            <h5>4 & above (Very Good)</h5>
          </Box>
          <Box className="price">
            <input type="checkbox" onClick={()=>setRating(3)}/>
            <h5>3 & above (Good)</h5>
          </Box>
         
         </Box>


         <Box className="filter_price">
          <h4 style={{fontWeight:"bold",textDecoration:"underline"}}>Property Type</h4>
          <Box className="price">
            <input type="checkbox" onClick={()=>setProperty("Hotel")}/>
            <h5>Hotel</h5>
          </Box>
          <Box className="price">
            <input type="checkbox" onClick={()=>setProperty("Homestay")}/>
            <h5>Homestay</h5>
          </Box>
          <Box className="price">
            <input type="checkbox" onClick={()=>setProperty("Apartment")}/>
            <h5>Apartment</h5>
          </Box>
          <Box className="price">
            <input type="checkbox" onClick={()=>setProperty("Villa")}/>
            <h5>Villa</h5>
          </Box>
          <Box className="price">
            <input type="checkbox" onClick={()=>setProperty("Resort")} />
            <h5>Resort</h5>
          </Box>
          <Box className="price">
            <input type="checkbox" onClick={()=>setProperty("Hostel")}/>
            <h5>Hostel</h5>
          </Box>
         </Box>
       </Box>
       <Allhotel data={data}/>
           
    </Box>
    </>

    
    
  );
}

export default Hotel;