import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Boxes from './components/boxes';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Boxes />
  </React.StrictMode>
);

