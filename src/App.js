import './App.css';
import { ChakraProvider } from '@chakra-ui/react'
import { VStack, Stack, Flex, Spacer, Grid, GridItem, Box } from '@chakra-ui/react' //layout
import { Heading, Text } from '@chakra-ui/react' //typography
import { ButtonGroup, Button, Link } from '@chakra-ui/react'
import { GithubIcon, LinkedinIcon, CodepenIcon, LineSvg } from './assets/icons/icons.js'

function App() {
  return (
    <ChakraProvider>
      <Grid
        templateAreas={`"header header header"
                  "left-nav main right-nav"
                  "footer footer footer"`}
        gridTemplateRows={'1fr 1fr 50px'}
        gridTemplateColumns={'75px 1fr 75px'}
        h='200px'
        gap='1'
        color='blackAlpha.700'
        fontWeight='bold'
      >
        <GridItem p='2' border='1px' borderColor='orange.300' area={'header'} textAlign={'center'}>
          <Flex minWidth='max-content' alignItems='center' gap='2'>
            <Box p='2'>
              <Heading size='md'>Sasha Czerniawski</Heading>
            </Box>
            <Spacer />
            <ButtonGroup gap='2'>
              <Button colorScheme='black' variant='link'>About</Button>
              <Button colorScheme='black' variant='link'>Experience</Button>
              <Button colorScheme='black' variant='link'>Projects</Button>
              <Button colorScheme='black' variant='link'>Contact</Button>
              <Button colorScheme='red' variant='outline'>Resume</Button>
            </ButtonGroup>
          </Flex>
        </GridItem>
        
        <GridItem pl='2' border='1px' borderColor='blue.300' area={'left-nav'}>
          <VStack
            height={'100%'}
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
        </GridItem>
        
        <GridItem border='1px' borderColor='green.300' area={'main'} align='start' padding={'0 6%'}>
          <Box align='start' border='1px' borderColor='blue.600' height={{ base: '60vh', lg: '85vh' }}> 
            <VStack
              height={'25rem'}
              justify='end'
              spacing={6}
              align='start'
              border='1px' borderColor='pink.300'
            >
              <Stack spacing={3}>
                <Text fontSize='lg'>Hi, I'm</Text>
                <Heading as='h1' size='4xl' noOfLines={1}>Sasha</Heading>
                <Heading as='h2' size='lg' noOfLines={1}>I build useful & novel things for the web</Heading>
              </Stack>
              <Button colorScheme='red' variant='outline' size={'lg'}>
                Button
              </Button>
            </VStack>
          </Box>
        </GridItem>

        <GridItem pl='2' border='1px' borderColor='blue.300' area={'footer'} textAlign={'center'}>
          Footer
        </GridItem>
        <GridItem pl='2' border='1px' borderColor='pink.300' area={'right-nav'}>
          <VStack
            height={'100%'}
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
        </GridItem>
      </Grid>
    </ChakraProvider>
  );
}

export default App;
