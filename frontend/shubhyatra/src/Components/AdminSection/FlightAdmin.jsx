import React from "react";
import {
  Box,
  Input,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  FormControl,
  FormLabel,
  TableContainer,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";

const FlightAdmin = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = React.useRef(null);
  const [page, setPage] = React.useState(1);
  const [data, setData] = React.useState([]);
  const [query, setQuery] = React.useState("");
  const [name,setName]=React.useState("")
  const [from,setfrom]=React.useState("")
  const [to,setto]=React.useState("")
  const [start,setstart]=React.useState("")
  const [end,setend]=React.useState("")
  const [type,settype]=React.useState("")
  const [price,setprice]=React.useState("")
  const [duration,setduration]=React.useState("")

  const postData=()=>{
    const payload={
        name,
        from,
        to,
        start,
        end,
        type,
        price,
        duration
    }
    axios.post("http://localhost:8080/bookedflight/create",payload,{
        headers: {
            authorization: localStorage.getItem("token"),
          },
    })
    .then((res)=>{
        console.log(res)
        getAllData(page)
        toast({
            title: 'Flight Details Added',
            description:`You successfully Added`,
            status: 'success',
            duration: 3000,
            isClosable: true,
          })
    })
    .catch((err)=>{
        console.log('err', err)
        toast({
            title: 'Flight Details not added in Admin DB',
            description:`Please Enter Proper Details`,
            status: 'error',
            duration: 3000,
            isClosable: true,
          })
    })

  }

  const toast = useToast()
  const getAllData = (page=1) => {
    axios
      .get(`http://localhost:8080/bookedflight?page=${page}`, {
        headers: {
          authorization: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.error(err));
  };
  const getDataFromCity = () => {
    axios
      .get(`http://localhost:8080/bookedflight?q=${query}&page=${page}`, {
        headers: {
          authorization: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.error(err));
  };

  const handleDelete=(id)=>{
    axios.delete(`http://localhost:8080/bookedflight/delete/${id}`,{
        headers: {
            authorization: localStorage.getItem("token"),
          },
    })
    fetch(`http://localhost:8080/bookedflight/delete/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    })
    .then((res)=>{
        console.log(res)
        getAllData(page)
        toast({
            title: 'Flight details has been deleted',
            description:`You successfully deleted Flight details for id: ${id}`,
            status: 'success',
            duration: 3000,
            isClosable: true,
          })
    })
    .catch((err) => {
        console.error(err)
        toast({
            title: 'Failed to Delete the Flight',
            description:`You are not autherised`,
            status: 'error',
            duration: 3000,
            isClosable: true,
          })
    })
  }

  const handlepage = (p) => {
    setPage(page + p);
    getAllData(page)
  };


  return (
    <Box>
      <div>
        <Box
          display="flex"
          w="25rem"
          margin="auto"
          // border="1px solid red"
          justifyContent="space-between"
        >
          <Input
            w="15rem"
            size={["sm", "sm", "md", "md"]}
            placeholder="Search Flights By City"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <Button
            onClick={getDataFromCity}
            ml="2rem"
            variant="outline"
            size={["sm", "sm", "md", "md"]}
          >
            Search
          </Button>
        </Box>
        <Box
          display={{ lg: "flex" }}
          mt="2rem"
          justify="space-between"
          // border="1px solid black"
          w="50%"
        >
          {/* All Flights */}
          <Button
            onClick={()=>getAllData(page)}
            variant={"outline"}
            textTransform={"capitalize"}
          >
            All Flights
          </Button>

          {/*  Add New Flights */}
          <Button
            bg="#257CFF"
            borderRadius="1rem"
            variant="solid"
            ml={{ lg: "2rem" }}
            mr={{ lg: "2rem" }}
            mt={{ base: "2rem", lg: "0rem" }}
            mb={{ base: "2rem" }}
            color="white"
            _hover={{
              background: "white",
              color: "#257CFF",
              border: "2px solid #257CFF",
            }}
            onClick={onOpen}
          >
            Add New Flight
          </Button>
          {/* Save Flights will route you to the Booked Flights page */}
          <Modal
            initialFocusRef={initialRef}
            isOpen={isOpen}
            onClose={onClose}
            size="sm"
          >
            <ModalOverlay />
            <ModalContent
            // border="1rem solid #257cff"
            >
              <ModalHeader
                textDecoration="underline"
                color="#257cff"
                fontWeight="bold"
                fontSize="2.5rem"
              >
                Flight Details
              </ModalHeader>
              <ModalCloseButton />

              <ModalBody pb={6}>
                <FormControl>
                  <FormLabel>Name</FormLabel>
                  <Input
                    ref={initialRef}
                    placeholder="Enter Name of the Flight"
                    type="text"
                    name="departtime"
                    value={name}
                    onChange={(e)=>setName(e.target.value)}
                  />
                </FormControl>

                <FormControl mt={4}>
                  <FormLabel>From</FormLabel>
                  <Input
                    placeholder="From"
                    type="text"
                    name="aarivtime"
                    value={from}
                    onChange={(e)=>setfrom(e.target.value)}
                  />
                </FormControl>

                <FormControl mt={4}>
                  <FormLabel>To</FormLabel>
                  <Input
                    placeholder="To"
                    type="text"
                    name="duration"
                    value={to}
                    onChange={(e)=>setto(e.target.value)}
                  />
                </FormControl>

                <FormControl mt={4}>
                  <FormLabel>Departure At</FormLabel>
                  <Input
                    placeholder="Enter Departure At"
                    type="text"
                    name="fare"
                    value={start}
                    onChange={(e)=>setstart(e.target.value)}
                  />
                </FormControl>
                <FormControl mt={4}>
                  <FormLabel>Arrival At</FormLabel>
                  <Input
                    placeholder="Enter Arrival At"
                    type="text"
                    name="fare"
                    value={end}
                    onChange={(e)=>setend(e.target.value)}
                  />
                </FormControl>
                <FormControl mt={4}>
                  <FormLabel>Flight Types</FormLabel>
                  <Input
                    placeholder="Enter Flight Types"
                    type="text"
                    name="fare"
                    value={type}
                    onChange={(e)=>settype(e.target.value)}
                  />
                </FormControl>
                <FormControl mt={4}>
                  <FormLabel>Flight Fare</FormLabel>
                  <Input
                    placeholder="Enter Flight Fare"
                    type="text"
                    name="fare"
                    value={price}
                    onChange={(e)=>setprice(e.target.value)}
                  />
                </FormControl>
                <FormControl mt={4}>
                  <FormLabel>Duration</FormLabel>
                  <Input
                    placeholder="Enter Duration of Flight"
                    type="text"
                    name="fare"
                    value={duration}
                    onChange={(e)=>setduration(e.target.value)}
                  />
                </FormControl>
              </ModalBody>

              <ModalFooter>
                <Button
                onClick={postData}
                  bg="#257CFF"
                  borderRadius="1rem"
                  variant="solid"
                  ml="3rem"
                  color="white"
                  _hover={{
                    background: "white",
                    color: "#257CFF",
                    border: "2px solid #257CFF",
                  }}
                  mr={3}
                  //   onClick={handleSubmit}  use onClick for saving new Flight Details
                >
                  Save
                </Button>
                <Button onClick={onClose}>Cancel</Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
          <Button
            bg="#31AE33"
            borderRadius="1rem"
            variant="solid"
            // ml="3rem"
            color="white"
            _hover={{
              background: "white",
              color: "#31AE33",
              border: "2px solid #31AE33",
            }}
          >
            Save
          </Button>
        </Box>
      </div>
      <Box>
        <TableContainer>
          <Table size="sm">
            <Thead>
              <Tr>
                <Th>Name</Th>
                <Th>From</Th>
                <Th>To</Th>
                <Th>Start</Th>
                <Th>End</Th>
                <Th>Type</Th>
                <Th>Duration</Th>
                <Th>Price</Th>
              </Tr>
            </Thead>
            <Tbody>
              {data.length > 0 &&
                data.map((i) => {
                  return (
                    <Tr>
                      <Td>{i.name}</Td>
                      <Td>{i.from}</Td>
                      <Td>{i.to}</Td>
                      <Td>{i.start}</Td>
                      <Td>{i.end}</Td>
                      <Td>{i.type}</Td>
                      <Td>{i.duration}</Td>
                      <Td>{i.price}</Td>
                      <Td>
                        <Button onClick={()=>handleDelete(i._id)} colorScheme="red"
            borderRadius="1rem"
            variant="solid"
            _hover={{
              background: "white",
              color: "red",
              border: "2px solid red",
            }}>Delete</Button>
                      </Td>
                    </Tr>
                  );
                })}
            </Tbody>
          </Table>
        </TableContainer>
        <Box>
          <Button disabled={page === 1} onClick={() => handlepage(-1)}>
            Previous
          </Button>
          <Button disabled={true}>{page}</Button>
          <Button onClick={() => handlepage(1)}>Next</Button>
        </Box>
      </Box>
    </Box>
  );
};

export default FlightAdmin;
