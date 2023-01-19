import {
  Box,
  Button,
  Grid,
  Heading,
  ListItem,
  Menu,
  MenuButton,
  MenuList,
  Tab,
  Table,
  TableContainer,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  UnorderedList,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { BsFillCaretDownFill } from "react-icons/bs";

function Policies() {
  return (
    <Box>
      <Menu>
        <MenuButton as={Button} rightIcon={<BsFillCaretDownFill />}>
          Policies
        </MenuButton>
        <MenuList
          w={["400px", "600px", "600px", "600px", "1200px"]}
          bg="cyan.50"
          p="5"
        >
          <Tabs variant="soft-rounded" colorScheme="green">
            <TabList
              display={"grid"}
              gridTemplateColumns={[
                "repeat(1,1fr)",
                "repeat(1,1fr)",
                "repeat(1,1fr)",
                "repeat(1,1fr)",
                "repeat(5,1fr)",
              ]}
            >
              <Tab>Cancellation</Tab>
              <Tab>Child Passenger</Tab>
              <Tab>Luggage</Tab>
              <Tab>Liqour</Tab>
              <Tab>Pickup Time</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <Grid
                  gap={["3", "4", "6"]}
                  gridTemplateColumns={[
                    "repeat(1,1fr)",
                    "repeat(1,1fr)",
                    "repeat(1,1fr)",
                    "repeat(1,1fr)",
                    "repeat(2,1fr)",
                  ]}
                >
                  <TableContainer w={["100%", "90%", "90%", "90%", "70%"]}>
                    <Table variant="striped" colorScheme="teal">
                      <Thead>
                        <Tr>
                          <Th>Cancellation Time</Th>
                          <Th>Penalty%</Th>
                        </Tr>
                      </Thead>
                      <Tbody>
                        <Tr>
                          <Td>more than 48 hrs before travel</Td>
                          <Td>10%</Td>
                        </Tr>
                        <Tr>
                          <Td>24 to 48 hr(s) before travel</Td>
                          <Td>40%</Td>
                        </Tr>
                        <Tr>
                          <Td>12 to 24 hr(s) before travel</Td>
                          <Td>50%</Td>
                        </Tr>
                        <Tr>
                          <Td>8 to 12 hr(s) before travel</Td>
                          <Td>80%</Td>
                        </Tr>
                        <Tr>
                          <Td>3 to 8 hr(s) before travel</Td>
                          <Td>100%</Td>
                        </Tr>
                        <Tr>
                          <Td>0 to 3 hr(s) before travel</Td>
                          <Td>100%</Td>
                        </Tr>
                      </Tbody>
                    </Table>
                  </TableContainer>
                  <VStack w={["100%", "90%", "90%", "90%", "50%"]}>
                    <Heading size="md">Information:</Heading>
                    <UnorderedList color="teal" fontSize="xs">
                      <ListItem>
                        {" "}
                        The penalty is calculated based on total seat worth 3500
                      </ListItem>
                      <ListItem>
                        Penalty is calculated basis the bus service scheduled
                        start time at: 18-01-2023 22:00 (subject to change).
                      </ListItem>
                      <ListItem>
                        {" "}
                        Partial cancellation is allowed for this ticket.
                      </ListItem>
                      <ListItem>
                        Please note : the ticket cannot be cancelled after the
                        bus departs from the first boarding point.
                      </ListItem>
                      <ListItem>
                        {" "}
                        Above defined cancellation charges are illustrated basis
                        maximum fare applicable. Exact cancellation charges will
                        depend on the final price charged along with discount
                        and other adjustments.
                      </ListItem>
                      <ListItem>
                        Cancellation amount shown above may also vary basis the
                        non-refundable components of the ticket defined by the
                        bus operator
                      </ListItem>
                    </UnorderedList>
                  </VStack>
                </Grid>
              </TabPanel>
              <TabPanel>
                <UnorderedList color="teal" fontSize="xs">
                  <ListItem>
                    Children above the age of 5 will need a ticket
                  </ListItem>
                </UnorderedList>
              </TabPanel>
              <TabPanel>
                <UnorderedList color="teal" fontSize="xs">
                  <ListItem>
                    2 pieces of luggage will be accepted free of charge per
                    passenger. Excess items will be chargeable
                  </ListItem>
                  <ListItem>
                    Excess baggage over 20 kgs per passenger will be chargeable
                  </ListItem>
                </UnorderedList>
              </TabPanel>
              <TabPanel>
                <UnorderedList color="teal" fontSize="xs">
                  <ListItem>
                    Carrying or consuming liquor inside the bus is prohibited.
                    Bus operator reserves the right to deboard drunk passengers.
                  </ListItem>
                </UnorderedList>
              </TabPanel>
              <TabPanel>
                <UnorderedList color="teal" fontSize="xs">
                  <ListItem>
                    Bus operator is not obligated to wait beyond the scheduled
                    departure time of the bus. No refund request will be
                    entertained for late arriving passengers.
                  </ListItem>
                </UnorderedList>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </MenuList>
      </Menu>
    </Box>
  );
}

export default Policies;
