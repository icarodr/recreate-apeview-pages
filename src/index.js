import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './login-page';
import App2 from './register-page';

const root = ReactDOM.createRoot(document.getElementById('root'));
const root2 = ReactDOM.createRoot(document.getElementById('root2'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
root2.render(
    <React.StrictMode>
      <App2 />
    </React.StrictMode>
  );