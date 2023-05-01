import React from "react";
import { Flex, Spacer, Box, Show, Hide } from '@chakra-ui/react' //layout
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
      <Hide below='md'>
        <ButtonGroup gap={['3', '5', '8']}>
          <Button as="a" href="#about_section" colorScheme='black' variant='link' textStyle='secondary' fontSize='xs'>About</Button>
          <Button as="a" href="#work_section" colorScheme='black' variant='link' textStyle='secondary' fontSize='xs'>Experience</Button>
          <Button as="a" href="#projects_section" colorScheme='black' variant='link' textStyle='secondary' fontSize='xs'>Projects</Button>
          <Button as="a" href="#contact_section" colorScheme='black' variant='link' textStyle='secondary' fontSize='xs'>Contact</Button>
          <Button as="a" href="/Sasha_Czerniawski_Resume_2023.pdf" download="SashaCzerniawskiResume2023" colorScheme='brandRed' variant='outline' textStyle='secondary' fontWeight={'500'} fontSize='xs'>Resume</Button>
        </ButtonGroup>
      </Hide>

      <Show below='md'>
        <MobileMenu />
      </Show>
      
    </Flex>
  )
}

export default TopNav;