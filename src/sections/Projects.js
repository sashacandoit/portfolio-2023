import React from "react";
import { Container, Grid, GridItem, SimpleGrid, Box, Image } from '@chakra-ui/react'
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
        <GridItem paddingTop="3rem" border='1px' borderColor='orange.300' area={'projects'}>
          
          <ProjectRow orientation="left" />
          <ProjectRow orientation="right" />

        </GridItem>
      </Grid>
    </Container>
  )
  
};

function ProjectRow(props) {
  const { orientation } = props;
  
  if (orientation === "right") {
    return (
      <SimpleGrid marginBottom="5em" columns={2} spacing='5'>
        <Box border='1px' borderColor='#1E90FF' height='20rem'>
          <Image
            boxSize='100%'
            objectFit='cover'
            src='https://placehold.co/600x400'
            alt='Sasha Czerniawski'
          />
        </Box>
        <Box border='1px' borderColor='#1E90FF' height='20rem'></Box>
      </SimpleGrid>
    )
  }
  return (
    <SimpleGrid marginBottom="5em" columns={2} spacing='5'>
        <Box border='1px' borderColor='#1E90FF' height='20rem'></Box>
        <Box border='1px' borderColor='#1E90FF' height='20rem'>
          <Image
            boxSize='100%'
            objectFit='cover'
            src='https://placehold.co/600x400'
            alt='Sasha Czerniawski'
          />
        </Box>
      </SimpleGrid>
    )
}

export default Projects;