import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import './index.css'



import Header from './Container.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Header/>
    <Header/>
    <Header/>

  </StrictMode>,
)
