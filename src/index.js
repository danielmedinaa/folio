import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import HeaderComponent from './components/header'
import NavBar from './components/navBar';
import AboutUs from "./components/aboutUs";
import Folio from './components/folio';
import KnowLedge from './components/knowLedge';
import Floaticon from './components/layouts/floaticon';
import Contact from './components/contact';
import Footer from './components/footer';

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NavBar/>
    <HeaderComponent/>
    <AboutUs/>
    <Folio/>
    <KnowLedge/>
    <Floaticon/>
    <Contact/>
    <Footer/>
  </React.StrictMode>
);
reportWebVitals();
