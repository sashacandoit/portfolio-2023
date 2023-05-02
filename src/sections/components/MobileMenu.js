import React from "react";
import { Stack, Box, Link, IconButton } from '@chakra-ui/react'
import { ButtonGroup, Button } from '@chakra-ui/react'
import { MenuSvg, GithubIcon, LinkedinIcon, CodepenIcon } from "../../assets/icons/icons";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure
} from '@chakra-ui/react'


function MobileMenu() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()

  return (
    <>
      <IconButton ref={btnRef} onClick={onOpen} colorScheme='white' icon={<MenuSvg color='black' fontSize="2em" />} />
      <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        finalFocusRef={btnRef}
        size='full'
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader></DrawerHeader>
          <DrawerBody >
            <Stack spacing={'4'} alignItems='start' justifyContent={'start'}>
              <Button as="a" href="#about_section" fontSize={'2rem'} colorScheme='black' variant='link'>About</Button>
              <Button as="a" href="#work_section" fontSize={'2rem'} colorScheme='black' variant='link'>Experience</Button>
              <Button as="a" href="#projects_section" fontSize={'2rem'} colorScheme='black' variant='link'>Projects</Button>
              <Button as="a" href="#contact_section" fontSize={'2rem'} colorScheme='black' variant='link'>Contact</Button>
              <Button as="a" href="/Sasha_Czerniawski_Resume_2023.pdf" download="SashaCzerniawskiResume2023" fontSize={'2rem'} colorScheme='brandRed' variant='link'>Resume</Button>
            </Stack>
          </DrawerBody>

          <DrawerFooter marginY='8' flexDirection={'column'} alignItems='start' justifyContent={'start'}>
            <ButtonGroup spacing={'5'}>
              <Link href='https://github.com/sashacandoit' isExternal>
                <GithubIcon stroke="#0A192F" w='20px' h="21px" fill="none" />
              </Link>
              <Link href='https://www.linkedin.com/in/sasha-c-41347526/' isExternal>
                <LinkedinIcon stroke="#0A192F" width='20px' height="21" fill="none" />
              </Link>
              <Link href='https://codepen.io/sashacandoit' isExternal>
                <CodepenIcon stroke="#0A192F" w='20px' h="20px" fill="none" />
              </Link>
            </ButtonGroup>
            <Box marginY='4'>
              <Link href='mailto:sashacandoit@gmail.com' isExternal>
                sashacandoit@gmail.com
              </Link>
            </Box>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  )
}

export default MobileMenu;