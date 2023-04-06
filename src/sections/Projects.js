import React from "react";
import { Container, Grid, GridItem, SimpleGrid, Box } from '@chakra-ui/react'
import { featured_projects } from "../data/portfolio_data"
import SectionHeading from "./components/SectionHeading";

function Projects() {
  return (
    <Container maxW='container.xl' marginTop="15rem" marginBottom="15rem">
      <Grid
        border='1px' borderColor='teal.300'
        templateAreas={`"title title"
                  "projects projects"`}
        gridTemplateColumns={'1fr 1fr'}
        gap='6'
        padding='4'
      >
        <GridItem border='1px' borderColor='pink.300' area={'title'}>
          <SectionHeading title='Projects' />
        </GridItem>
        <GridItem paddingTop="2rem" border='1px' borderColor='orange.300' area={'projects'}>
          
          <SimpleGrid columns={2} spacing='5'>
            <Box border='1px' borderColor='#1E90FF' height='200px'></Box>
            <Box border='1px' borderColor='#1E90FF' height='200px'></Box>
          </SimpleGrid>
        </GridItem>
      </Grid>
    </Container>
  )
  
};

export default Projects;