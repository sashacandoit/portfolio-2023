import './App.css';
import { Show, Grid, GridItem } from '@chakra-ui/react'
import RightNav from './sections/RightNav';
import LeftNav from './sections/LeftNav'
import Welcome from './sections/Welcome'
import TopNav from './sections/TopNav'
import Footer from './sections/Footer'
import About from './sections/About';
import Work from './sections/Work';
import Projects from './sections/Projects';
import OtherProjects from './sections/OtherProjects';
import GetInTouch from './sections/GetInTouch';

function App() {
  return (
    <Grid
      templateAreas={
        `"header header header" 
      "left-nav main right-nav"
      "footer footer footer"`}
      gridTemplateRows={'60px 1fr 50px'}
      gridTemplateColumns={'75px 1fr 75px'}
      gap='1'
    >
    
      <GridItem p='2' border='1px' borderColor='orange.300' area={'header'} textAlign={'center'}>
        <TopNav />
      </GridItem>

      <Show above='md'>
        <GridItem border='1px' borderColor='blue.300' area={'left-nav'}>
          <LeftNav />
        </GridItem>
      </Show>
      
      <GridItem border='1px' borderColor='green.300' area={'main'} align='start'>
        <Welcome />
        <About />
        <Work />
        <Projects />
        <OtherProjects />
        <GetInTouch />
      </GridItem>

      <GridItem border='1px' borderColor='blue.300' area={'footer'} textAlign={'center'}>
        <Footer />
      </GridItem>

      <Show above='md'>
        <GridItem border='1px' borderColor='pink.300' area={'right-nav'}>
          <RightNav />
        </GridItem>
      </Show>
      
    </Grid>
  );
}

export default App;
