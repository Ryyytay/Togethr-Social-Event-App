import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './app/layout/styles.css'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import 'react-toastify/dist/ReactToastify.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { router } from './app/router/Routes.tsx';
import { RouterProvider } from 'react-router';
import { store, StoreContext } from './lib/stores/store.ts';
import { ToastContainer } from 'react-toastify';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { AppThemeProvider } from './lib/contexts/ThemeContext';

const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppThemeProvider>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <StoreContext.Provider value={store}>
          <QueryClientProvider client={queryClient}>
            <ReactQueryDevtools/>
              <ToastContainer position='bottom-right' hideProgressBar />
              <RouterProvider router={router}/>
          </QueryClientProvider>
        </StoreContext.Provider>
      </LocalizationProvider>
    </AppThemeProvider>
  </StrictMode>,
)
