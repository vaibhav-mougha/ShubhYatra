import React from "react";
import {
  Box,
  Input,
  Button,
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
import { Link } from "react-router-dom";

const UserAdmin = () => {
  const [page, setPage] = React.useState(1);
  const [data, setData] = React.useState([]);
  const [query, setQuery] = React.useState("");

  const toast = useToast();
  const getAllData = (page = 1) => {
    axios
      .get(`https://cheerful-lime-firefly.cyclic.app/users?page=${page}`, {
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
      .get(`https://cheerful-lime-firefly.cyclic.app/users?name=${query}&page=${page}`, {
        headers: {
          authorization: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.error(err));
  };

  const handleDelete = (id) => {
    axios
      .delete(`https://cheerful-lime-firefly.cyclic.app/users/delete/${id}`, {
        headers: {
          authorization: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        console.log(res);
        getAllData(page);
        toast({
          title: "User has been deleted Successfully",
          description: `Admin has successfully deleted the User with id: ${id}`,
          status: "success",
          duration: 2000,
          isClosable: true,
        });
      })
      .catch((err) => {
        console.error(err);
        toast({
          title: "Failed to Delete the User",
          description: `You are not autherised`,
          status: "error",
          duration: 2000,
          isClosable: true,
        });
      });
  };

  const handlepage = (p) => {
    setPage(page + p);
    getAllData(page);
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
            placeholder="Search Users by Name"
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
            onClick={() => getAllData(page)}
            variant={"outline"}
            textTransform={"capitalize"}
          >
            All Existing Users
          </Button>

          <Link to="/">
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
              ml="1rem"
            >
              Save
            </Button>
          </Link>
        </Box>
      </div>
      <Box>
        <TableContainer>
          <Table size="sm">
            <Thead>
              <Tr>
                <Th>Name</Th>
                <Th>Email ID</Th>
                <Th>Mobile No.</Th>
              </Tr>
            </Thead>
            <Tbody>
              {data.length > 0 &&
                data.map((i) => {
                  return (
                    <Tr>
                      <Td>{i.name}</Td>
                      <Td>{i.email}</Td>
                      <Td>{i.phone}</Td>
                      <Td>
                        <Button
                          onClick={() => handleDelete(i._id)}
                          colorScheme="red"
                          borderRadius="1rem"
                          variant="solid"
                          _hover={{
                            background: "white",
                            color: "red",
                            border: "2px solid red",
                          }}
                        >
                          Delete
                        </Button>
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

export default UserAdmin;
