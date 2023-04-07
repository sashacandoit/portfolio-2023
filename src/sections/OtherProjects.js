import React from "react";
import { Container, Center, Stack, Link, Heading } from '@chakra-ui/react'
import ProjectBoxes from "./components/ProjectBoxes";

function OtherProjects() {
  return (
    <Container maxW='container.xl' marginTop="15rem" marginBottom="15rem">
      <Stack border='1px' borderColor='teal.300' spacing={4}>
        <Center>
          <Heading as='h4' size='md'>Other NoteWorthy Projects</Heading>
        </Center>
        <Center>
          <Link color='red.500' href='https://github.com/sashacandoit'>github.com/sashacandoit</Link>
        </Center>
        <ProjectBoxes />
      </Stack>
      
      
    </Container>
  )

};


export default OtherProjects;