import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import 'remixicon/fonts/remixicon.css';

// Get the root element
const container = document.getElementById('root');

// Create root with React 18's createRoot
const root = createRoot(container);

// Render with React 18's concurrent features
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
