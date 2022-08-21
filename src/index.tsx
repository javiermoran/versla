import React from 'react';
import ReactDOM from 'react-dom/client';
import './scss/index.scss';
import App from './App';

const rootElement: Element = document.getElementById('root') as Element;
const root = ReactDOM.createRoot(rootElement);
root.render(<App />);
