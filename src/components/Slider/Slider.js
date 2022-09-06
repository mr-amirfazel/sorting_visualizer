import React from 'react';
import {useSelector} from 'react-redux';


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

export default function Slider(props) {

  const size = useSelector(state => state.size);

    const changeHandler = (e, data) => {
        props.onChange(data);
    }


  return (
    <ThemeProvider theme={theme}>
    <MUISlider
    min={18}
    max={90}
    defaultValue={size} 
    aria-label="Default" 
    valueLabelDisplay="auto"
    onChange={changeHandler}
    />
   </ThemeProvider>
  );
}