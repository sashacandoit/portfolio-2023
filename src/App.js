import './App.css';
import { ChakraProvider } from '@chakra-ui/react'
import { Flex, Spacer, Grid, GridItem, Container, Box } from '@chakra-ui/react' //layout
import { Stack, Heading, Text } from '@chakra-ui/react' //typography
import { ButtonGroup, Button } from '@chakra-ui/react'

function App() {
  return (
    <ChakraProvider>
      <Grid
        templateAreas={`"header header header"
                  "left-nav main right-nav"
                  "footer footer footer"`}
        gridTemplateRows={'50px 1fr 50px'}
        gridTemplateColumns={'75px 1fr 75px'}
        h='200px'
        gap='1'
        color='blackAlpha.700'
        fontWeight='bold'
      >
        <GridItem pl='2' border='1px' borderColor='orange.300' area={'header'} textAlign={'center'}>
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
        <GridItem pl='2' border='1px' borderColor='pink.300' area={'left-nav'}>
          Left-Nav
        </GridItem>
        <GridItem pl='2' border='1px' borderColor='green.300' area={'main'}>
          <Container maxW='6xl' border='1px' borderColor='blue.600'> 
            <Box w='100%' p={4} border='1px' borderColor='pink.300'>
              <Stack spacing={3}>
                <Text fontSize='lg'>Hi, I'm</Text>
                <Heading as='h1' size='4xl' noOfLines={1}>Sasha</Heading>
                <Heading as='h2' size='lg' noOfLines={1}>I build useful & novel things for the web</Heading>
              </Stack>
              <Button colorScheme='red' variant='outline' size={'lg'}>
                Button
              </Button>
            </Box>
            
          </Container>
        </GridItem>
        <GridItem pl='2' border='1px' borderColor='blue.300' area={'footer'} textAlign={'center'}>
          Footer
        </GridItem>
        <GridItem pl='2' border='1px' borderColor='pink.300' area={'right-nav'}>
          Right-Nav
        </GridItem>
      </Grid>
    </ChakraProvider>
  );
}

export default App;
