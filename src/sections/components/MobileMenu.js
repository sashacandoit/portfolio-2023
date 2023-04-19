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
      <IconButton ref={btnRef} onClick={onOpen} colorScheme='white' icon={<MenuSvg color='black' fontSize="2.4em" />} />
      <Drawer
        isOpen={isOpen}
        placement='top'
        onClose={onClose}
        finalFocusRef={btnRef}
        size='full'
      >
        <DrawerOverlay />
        <DrawerContent padding={8} >
          <DrawerCloseButton size={'lg'} />
          <DrawerHeader></DrawerHeader>
          <DrawerBody >
            <Stack spacing={'6'} alignItems='start' justifyContent={'start'}>
              <Button className="heading-outline" as="a" href="#about_section" fontSize={'2.6rem'} colorScheme='black' variant='link'>About</Button>
              <Button className="heading-outline" as="a" href="#work_section" fontSize={'2.6rem'} colorScheme='black' variant='link'>Experience</Button>
              <Button className="heading-outline" as="a" href="#projects_section" fontSize={'2.6rem'} colorScheme='black' variant='link'>Projects</Button>
              <Button className="heading-outline" as="a" href="#contact_section" fontSize={'2.6rem'} colorScheme='black' variant='link'>Contact</Button>
              <Button className="heading-outline" as="a" href="https://res.cloudinary.com/dokpuqyyp/image/upload/v1681901104/Sasha_Czerniawski_Resume_2023_mxnxlk.pdf" isExternal target="_blank" fontSize={'2.6rem'} colorScheme='black' variant='link'>Resume</Button>
            </Stack>
          </DrawerBody>

          <DrawerFooter flexDirection={'column'} alignItems='start' justifyContent={'start'}>
            <ButtonGroup spacing={'8'}>
              <Link href='https://github.com/sashacandoit' isExternal>
                <GithubIcon strokeWidth="1.3" stroke="#0A192F" w='25px' h="26px" fill="none" />
              </Link>
              <Link href='https://www.linkedin.com/in/sasha-c-41347526/' isExternal>
                <LinkedinIcon strokeWidth="1.3" stroke="#0A192F" width='25px' height="26" fill="none" />
              </Link>
              <Link href='https://codepen.io/sashacandoit' isExternal>
                <CodepenIcon strokeWidth="1.3" stroke="#0A192F" w='25px' h="26px" fill="none" />
              </Link>
            </ButtonGroup>
            <Box marginY='6'>
              <Link textStyle='secondary' href='mailto:sashacandoit@gmail.com' isExternal fontSize={"1.2rem"}>
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