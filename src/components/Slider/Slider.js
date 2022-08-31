import React from 'react';
import {Slider as MUISlider} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
    palette: {
      primary: {
        // Purple and green play nicely together.
        main: '#282c34',
      },
      secondary: {
        // This is green.A700 as hex.
        main: '#11cb5f',
      },
    },
  });

export default function Slider() {


  return (
    <ThemeProvider theme={theme}>
    <MUISlider
    min={18}
    max={90}
    defaultValue={50} 
    aria-label="Default" 
    valueLabelDisplay="auto"
    />
   </ThemeProvider>
  );
}