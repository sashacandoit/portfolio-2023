import React from "react";
import { VStack, Link, Container } from '@chakra-ui/react'
import { GithubIcon, LinkedinIcon, CodepenIcon, LineSvg } from '../assets/icons/icons.js'

function LeftNav() {
  return (
    <Container justifyContent='end' alignItems='center'>
      <VStack
        minHeight={{ base: '30rem', lg: '40rem', xl: "50rem" }}
        justify='end'
        spacing={6}
        align='center'
      >
        <Link href='https://github.com/sashacandoit' isExternal>
          <GithubIcon strokeWidth="1.667" stroke="#0A192F" w='20' h="21" fill="none" />
        </Link>
        <Link href='https://www.linkedin.com/in/sasha-c-41347526/' isExternal>
          <LinkedinIcon strokeWidth="1.667" stroke="#0A192F" width='20px' height="21" fill="none" />
        </Link>
        <Link href='https://codepen.io/sashacandoit' isExternal>
          <CodepenIcon strokeWidth="1.667" stroke="#0A192F" w='20px' h="20px" fill="none" />
        </Link>
        <LineSvg />

      </VStack>
    </Container>
  )
}

export default LeftNav