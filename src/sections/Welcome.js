import React from "react";
import { VStack, Stack, Container } from '@chakra-ui/react' //layout
import { Heading, Text } from '@chakra-ui/react' //typography
import { Button } from '@chakra-ui/react'

function Welcome() {
  return (
    <Container maxW={'100%'} align='start' paddingX={{lg: '6%', md: '0'}} border='1px' borderColor='blue.600' minHeight={{ base: '75vh', lg: '85vh' }}>
      <VStack
        height={'30rem'}
        justify='end'
        spacing={6}
        align='start'
        border='1px' borderColor='pink.300'
      >
        <Stack spacing={3}>
          <Text fontSize='lg' textStyle='secondary' fontWeight={'400'}>Hi, I'm</Text>
          <Heading as='h1' variant='customH1' noOfLines={1}>Sasha</Heading>
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