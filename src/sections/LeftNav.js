import React from "react";
import { VStack, Link } from '@chakra-ui/react'
import { GithubIcon, LinkedinIcon, CodepenIcon, LineSvg } from '../assets/icons/icons.js'

function LeftNav() {
  return (
    <VStack
      height='85vh'
      justify='end'
      spacing={6}
      align='center'
      border='1px' borderColor='pink.300'
    >
      <Link href='https://github.com/sashacandoit' isExternal>
        <GithubIcon w='20' h="21" fill="none" />
      </Link>
      <Link href='https://github.com/sashacandoit' isExternal>
        <LinkedinIcon width='20px' height="21" fill="none" />
      </Link>
      <Link href='https://github.com/sashacandoit' isExternal>
        <CodepenIcon w='20px' h="20px" fill="none" />
      </Link>
      <LineSvg />

    </VStack>
  )
}

export default LeftNav