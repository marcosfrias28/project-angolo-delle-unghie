import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './components/Header.jsx';
import Home from './components/Home.jsx';
import Aboutme from './components/Aboutme.jsx';
import reportWebVitals from './reportWebVitals.js';
import Portfolio from './components/Portfolio.jsx';
import Contacts from './components/Contacts.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <header className='header'>
      <Header />
    </header>
    <main style={{backgroundColor:'#ffe4e4'}} className='main'>
      <Home />
      <Aboutme />
      <Portfolio />
      <Contacts />
    </main>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
