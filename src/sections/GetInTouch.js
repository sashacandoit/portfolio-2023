import React from "react";
import { Container, Center, Stack, Button, Text, Heading, Flex, Spacer } from '@chakra-ui/react'

function GetInTouch() {
  return (
    <Container maxW='container.sm' marginY="15rem">
      <Stack border='1px' borderColor='teal.300' spacing={8}>
        <Center>
          <Heading lineHeight={'0.8em'} as='h3' size='2xl'>Get In Touch</Heading>
        </Center>
        <Center>
          <Text size='lg' textAlign='center' width='30rem'>
            I’m a lifelong learner, and am always expanding my toolkit to effectively solve complex problems in efficient, elegant and human-centric ways. I’m always looking for new opportunities and would love to hear from you!
          </Text>
        </Center>
        <Flex minWidth='max-content' alignItems='center' justifyContent='center' gap='6'>
          <Button size='lg' minW='7.5rem' colorScheme='red' variant='outline'>Say hi</Button>
          <Button size='lg' minW='7.5rem' colorScheme='red' variant='outline'>Resume</Button>
        </Flex>
      </Stack>
    </Container>
  )
};


export default GetInTouch;