import React from "react";
import { Container, Grid, GridItem, SimpleGrid, Box, Image, Text, Heading } from '@chakra-ui/react'
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
          
          {featured_projects.map((rowContent, rowId) => (
            <ProjectRow rowContent={rowContent} key={rowId} />
          ))}

          {/* <ProjectRow orientation="left" /> */}

        </GridItem>
      </Grid>
    </Container>
  )
  
};

function ProjectRow(props) {
  const { rowContent } = props;
  
  return (
    <SimpleGrid marginBottom="5em" columns={2} spacing='5'>
      <Box border='1px' borderColor='#1E90FF' height='20rem'>
        <Text color='red.300' fontSize="sm">Featured Project</Text>
        <Heading as='h4' size='md'>{rowContent.title}</Heading>
        <Text fontSize="sm">{rowContent.description}</Text>
        </Box>
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