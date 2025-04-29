import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './Componentes/Inicio/Inicio'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Niveles from './Componentes/Niveles/Niveles';
import Basico from './Componentes/Niveles/Basico';
import Intermedio from './Componentes/Niveles/Intermedio';
import Avanzado from './Componentes/Niveles/Avanzado';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/niveles" element={<Niveles />} />
        <Route path="/niveles/basico" element={<Basico />} />
        <Route path="/niveles/intermedio" element={<Intermedio />} />
        <Route path="/niveles/avanzado" element={<Avanzado />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
