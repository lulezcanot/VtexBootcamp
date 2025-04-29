import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './Componentes/Inicio/Inicio'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Niveles from './Componentes/Niveles/Niveles';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/niveles" element={<Niveles />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
