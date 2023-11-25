import React from 'react';
import { useState, useEffect } from 'react';
import Axios from 'axios';
import { ThemeProvider, Typography, createTheme } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Box from "@mui/material/Box";

import './App.css';
import GalleryList from '../GalleryList/GalleryList';




function App() {
  let [dogsArray, setDogsArray] = useState([]);

  useEffect(() => {
    whereMyDogsAt()
    }, []
  )

  const whereMyDogsAt = () => {
    Axios({
      method: 'GET',
      url: '/gallery'
    })
    .then ((response) => {
      console.log(response);
      setDogsArray(response.data)
      console.log('this is the data from the get', response.data);
    })
    .catch ((error) => {
      console.error(error)
    })
  }

  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });

  return (
    <>
    <ThemeProvider theme={darkTheme}>
    <CssBaseline />
    <Container maxWidth="lg">
      <header>
      <Typography variant="h1" gutterBottom>
        Happy Endings
      </Typography>
      </header>
      <GalleryList dogsArray = {dogsArray} whereMyDogsAt = {whereMyDogsAt}/>
    </Container>
    </ThemeProvider>
    </>
  );
}

export default App;
