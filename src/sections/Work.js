import React from "react";
import { Container, Grid, GridItem } from '@chakra-ui/react'
import SectionHeading from "./components/SectionHeading";
import WorkTabs from "./components/WorkTabs";

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
          <WorkTabs />
        </GridItem>
      </Grid>
    </Container>
  )
}

export default Work;