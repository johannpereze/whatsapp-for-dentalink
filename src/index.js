import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import AdapterMoment from "@mui/lab/AdapterMoment";
import { es } from 'moment/locale/es'
import { GlobalStyles } from '@mui/material';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles styles={{ body: { backgroundColor: '#f5f5f5' } }} />
      <LocalizationProvider dateAdapter={AdapterMoment} locale={es}>
        <App />
      </LocalizationProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

