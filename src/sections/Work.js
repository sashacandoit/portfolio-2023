import React from "react";
import { Container, Grid, GridItem } from '@chakra-ui/react'
import SectionHeading from "./components/SectionHeading";
import WorkTabs from "./components/WorkTabs";

function Work() {
  return (
    <Container maxW='container.lg' marginY={{ base: '10rem', lg: "15rem" }} paddingX={{ base: '0', lg: '1rem' }}>
      <Grid
        border='1px' borderColor='teal.300'
        templateRows={'repeat(2, max-content)'}
        templateColumns={'repeat(2, 1fr)'}
        gap='6'
        padding='4'
      >
        <GridItem colSpan={2} border='1px' borderColor='pink.300' >
          <SectionHeading title='Work' />
        </GridItem>
        <GridItem colSpan={2} paddingTop={{base: '1.5rem', md:"2rem"}} border='1px' borderColor='orange.300'>
          <WorkTabs />
        </GridItem>
      </Grid>
    </Container>
  )
}

export default Work;