import React from 'react';
import { createRoot } from 'react-dom/client';
import '../src/styles/css/index.css';
import App from './App';

const container = document.getElementById('app');
const root = createRoot(container);
root.render(<App tab="home" />);
