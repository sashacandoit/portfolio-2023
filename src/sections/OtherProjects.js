import React from "react";
import { Container, Center, Stack, Link, Heading, HStack } from '@chakra-ui/react'
import ProjectCards from "./components/ProjectCards";

function OtherProjects() {
  return (
    <Container maxW='container.lg' marginY={{ base: '10rem', lg: "15rem" }} paddingX={{ base: '2.5rem', sm: '0', lg: '1rem' }}>
        <Center>
          <Heading as='h4' size='lg'>Other Noteworthy Projects</Heading>
        </Center>
        <Center marginTop={'4'}>
        <HStack textStyle={'secondary'} spacing={5} fontSize={'sm'}>
            <Link color='brandRed.900' href='https://github.com/sashacandoit'>GitHub</Link>
            <Link color='brandRed.900' href='https://github.com/sashacandoit'>CodePen</Link>
          </HStack>
        </Center>
        <ProjectCards />
    </Container>
  )

};


export default OtherProjects;