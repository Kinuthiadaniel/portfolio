// import logo from './logo.svg';
import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes, Outlet } from "react-router-dom";
import Landing from './pages/Landing';
import Navbar from './pages/Navbar';
import Footer from './pages/Footer'
import About from './pages/About'
import Projects from './pages/Projects'
import Contact from './pages/Contact'

function MainLayout() {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}
function App() {
  return (
    <div className="container mx-auto px-4">
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Landing />} />
            <Route path='/about' element={<About/>} />
            <Route path='/projects' element={<Projects/>} />
            <Route path='/contact' element={<Contact/>} />
          </Route>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
