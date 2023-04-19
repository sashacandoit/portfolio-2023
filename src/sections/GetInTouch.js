import React from "react";
import { Container, Center, Stack, Button, Text, Heading, Flex } from '@chakra-ui/react'

function GetInTouch() {
  return (
    <Container id="contact_section" maxW='container.sm' marginY="15rem">
      <Stack spacing={8}>
        <Center>
          <Heading className="heading-outline" lineHeight={'0.8em'} as='h3' size='2xl'>Get In Touch</Heading>
        </Center>
        <Center>
          <Text size='lg' textAlign='center' width='30rem'>
            I’m a lifelong learner, and am always expanding my toolkit to effectively solve complex problems in efficient, elegant and human-centric ways. I’m always looking for new opportunities and would love to hear from you!
          </Text>
        </Center>
        <Flex minWidth='max-content' alignItems='center' justifyContent='center' gap='6'>
          <Button
            as="a"
            href="mailto:sashacandoit@gmail.com"
            textStyle={'secondary'}
            fontWeight={'500'}
            fontSize='sm'
            size='lg'
            minW='7.5rem'
            colorScheme='brandRed'
            variant='outline'>write me</Button>
          <Button
            as="a"
            href="/Sasha_Czerniawski_Resume_2023.pdf"
            download="SashaCzerniawskiResume2023"
            textStyle={'secondary'}
            fontWeight={'500'}
            fontSize='sm'
            size='lg'
            minW='7.5rem'
            colorScheme='brandRed'
            variant='outline'>resume</Button>
        </Flex>
      </Stack>
    </Container>
  )
};


export default GetInTouch;