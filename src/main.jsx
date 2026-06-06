import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// Original template stylesheets imported via Vite's standard CSS bundler
import './styles/vendors.min.css'
import './styles/icon.min.css'
import './styles/style.css'
import './styles/responsive.css'
import './styles/it-business.css'

// Tailwind utility classes & dark mode system overrides
import './styles/globals.css'

import { HelmetProvider } from 'react-helmet-async';
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </StrictMode>,
)
