import React from "react";
import { Flex, Spacer, Box, Show } from '@chakra-ui/react' //layout
import { Heading } from '@chakra-ui/react' //typography
import { ButtonGroup, Button } from '@chakra-ui/react'
import MobileMenu from "./components/MobileMenu";

function TopNav() {
  return (
    <Flex minWidth='max-content' alignItems='center' gap='2'>
      <Box p='2'>
        <Heading size='md'>Sasha Czerniawski</Heading>
      </Box>
      <Spacer />
      <Show above='md'>
        <ButtonGroup gap={['5', '3']}>
          <Button colorScheme='black' variant='link'>About</Button>
          <Button colorScheme='black' variant='link'>Experience</Button>
          <Button colorScheme='black' variant='link'>Projects</Button>
          <Button colorScheme='black' variant='link'>Contact</Button>
          <Button colorScheme='red' variant='outline'>Resume</Button>
          
        </ButtonGroup>
      </Show>

      <Show below='md'>
        <MobileMenu />
      </Show>
      
    </Flex>
  )
}

export default TopNav;