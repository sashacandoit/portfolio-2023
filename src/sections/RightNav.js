import React from "react";
import { VStack, Link } from '@chakra-ui/react'
import { LineSvg } from '../assets/icons/icons.js'

function RightNav() {
  return (
    <VStack
      height={{ base: '75vh', lg: '85vh' }}
      justify='end'
      spacing={6}
      align='center'
      border='1px' borderColor='pink.300'
    >
      <Link href='mailto:sashacandoit@gmail.com' isExternal className='RightNav-email-link'>
        sashacandoit@gmail.com
      </Link>
      <LineSvg />

    </VStack>
  )
}

export default RightNav;