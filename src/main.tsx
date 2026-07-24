import '@mantine/core/styles.css'
import '@mantine-bites/lightbox/styles.css'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import { MantineProvider, createTheme } from '@mantine/core'
import App from './App'

const theme = createTheme({
  primaryColor: 'green',
})

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MantineProvider theme={theme}>
      <HashRouter>
        <App />
      </HashRouter>
    </MantineProvider>
  </StrictMode>,
)
