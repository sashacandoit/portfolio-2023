import React from "react";
import { Container, Grid, GridItem } from '@chakra-ui/react'
import { featured_projects } from "../data/portfolio_data"
import SectionHeading from "./components/SectionHeading";
import { LeftImgRow, RightImgRow } from "./components/ImageRows";

function Projects() {
  return (
    <Container maxW='container.xl' marginY={{base: '10rem', lg: "15rem"}} paddingX={{ base: '0', lg: '1rem' }}>
      {/* <Grid
        border='1px' borderColor='teal.300'
        templateAreas={`"title title"
                  "projects projects"`}
        gridTemplateColumns={'1fr 1fr'}
        gap='6'
        padding='4'
      > */}
      <Grid
        border='1px' borderColor='teal.300'
        templateRows={'repeat(2, max-content)'}
        templateColumns={'repeat(2, 1fr)'}
        gap='6'
        padding='4'
      >
        <GridItem colSpan={2} border='1px' borderColor='pink.300'>
          <SectionHeading title='Projects' />
        </GridItem>
        <GridItem colSpan={2} paddingTop="3rem" border='1px' borderColor='orange.300'>
          
          {featured_projects.map((rowContent, rowId) => (
            rowId % 2 === 0 ? <LeftImgRow rowContent={rowContent} /> : <RightImgRow rowContent={rowContent} />
          ))}

        </GridItem>
      </Grid>
    </Container>
  )
  
};


export default Projects;