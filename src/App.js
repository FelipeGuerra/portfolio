import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import Header from './components/Header';

import Intro from './components/Intro';
import About from './components/About';
import Skills from './components/Skills';
import Contact from './components/Contact';

import Footer from './components/Footer';

const theme = createMuiTheme({
  typography: {
    fontFamily: [
      '"Fira Code"',
      'sans-serif',
    ].join(','),
  },
});

export default function MyApp() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <Header />
      
      <Intro />
      <About />
      <Skills />
      <Contact />

      <Footer />
  </ThemeProvider>
  );
}