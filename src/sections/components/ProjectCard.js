import React from "react";
import { Card, CardHeader, CardBody, CardFooter, HStack, Stack, Text, Flex, Link, Heading, Box, Spacer } from '@chakra-ui/react'
import { FileSvg, GithubIcon, ExternalCustom } from "../../assets/icons/icons";

function ProjectCard(props) {
  const { cardContent } = props;

  return (
    <Card variant='elevated'  height='100%' padding={1}>
      <CardHeader>
        <Flex minWidth='max-content' alignItems='center' gap='2'>
          <Box p='2'>
            <FileSvg fontSize="1.8em" />
          </Box>
          <Spacer />
          <HStack gap='2'>
            {'github' in {cardContent} && 
              <Link href={cardContent.github} isExternal>
                <GithubIcon fontSize="1.1em" stroke='#8892B0' fill='none' />
              </Link>
            }

            {'url' in {cardContent} &&
              <Link href={cardContent.url} isExternal>
                <ExternalCustom fontSize="1.3em" stroke='#8892B0' />
              </Link>
            }
          </HStack>
        </Flex>
      </CardHeader>

      <CardBody paddingY='0.5em'>
        <Stack spacing={1}>
          <Heading size='sm'>{ cardContent.title }</Heading>
          <Text fontSize='sm'>
            {cardContent.description}
          </Text>
        </Stack>

      </CardBody>
      <CardFooter justify='space-between' flexWrap='wrap'>
        <HStack spacing={2}>
          {cardContent.technologies.map((tech, id) => (
            <Box key={id} fontSize="xs" >{tech}</Box>
          ))}
        </HStack>
      </CardFooter>

    </Card>
  )
}

export default ProjectCard;