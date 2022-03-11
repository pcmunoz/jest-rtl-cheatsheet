import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import App from './App';
import './index.css';

const container = document.getElementById('root');

if (!container) throw new Error('Failed to find the root element.')

// Create a root.
const root = ReactDOMClient.createRoot(container);

// Initial render: Render an element to the root.
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
