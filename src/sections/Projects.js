import React from "react";
import { Container, Grid, GridItem, SimpleGrid, Box, Image, Text, Heading } from '@chakra-ui/react'
import { featured_projects } from "../data/portfolio_data"
import SectionHeading from "./components/SectionHeading";
import { LeftImgRow, RightImgRow } from "./components/ImageRows";

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
            rowId % 2 === 0 ? <LeftImgRow rowContent={rowContent} /> : <RightImgRow rowContent={rowContent} />
          ))}

        </GridItem>
      </Grid>
    </Container>
  )
  
};


export default Projects;