import React from "react";
import { Container, Grid, GridItem, Tabs, TabList, Tab, TabPanels, TabPanel } from '@chakra-ui/react'
import SectionHeading from "./components/SectionHeading";

function Work() {
  return (
    <Container maxW='container.lg'>
      <Grid
        border='1px' borderColor='teal.300'
        templateAreas={`"title title"
                  "work-experience work-experience"`}
        gridTemplateColumns={'1fr 1fr'}
        gap='6'
        padding='4'
      >
        <GridItem border='1px' borderColor='pink.300' area={'title'}>
          <SectionHeading title='Work' />
        </GridItem>
        <GridItem border='1px' borderColor='orange.300' area={'work-experience'}>
          <Tabs orientation="vertical">
            <TabList>
              <Tab>One</Tab>
              <Tab>Two</Tab>
              <Tab>Three</Tab>
            </TabList>

            <TabPanels>
              <TabPanel>
                <p>one!</p>
              </TabPanel>
              <TabPanel>
                <p>two!</p>
              </TabPanel>
              <TabPanel>
                <p>three!</p>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </GridItem>
      </Grid>
    </Container>
  )
}

export default Work;