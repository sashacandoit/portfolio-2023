import React from "react";
import { Container, Grid, HStack, SimpleGrid, Box, Image, Text, Heading } from '@chakra-ui/react'

function LeftImgRow(props) {
  const { rowContent } = props;
  return (
    <SimpleGrid marginBottom="5em" columns={2} spacing='5'>
      <Box border='1px' borderColor='#1E90FF' height='20rem'>
        <Image
          boxSize='100%'
          objectFit='cover'
          src='https://placehold.co/600x400'
          alt={rowContent.title}
        />
      </Box>
      <Box border='1px' borderColor='#1E90FF' height='20rem'>
        <Text color='red.300' fontSize="sm">Featured Project</Text>
        <Heading as='h4' size='md'>{rowContent.title}</Heading>
        <Text fontSize="sm">{rowContent.description}</Text>
        <HStack spacing={2} marginTop={3} >
          {rowContent.technologies.map((tech, id) => (
            <Box key={id} fontSize="xs" >{tech}</Box>
          ))}
        </HStack>
      </Box>
    </SimpleGrid>
  )
}

function RightImgRow(props) {
  const { rowContent } = props;
  return (
    <SimpleGrid marginBottom="5em" columns={2} spacing='5'>
      <Box border='1px' borderColor='#1E90FF' height='20rem'>
        <Text color='red.300' fontSize="sm">Featured Project</Text>
        <Heading as='h4' size='md'>{rowContent.title}</Heading>
        <Text fontSize="sm">{rowContent.description}</Text>
        <HStack spacing={2} marginTop={3}>
          {rowContent.technologies.map((tech, id) => (
            <Box key={id} fontSize="xs" >{tech}</Box>
          ))}
        </HStack>
      </Box>
      <Box border='1px' borderColor='#1E90FF' height='20rem'>
        <Image
          boxSize='100%'
          objectFit='cover'
          src='https://placehold.co/600x400'
          alt={rowContent.title}
        />
      </Box>
    </SimpleGrid>
  )
}



export {LeftImgRow, RightImgRow}