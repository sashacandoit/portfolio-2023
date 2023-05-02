import React from "react";
import { VStack, Link } from '@chakra-ui/react'
import { LineSvg } from '../assets/icons/icons.js'

function RightNav() {
  return (
    <VStack
      minHeight={{ base: '30rem', lg: '40rem', xl: "50rem" }}
      justify='end'
      spacing={6}
      align='center'
      // border='1px' borderColor='pink.300'
    >
      <Link fontSize={'sm'} textStyle={'secondary'} letterSpacing={'1.1px'} fontWeight='500' href='mailto:sashacandoit@gmail.com' isExternal className='RightNav-email-link'>
        sashacandoit@gmail.com
      </Link>
      <LineSvg />

    </VStack>
  )
}

export default RightNav;