import React from 'react';
import {createRoot} from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home/home';
import CookiesBox from './pages/cookiesBox/cookiesBox';
import CookiesChoice from './pages/cookiesChoice/cookiesChoice';
import Header from './components/header/header';
import Footer from './components/footer/footer';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
    <React.StrictMode>
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/cookiesBox" element={<CookiesBox/>}/>
          <Route path="/cookiesChoice" element={<CookiesChoice/>}/>
        </Routes>
        <Footer/>
      </Router>
    </React.StrictMode>,
document.getElementById('root')
)

