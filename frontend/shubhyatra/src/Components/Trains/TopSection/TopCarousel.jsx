import { Tab, TabList, TabPanel, TabPanels, Tabs, Text } from "@chakra-ui/react";
import OffersCarousel from "../../HomePage/OffersCarousel/OffersCarousel";



export const TopCarousel = () =>{
    return (
        <Tabs>
            <TabList>
                <Tab>OFFERS</Tab>
                <Tab>TRAINS</Tab>
                <Tab>ALL OFFERS</Tab>
                <Tab>HOTELS</Tab>
                <Tab>FLIGHTS</Tab>
                <Tab>HOLIDAYS</Tab>
                <Tab>BUS</Tab>
                <Tab>CABS</Tab>
                <Tab>OTHERS</Tab>
            </TabList>

            <TabPanels>
                <TabPanel>
                    <Text>Tab 1</Text>
                </TabPanel>
                <TabPanel>
                <Text>Tab 2</Text>
                </TabPanel>
                <TabPanel>
                <Text>Tab 3</Text>
                </TabPanel>
                <TabPanel>
                <Text>Tab 4</Text>
                </TabPanel>
                <TabPanel>
                <Text>Tab 5</Text>
                </TabPanel>
                <TabPanel>
                <Text>Tab 6</Text>
                </TabPanel>
                <TabPanel>
                <Text>Tab 7</Text>
                </TabPanel>
                <TabPanel>
                <Text>Tab 8</Text>
                </TabPanel>
                <TabPanel>
                <Text>Tab 9</Text>
                </TabPanel>
                
                
            </TabPanels>
        </Tabs>
    )
}