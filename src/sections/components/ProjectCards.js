import React from "react";
import { SimpleGrid } from '@chakra-ui/react'
import ProjectCard from "./ProjectCard";
import { other_projects } from "../../data/portfolio_data"



function ProjectCards() {
  return (
    <SimpleGrid columns={[2, null, 3]} spacing={8} minHeight='120px' marginTop={'4rem'}>
      {other_projects.map((cardContent, cardId) => (
        <ProjectCard cardContent={cardContent} key={cardId} />
      ))}
    </SimpleGrid>
  )
}


export default ProjectCards;