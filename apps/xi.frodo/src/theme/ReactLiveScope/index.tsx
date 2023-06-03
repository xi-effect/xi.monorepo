/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { Button as ButtonPkg } from 'pkg.inputs.button';
import BrowserOnly from '@docusaurus/BrowserOnly';
import { getScheme } from 'pkg.theme';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const Button = (props) => {
  // @ts-ignore
  const theme = createTheme(getScheme('light'));
  return (
    <BrowserOnly>
      {() => (
        <ThemeProvider theme={theme}>
          <ButtonPkg type="button" {...props} />
        </ThemeProvider>
      )}
    </BrowserOnly>
  );
};

// Add react-live imports you need here
const ReactLiveScope = {
  React,
  ...React,
  Button,
};

export default ReactLiveScope;
