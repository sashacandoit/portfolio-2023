import React from 'react';
import ReactDOM from 'react-dom/client';
import { ChakraProvider, extendTheme, defineStyle, defineStyleConfig } from '@chakra-ui/react'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Extend Chakra UI default theme
const colors = {
  brandBlue: {
    900: '#0D203D',
    500: '#8892B0',
    200: '#C0CDED'
  },
  brandBlack: '#020C1B',
  brandRed: {
    900: '#FF4B36',
    800: '#FF4B36',
    700: '#FF4B36',
    600: '#FF4B36',
    500: '#FF4B36',
    400: '#FF6F5E',
    300: '#FF8F84',
    200: '#FFBAB5',
    100: '#FDD7D5',
    50: '#FFF5F5'
  }
}

const textStyles = {
  primary: {
    fontFamily: "Inter"
  },
  secondary: {
    fontFamily: "Fira Code"
  },
}

const fonts = {
  body: 'Inter',
  heading: 'Inter'
}

const customH1 = {
  fontWeight: '900',
  textStroke: '1px brandBlack'
}

const components = {
  Heading: {
    variants: {
      customH1: {
        fontWeight:'bold',
        fontSize: '8rem',
      },
      customH2: {
        fontWeight: '600',
        fontSize: '2rem',
        color: 'brandBlack'
      },
      customH3: {
        fontWeight: 'bold',
        fontSize: '3.8rem',
      }
    }
  }
}

const theme = extendTheme({ colors, fonts, textStyles, components });

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
