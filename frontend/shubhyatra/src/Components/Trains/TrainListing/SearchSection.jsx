import { Box, Button, Flex, Input, Text } from "@chakra-ui/react"
import axios from "axios"
import { useEffect, useState } from "react"
import { ResultSection } from "./ResultSection"
import styles_buses from "../../../Styles/buses.module.css";

const iniState = {
    from :"",
    to: "",
    date: "",
}

const getData = (start, end)=>{
    return axios
      .get(`http://localhost:8080/trains/listing?from=${start}&to=${end}`, {
        headers: {
          authorization: localStorage.getItem("token"),
        },
      })
    
}

export const SearchSection = () =>{
    const [details, setDetails] = useState(iniState);
    const [data, setData] = useState([]);

    

    const handleSubmit = () => {
        getData(details.from, details.to)
        .then((res) => {
            console.log(res);
            setData(res.data)
        })
          .catch((err) => {
            console.error(err);
        });
    }

    useEffect(() => {
        getData(details.from, details.to)
        .then((res) => {
            console.log(res);
            setData(res.data)
            console.log("data", data);
        })
          .catch((err) => {
            console.error(err);
        });
    }, []);

    const handleChange = (e) => {
        const {name, value} = e.target;
       
        setDetails({...details, [name]:value});
    }


    return (
        <Box>
            <Box
            className={styles_buses.shubhYatra_wrapper_bus}
            color="white"
            >
                <Flex
                w="80%"
                m="auto"
                padding={2}
                alignItems="center"
                justifyContent="center"
                gap="10px"
                >
                    <Box>
                    <Text fontWeight="bold">From city</Text>
                    <Input 
                    name="from" 
                    type="text" 
                    value={details.from} 
                    placeholder="From city"
                    onChange={handleChange}
                     />
                    </Box>

                    <Box>
                        <Text fontWeight="bold">To city</Text>
                        <Input 
                        name="to" 
                        type="text" 
                        value={details.to} 
                        placeholder="To city"
                        onChange={handleChange}
                         />
                    </Box>

                    <Box>
                        <Text fontWeight="bold">Date</Text>
                        <Input 
                        name="date" 
                        type="date" 
                        value={details.date}
                        onChange={handleChange}
                        />
                    </Box>

                    <Box mx="2rem">
                        <Button 
                        colorScheme="blue"
                        borderRadius="30px"
                        px="40px"
                        onClick={handleSubmit}
                        >
                        Search
                        </Button>
                    </Box>
                </Flex>
            </Box>


            <ResultSection data={data} />
        </Box>
       
    )
}