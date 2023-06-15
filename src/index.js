import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom'
import { ThemeContextProvider } from './Context/ThemeContext';
import { PostContextProvider } from './Context/PostContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeContextProvider>
      <PostContextProvider>
        <Router>
          <App />
        </Router>
      </PostContextProvider>
    </ThemeContextProvider>
  </React.StrictMode>
);

