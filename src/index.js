import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';

import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';

import { configureAppStore } from 'store/configureStore';
import App from './Routes';
import { mdTheme } from './theme';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const store = configureAppStore();

const container = document.getElementById('root');
const root = createRoot(container);
const queryClient = new QueryClient()
root.render(
  <Provider store={store}>
      <ThemeProvider theme={mdTheme}>
        <CssBaseline />
        <React.StrictMode>
        <QueryClientProvider client={queryClient}>
          <App />
          </QueryClientProvider>
        </React.StrictMode>
      </ThemeProvider>
  </Provider>
);
