import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import theme from './theme'
import { CssBaseline, ThemeProvider } from '@mui/material'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </StrictMode>
)
