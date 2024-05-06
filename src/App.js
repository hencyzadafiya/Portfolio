import React from 'react';
import './App.css';

import { Route , Routes } from 'react-router-dom';
import Navbar from './component/global/navbar/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Experiances from './pages/Experiances';
import Work from './pages/Work';
import Blog from './pages/Blog';
import Contact from './pages/Contact'
import Footer from './component/global/footer/Footer';

function App() {
  return (
    <>
    <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/services' element={<Services/>}></Route>
        <Route path='/experiances' element={<Experiances/>}></Route>
        <Route path='/work' element={<Work/>}></Route>
        <Route path='/blog' element={<Blog/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
      </Routes>
    <Footer/>

    </>
  );
}

export default App;
