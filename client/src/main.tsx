import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./index.css"; // Tailwind + сбросы
//import "./styles/reset.css";
import "./styles/vars.css";
import "./styles/fonts.css";
import "./styles/styles.css";
import "./styles/media.css";

 
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
