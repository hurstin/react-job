// React Job Board Application - Entry Point
// This is the main entry file that initializes the React application

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';

// Create React root and render the application
// StrictMode enables additional checks and warnings for development
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
