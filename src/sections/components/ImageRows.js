import React from "react";
import { Show, Link, Stack, HStack, SimpleGrid, Box, Image, Text, Heading } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { GithubIcon } from "../../assets/icons/icons";

function LeftImgRow(props) {
  const { rowContent } = props;
  return (
    <SimpleGrid marginBottom="5em" columns={{ base: 1, md: 2 }} spacing='5'>
      <Box border='1px' borderColor='#1E90FF' height='20rem'>
        <Image
          boxSize='100%'
          objectFit='cover'
          src='https://placehold.co/600x400'
          alt={rowContent.title}
        />
      </Box>
      <ProjectDetails rowContent={rowContent} />
    </SimpleGrid>
  )
}

function RightImgRow(props) {
  const { rowContent } = props;
  return (
    <SimpleGrid marginBottom="5em" columns={{ base: 1, md: 2 }} spacing='5'>
      <Show above="md">
        <ProjectDetails rowContent={rowContent} />
      </Show>
      <Box border='1px' borderColor='#1E90FF' height='20rem'>
        <Image
          boxSize='100%'
          objectFit='cover'
          src='https://placehold.co/600x400'
          alt={rowContent.title}
        />
      </Box>
      <Show below="md">
        <ProjectDetails rowContent={rowContent} />
      </Show>
    </SimpleGrid>
  )
}

function ProjectDetails(props) {
  const { rowContent } = props;
  return (
    <Box border='1px' borderColor='#1E90FF' height='20rem'>
      <Stack spacing={5}>
        <Box>
          <Text color='brandRed.900' fontSize="sm">Featured Project</Text>
          <Heading as='h4' size='md'>{rowContent.title}</Heading>
        </Box>

        <Box fontSize="sm">{rowContent.description}</Box>
        <Box>
          <HStack spacing={2}>
            {rowContent.technologies.map((tech, id) => (
              <Box key={id} fontSize="xs" >{tech}</Box>
            ))}
          </HStack>
          <HStack spacing={3}>
            <Link href={rowContent.github} isExternal>
              <GithubIcon w="5" h="21" fill="none" stroke='brandRed.300' />
            </Link>
            <Link href={rowContent.app_url} isExternal>
              <ExternalLinkIcon fontSize="1.5em" color='brandRed.300' />
            </Link>
          </HStack>
        </Box>
      </Stack>
    </Box>
  )
}



export {LeftImgRow, RightImgRow}