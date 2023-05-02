import React from "react";
import { VStack, Stack, Container, Box } from '@chakra-ui/react' //layout
import { Heading, Text } from '@chakra-ui/react' //typography
import { Button } from '@chakra-ui/react'

function Welcome() {
  return (
    <Box justifyContent='end' alignItems='start' paddingX={"6%"} paddingBottom={'5%'}>
      <VStack
        minHeight={{ base: '30rem', lg: '40rem', xl: "50rem" }}
        justify='end'
        spacing={{ base: "2rem", lg: '6rem' }}
        align='start'
      >
        <Stack spacing={{base: 1, lg: 3}}>
          <Text color={'black'} textStyle='secondary' fontWeight={'400'}>Hi, I'm</Text>
          <Heading className='heading-outline' as='h1' fontWeight={"bold"} fontSize={{base: "6.5rem", md: "8rem"}}>Sasha</Heading>
          <Heading as='h2' variant='customH2' >I build useful & novel things for the web</Heading>
        </Stack>
        <Button as="a" href="#projects_section" textStyle='secondary' colorScheme='brandRed' variant='outline' size={'lg'} fontSize='sm' fontWeight={'500'} >
          my projects
        </Button>
      </VStack>
    </Box>
  )
}

export default Welcome;