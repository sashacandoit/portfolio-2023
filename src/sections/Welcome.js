import React from "react";
import { VStack, Stack, Container } from '@chakra-ui/react' //layout
import { Heading, Text } from '@chakra-ui/react' //typography
import { Button } from '@chakra-ui/react'

function Welcome() {
  return (
    <Container maxW={'100%'} justifyContent='end' alignItems='start' paddingX={{lg: '6%', md: '0'}} >
      <VStack
        minHeight={{ base: '70vh', lg: '80vh' }}
        justify='end'
        spacing={'6rem'}
        align='start'
      >
        <Stack spacing={3}>
          <Text color={'black'} textStyle='secondary' fontWeight={'400'}>Hi, I'm</Text>
          <Heading className='heading-outline' as='h1' variant='customH1' noOfLines={1}>Sasha</Heading>
          <Heading as='h2' variant='customH2' noOfLines={1}>I build useful & novel things for the web</Heading>
        </Stack>
        <Button textStyle='secondary' colorScheme='brandRed' variant='outline' size={'lg'} fontSize='sm' fontWeight={'500'} >
          my projects
        </Button>
      </VStack>
    </Container>
  )
}

export default Welcome;