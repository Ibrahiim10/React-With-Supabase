import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { BrowserRouter as BrowserRout } from 'react-router';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRout>
      <App />
    </BrowserRout>
  </StrictMode>
);
