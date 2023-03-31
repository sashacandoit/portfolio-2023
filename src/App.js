import './App.css';
import { ChakraProvider } from '@chakra-ui/react'
import { Grid, GridItem } from '@chakra-ui/react' //layout

function App() {
  return (
    <ChakraProvider>
      <Grid
        templateAreas={`"header header header"
                  "left-nav main right-nav"
                  "left-nav footer right-nav"`}
        gridTemplateRows={'50px 1fr 50px'}
        gridTemplateColumns={'50px 1fr 50px'}
        h='200px'
        gap='1'
        color='blackAlpha.700'
        fontWeight='bold'
      >
        <GridItem pl='2' bg='orange.300' area={'header'}>
          Header
        </GridItem>
        <GridItem pl='2' bg='pink.300' area={'left-nav'}>
          Left-Nav
        </GridItem>
        <GridItem pl='2' bg='green.300' area={'main'}>
          Main
        </GridItem>
        <GridItem pl='2' bg='blue.300' area={'footer'}>
          Footer
        </GridItem>
        <GridItem pl='2' bg='pink.300' area={'right-nav'}>
          Right-Nav
        </GridItem>
      </Grid>
    </ChakraProvider>
  );
}

export default App;
