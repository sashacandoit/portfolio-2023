import React from "react";
import { Flex, Spacer, Box, Show } from '@chakra-ui/react' //layout
import { Heading } from '@chakra-ui/react' //typography
import { ButtonGroup, Button } from '@chakra-ui/react'
import MobileMenu from "./components/MobileMenu";

function TopNav() {
  return (
    <Flex minWidth='100%' alignItems='center' gap='2' paddingX='6' paddingY='2'>
      <Box >
        <Heading size='md'>Sasha Czerniawski</Heading>
      </Box>
      <Spacer />
      <Show above='md'>
        <ButtonGroup gap={['3', '5', '8']}>
          <Button colorScheme='black' variant='link' textStyle='secondary' fontSize='xs'>About</Button>
          <Button colorScheme='black' variant='link' textStyle='secondary' fontSize='xs'>Experience</Button>
          <Button colorScheme='black' variant='link' textStyle='secondary' fontSize='xs'>Projects</Button>
          <Button colorScheme='black' variant='link' textStyle='secondary' fontSize='xs'>Contact</Button>
          <Button colorScheme='brandRed' variant='outline' textStyle='secondary' fontWeight={'500'} fontSize='xs'>Resume</Button>
          
        </ButtonGroup>
      </Show>

      <Show below='md'>
        <MobileMenu />
      </Show>
      
    </Flex>
  )
}

export default TopNav;