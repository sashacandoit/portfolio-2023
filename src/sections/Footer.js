import React from "react";
import { Link, Stack, Text, Box, Flex } from '@chakra-ui/react' //typography
import { GithubIcon, LinkedinIcon, CodepenIcon } from "../assets/icons/icons";


function Footer() {
  return (
    <Stack paddingY={10} gap={1}>
      <Text textStyle={'secondary'} color='gray.500' fontSize='sm'>
        Designed & Built by Sasha Czerniawski
      </Text>
      <Flex minWidth='max-content' alignItems='center' justifyContent='center' gap='6'>
        <Link href="#" isExternal>
          <LinkedinIcon strokeWidth="1" w="5" h="18" fill="none" stroke='gray.500' />
        </Link>
        <Link href="#" isExternal>
          <GithubIcon strokeWidth="1" w="5" h="18" fill="none" stroke='gray.500' />
        </Link>
        <Link href="#" isExternal>
          <CodepenIcon strokeWidth="1" w="5" h="18" fill="none" stroke='gray.500' />
        </Link>
      </Flex>
      <Flex minWidth='max-content' alignItems='center' justifyContent='center' gap='6' >
        <Box textStyle={'secondary'} fontSize='xs' color='gray.500'>React</Box>
        <Box textStyle={'secondary'} fontSize='xs' color='gray.500'>Netlify</Box>
        <Box textStyle={'secondary'} fontSize='xs' color='gray.500'>Chakra-UI</Box>
      </Flex>
    </Stack>

  )
}

export default Footer;