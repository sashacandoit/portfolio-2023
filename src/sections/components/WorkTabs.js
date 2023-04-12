import React from "react";
import { Show, Tabs, TabList, Tab, TabPanels, TabPanel, List, ListItem, ListIcon, Heading, Text, Link } from '@chakra-ui/react'
import { experience } from "../../data/portfolio_data"
import { ChevronRightIcon } from '@chakra-ui/icons'

function WorkTabs() {
  return (
    <>
      <Show above='md'>
        <Tabs orientation={"vertical"} colorScheme="red">
          <TabList alignItems={"start"}>
            {experience.map((tabContent, tabID) => (
              <Tab textStyle={'secondary'} color='brandRed.900' fontSize="xs" textAlign="left" key={tabID} minW={"14em"} minH="3.5em" justifyContent="start">
                {tabContent.company}
              </Tab>
            ))}
          </TabList>

          <TabPanels paddingTop={{ base: '1.5rem', md: '0' }}>
            {experience.map((tabContent, tabID) => (
              <TabDetail tabContent={tabContent} key={tabID} />
            ))}
          </TabPanels>

        </Tabs>
      </Show>

      <Show below='md'>
        <Tabs orientation={"horizontal"} colorScheme="red">
          <TabList alignItems={"start"}>
            {experience.map((tabContent, tabID) => (
              <Tab fontSize="sm" textAlign="left" key={tabID} minW={'10em'} minH="3em" justifyContent="start">
                {tabContent.company}
              </Tab>
            ))}
          </TabList>

          <TabPanels paddingTop={{ base: '1.5rem', md: '0' }}>
            {experience.map((tabContent, tabID) => (
              <TabDetail tabContent={tabContent} key={tabID} />
            ))}
          </TabPanels>

        </Tabs>
      </Show>
    </>
    
  )
}

function TabDetail(props) {
  const { tabContent } = props;
  return (
    <TabPanel overflow="scroll" maxHeight={{ base: '50vh', md: "30vh" }} minHeight={{ base: '50vh', md: "30vh" }}>
      <Heading as='h5' size='sm'>{tabContent.title} <Link href='#' color='brandRed.900'>@ {tabContent.company}</Link></Heading>
      <Text fontSize="xs" textStyle={'secondary'}>{tabContent.start_date} - {tabContent.end_date}</Text>
      <List>
        {(tabContent.experience).map((item, idx) => (
          <ListItem fontSize="md" paddingLeft="1rem" textIndent="-1.5rem" marginTop="0.7rem" key={idx}>
            <ListIcon as={ChevronRightIcon} color='brandRed.900' />
            {item}
          </ListItem>
        ))}
      </List>
    </TabPanel>
  );
}



export default WorkTabs;