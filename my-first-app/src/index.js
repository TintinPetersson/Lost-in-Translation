import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import "bootstrap-icons/font/bootstrap-icons.css";
import AppContext from './context/UserContext'
import ReactDOM from 'react-dom/client';
import React from 'react';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>
    <AppContext>
      <App />
    </AppContext>
  </React.StrictMode>

);