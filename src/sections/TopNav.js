import React from "react";
import { Flex, Spacer, Box } from '@chakra-ui/react' //layout
import { Heading } from '@chakra-ui/react' //typography
import { ButtonGroup, Button } from '@chakra-ui/react'

function TopNav() {
  return (
    <Flex minWidth='max-content' alignItems='center' gap='2'>
      <Box p='2'>
        <Heading size='md'>Sasha Czerniawski</Heading>
      </Box>
      <Spacer />
      <ButtonGroup gap='2'>
        <Button colorScheme='black' variant='link'>About</Button>
        <Button colorScheme='black' variant='link'>Experience</Button>
        <Button colorScheme='black' variant='link'>Projects</Button>
        <Button colorScheme='black' variant='link'>Contact</Button>
        <Button colorScheme='red' variant='outline'>Resume</Button>
      </ButtonGroup>
    </Flex>
  )
}

export default TopNav;