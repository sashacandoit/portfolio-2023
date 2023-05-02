import React from "react";
import { Heading, Flex, Box, Hide } from '@chakra-ui/react'

function SectionHeading(props) {
  return (
    <Flex>
      <Heading paddingRight={'4rem'} lineHeight={'0.8em'} as='h3' fontSize={{ base: '3.2rem', md: '3.8rem' }} fontWeight={'bold'} variant={'customH3'} className='heading-outline'>{props.title}</Heading>
      <Hide below="md">
        <Box flex='1' borderBottom='1px' borderColor='black.300'>
        </Box>
      </Hide>
    </Flex>
  )
};

export default SectionHeading;