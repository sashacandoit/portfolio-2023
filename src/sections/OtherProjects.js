import React from "react";
import { Container, Center, Stack, Link, Heading } from '@chakra-ui/react'
import ProjectCards from "./components/ProjectCards";

function OtherProjects() {
  return (
    <Container maxW='container.xl' marginTop="15rem" marginBottom="15rem">
      <Stack border='1px' borderColor='teal.300' spacing={4}>
        <Center>
          <Heading as='h4' size='md'>Other Noteworthy Projects</Heading>
        </Center>
        <Center>
          <Link color='red.500' href='https://github.com/sashacandoit'>github.com/sashacandoit</Link>
        </Center>
        <ProjectCards />
      </Stack>
    </Container>
  )

};


export default OtherProjects;