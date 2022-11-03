import React from 'react';
import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import './index.css';

import App from './App';
import * as serviceWorker from "./serviceWorker";
import { ThemeProvider, createTheme } from '@material-ui/core/styles';
import { CertificationProvider } from './contexts/EthContext/CertificationContext';

const theme = createTheme({
  palette: {
    primary: { main: "#2196f3" }
  },
  typography: {
    useNextVariants: true
  }
});


// 👇️ IMPORTANT: use correct ID of your root element
// this is the ID of the div in your index.html file
const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

// 👇️ if you use TypeScript, add non-null (!) assertion operator
// const root = createRoot(rootElement!);

root.render(
  <CertificationProvider>
    <StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </StrictMode>
  </CertificationProvider>,
);


serviceWorker.unregister();

