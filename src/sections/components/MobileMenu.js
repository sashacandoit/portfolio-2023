import React from "react";
import { Flex, Spacer, Box, Show, Hide, IconButton } from '@chakra-ui/react' //layout
import { Heading } from '@chakra-ui/react' //typography
import { ButtonGroup, Button } from '@chakra-ui/react'
import { MenuSvg } from "../../assets/icons/icons";
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
        placement='top'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Mobile Menu</DrawerHeader>

          <DrawerBody>
            Menu Items
          </DrawerBody>

          <DrawerFooter>
            Contact icons
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  )
}

export default MobileMenu;