import React from "react";
import { SimpleGrid, Box } from '@chakra-ui/react'
import ProjectCard from "./ProjectCard";


function ProjectBoxes() {
  return (
    <SimpleGrid columns={[2, null, 3]} spacing={8} minHeight='120px'>
      <ProjectCard />
      <Box border='1px' borderColor='tomato' height='100%'></Box>
      <Box border='1px' borderColor='tomato' height='100%'></Box>
    </SimpleGrid>
  )
}


export default ProjectBoxes;