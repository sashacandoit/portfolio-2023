import React from "react";
import { VStack, Stack, Container } from '@chakra-ui/react' //layout
import { Heading, Text } from '@chakra-ui/react' //typography
import { Button } from '@chakra-ui/react'

function Welcome() {
  return (
    <Container maxWidth="100%" justifyContent='end' alignItems='start' paddingX={{base: '0', md: '6%'}} >
      <VStack
        minHeight={{ base: '30rem', lg: '40rem', xl: "85vh" }}
        justify='end'
        spacing={{ base: "2rem", lg: '6rem' }}
        align='start'
      >
        <Stack spacing={{base: 1, lg: 3}}>
          <Text color={'black'} textStyle='secondary' fontWeight={'400'}>Hi, I'm</Text>
          <Heading className='heading-outline' as='h1' variant='customH1' noOfLines={1}>Sasha</Heading>
          <Heading as='h2' variant='customH2' >I build useful & novel things for the web</Heading>
        </Stack>
        <Button as="a" href="#projects_section" textStyle='secondary' colorScheme='brandRed' variant='outline' size={'lg'} fontSize='sm' fontWeight={'500'} >
          my projects
        </Button>
      </VStack>
    </Container>
  )
}

export default Welcome;