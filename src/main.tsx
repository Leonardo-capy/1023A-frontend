import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import './index.css'

import App from './App.tsx'
import App1 from './Body.tsx'
import App2 from './Footer.tsx'
import App3 from './Header.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App/>
    <App1/>
    <App2/>
    <App3/>
  </StrictMode>,
)
