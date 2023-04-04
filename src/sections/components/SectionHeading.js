import React from "react";
import { Heading, Flex, Box } from '@chakra-ui/react'

function SectionHeading(props) {
  return (
    <Flex>
      <Heading paddingRight={'4rem'} lineHeight={'0.8em'} as='h3' size='2xl'>{props.title}</Heading>
      <Box flex='1' borderBottom='1px' borderColor='black.300'>
      </Box>
    </Flex>
  )
};

export default SectionHeading;