import React from "react";
import { Container, Grid, GridItem, Text, Link, VStack, Image, Box } from '@chakra-ui/react'
import SectionHeading from "./components/SectionHeading";
import TechTable from "./components/TechTable"

function About() {
  return (
    <Container maxW='container.lg' marginTop="15rem" marginBottom="15rem"> 
      <Grid
        border='1px' borderColor='teal.300'
        templateAreas={`"title title"
                  "about-body about-img"
                  "tech tech"`}
        gridTemplateColumns={'1fr 1fr'}
        gap='6'
        padding='4'
      >
        <GridItem border='1px' borderColor='pink.300' area={'title'}>
          <SectionHeading title='About Me' />
        </GridItem>
        <GridItem border='1px' borderColor='orange.300' area={'about-body'}>
          <VStack
            spacing={4}
            align='stretch'
          >
            <Text lineHeight='1.5rem' fontSize='md'>
              Hello, My name is Sasha and I have a passion for building meaningful user experiences in both the digital and physical world. I’m a lifelong learner, and am always expanding my toolkit to effectively solve complex problems in efficient, elegant and human-centric ways.
            </Text>
            <Text fontSize='md' lineHeight='1.5rem'>
              My interest in web development started while making changes to a Wordpress website for a <Link color='red.500' href='#'>
                startup</Link> that my employer founded. I dived down the HTML and CSS rabbit hole and never looked back!
            </Text>
            <Text fontSize='md' lineHeight='1.5rem'>
              Now, 3 years later, I’m a full-stack software engineer thanks to an intense boot camp program offered by <Link color='red.500' href='#'>Springboard</Link>, while applying what I learned to building my <Link color='red.500' href='#'>own projects</Link> and new pages and features for <Link color='red.500' href='#'>DMINTI’s</Link> website.
            </Text>
          </VStack>
        </GridItem>
        <GridItem border='1px' borderColor='green.300' area={'about-img'}>
          <Box display="flex" justifyContent="end">
            <Image
              boxSize='350px'
              objectFit='cover'
              src='https://res.cloudinary.com/dokpuqyyp/image/upload/v1680610716/IMG_5740_cropped2_jt6qsf.jpg'
              alt='Sasha Czerniawski'
            />
          </Box>
        </GridItem>
        <GridItem border='1px' borderColor='blue.300' area={'tech'}>
          <Text lineHeight='1.5rem' fontSize='md'>
            Here are a few technologies I’ve been working with recently:
          </Text>
          <TechTable />
        </GridItem>
      </Grid>
    </Container>
  )
}

export default About;