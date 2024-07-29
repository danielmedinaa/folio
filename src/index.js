import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './index.css';
import Footer from './components/footer';
import HomePage from './components/homePage';
import IndexTools from './components/Tools/indexTools';

import reportWebVitals from './reportWebVitals';
import '../src/resources/custom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='tools' element={<IndexTools/>}/>
      </Routes>
    <Footer/>
  </BrowserRouter>
);
reportWebVitals();
