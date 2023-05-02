import React from "react";
import { Show, Hide, Link, Stack, HStack, Flex, SimpleGrid, Box, Image, Text, Heading } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { GithubIcon } from "../../assets/icons/icons";

function LeftImgRow(props) {
  const { rowContent } = props;
  return (
    <SimpleGrid marginBottom="5em" columns={{ base: 1, lg: 2 }} spacing={{ base: '2.5rem', lg: '5em'}}>
      <Box height={{ base: '16rem', md: '20rem' }}>
        <Image
          boxSize='100%'
          objectFit='cover'
          src={rowContent.image}
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
    <SimpleGrid marginBottom="5em" columns={{ base: 1, lg: 2 }} spacing={{ base: '2.5rem', lg: '5em' }}>
      <Hide below="lg">
        <ProjectDetails rowContent={rowContent} />
      </Hide>
      <Box height={{ base: '16rem', md: '20rem'}}>
        <Image
          boxSize='100%'
          objectFit='cover'
          src={rowContent.image}
          alt={rowContent.title}
        />
      </Box>
      <Show below="lg">
        <ProjectDetails rowContent={rowContent} />
      </Show>
    </SimpleGrid>
  )
}

function ProjectDetails(props) {
  const { rowContent } = props;
  return (
    <Box height='20rem'>
      <Stack spacing={5}>
        <Box>
          <Text textStyle={'secondary'} color='brandRed.900' fontSize="sm">Featured Project</Text>
          <Heading as='h4' size='md' marginTop={2}>{rowContent.title}</Heading>
        </Box>

        <Box fontSize="sm">{rowContent.description}</Box>
        <Box>
          <Flex direction={"row"} flexWrap={"wrap"} justifyContent={"space-between"}>
            {rowContent.technologies.map((tech, id) => (
              <Box textStyle={'secondary'} key={id} fontSize="xs" >{tech}</Box>
            ))}
          </Flex>
          <HStack spacing={3} marginY={3}>
            <Link href={rowContent.github} isExternal>
              <GithubIcon strokeWidth="1.75" w="5" h="21" fill="none" stroke='brandRed.300' />
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