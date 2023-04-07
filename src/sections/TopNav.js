import React from "react";
import { Flex, Spacer, Box, Show, Hide, IconButton } from '@chakra-ui/react' //layout
import { Heading } from '@chakra-ui/react' //typography
import { ButtonGroup, Button } from '@chakra-ui/react'
import { MenuSvg } from "../assets/icons/icons";

function TopNav() {
  return (
    <Flex minWidth='max-content' alignItems='center' gap='2'>
      <Box p='2'>
        <Heading size='md'>Sasha Czerniawski</Heading>
      </Box>
      <Spacer />
      <Show above='sm'>
        <ButtonGroup gap='2'>
          <Button colorScheme='black' variant='link'>About</Button>
          <Button colorScheme='black' variant='link'>Experience</Button>
          <Button colorScheme='black' variant='link'>Projects</Button>
          <Button colorScheme='black' variant='link'>Contact</Button>
          <Button colorScheme='red' variant='outline'>Resume</Button>
          <IconButton colorScheme='white' icon={<MenuSvg color='black' fontSize="2em" />} />

          
        </ButtonGroup>
      </Show>

      <Show below='sm'>

      </Show>
      
    </Flex>
  )
}

export default TopNav;