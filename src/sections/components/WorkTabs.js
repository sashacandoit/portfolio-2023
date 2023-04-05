import React from "react";
import { Tabs, TabList, Tab, TabPanels, TabPanel, List, ListItem, ListIcon, Heading, Text, Link } from '@chakra-ui/react'
import { experience } from "../../data/portfolio_data"
import { ChevronRightIcon } from '@chakra-ui/icons'

function WorkTabs() {
  return (
    <Tabs orientation="vertical" colorScheme="red">
      <TabList alignItems={"start"}>
        {experience.map((tabContent, tabID) => (
          <Tab fontSize="sm" textAlign="left" key={tabID}>
            {tabContent.company}
          </Tab>
        ))}
      </TabList>

      <TabPanels>
        {experience.map((tabContent, tabID) => (
          <TabDetail tabContent={tabContent} key={tabID} />
        ))}
      </TabPanels>
      
    </Tabs>
  )
}

function TabDetail(props) {
  const { tabContent } = props;
  return (
    <TabPanel overflow="scroll" maxHeight="28vh" minHeight="28vh">
      <Heading as='h5' size='sm'>{tabContent.title} <Link href='#' color='red.500'>@ {tabContent.company}</Link></Heading>
      <Text fontSize="md">{tabContent.start_date} - {tabContent.end_date}</Text>
      <List>
        {(tabContent.experience).map((item, idx) => (
          <ListItem paddingLeft="1rem" textIndent="-1.5rem" marginTop="0.7rem" key={idx}>
            <ListIcon as={ChevronRightIcon} color='red.500' />
            {item}
          </ListItem>
          // Need to add style to list items
          // text - indent: -1.5rem;
          // padding-left: 1rem;
        ))}
      </List>
    </TabPanel>
  );
}

function TabTitle(props) {
  const { title } = props;
  return (
    <Tab>{title}</Tab>
  );
}

export default WorkTabs;