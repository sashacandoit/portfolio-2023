import React from "react";
import { Container, Grid, GridItem, Text, Link, VStack, Image, Box } from '@chakra-ui/react'
import SectionHeading from "./components/SectionHeading";
import TechTable from "./components/TechTable"

function About() {
  return (
    <Container maxW={'container.lg'} marginTop="12rem" marginBottom={{ base: '10rem', lg: "15rem" }} paddingX={{base: '0', lg: '1rem'}}> 
      <Grid
        border='1px' borderColor='teal.300'
        templateRows={'repeat(3, max-content)'}
        templateColumns={'repeat(2, 1fr)'}
        gap='6'
        padding='4'
      >
        <GridItem colSpan={2} border='1px' borderColor='pink.300'>
          <SectionHeading title='About Me' />
        </GridItem>

        <GridItem order={{ base: '2', md: '1' }} colSpan={{base: 2, md: 1}} border='1px' borderColor='orange.300'>
          <VStack
            spacing={4}
            align='stretch'
          >
            <Text lineHeight='1.5rem' fontSize='md'>
              Hello, My name is Sasha and I have a passion for building meaningful user experiences in both the digital and physical world. I’m a lifelong learner, and am always expanding my toolkit to effectively solve complex problems in efficient, elegant and human-centric ways.
            </Text>
            <Text fontSize='md' lineHeight='1.5rem'>
              My interest in web development started while making changes to a Wordpress website for a <Link color='brandRed.900' href='#'>
                startup</Link> that my employer founded. I dived down the HTML and CSS rabbit hole and never looked back!
            </Text>
            <Text fontSize='md' lineHeight='1.5rem'>
              Now, 3 years later, I’m a full-stack software engineer thanks to an intense boot camp program offered by <Link color='brandRed.900' href='#'>Springboard</Link>, while applying what I learned to building my <Link color='brandRed.900' href='#'>own projects</Link> and new pages and features for <Link color='brandRed.900' href='#'>DMINTI’s</Link> website.
            </Text>
          </VStack>
        </GridItem>
        <GridItem order={{ base: '1', md: '2' }}  colSpan={{ base: '2', md: '1' }} border='1px' borderColor='green.300'>
          <Box display="flex" justifyContent={{ base: 'start', md: 'end' }}>
            <Image
              boxSize={{base: '100%', md:'350px'}}
              objectFit='cover'
              src='https://res.cloudinary.com/dokpuqyyp/image/upload/v1680610716/IMG_5740_cropped2_jt6qsf.jpg'
              alt='Sasha Czerniawski'
            />
          </Box>
        </GridItem>
        <GridItem order={'3'} colSpan={2} border='1px' borderColor='blue.300'>
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