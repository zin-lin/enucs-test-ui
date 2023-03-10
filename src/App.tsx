
import './App.css';
import {HashRouter as R, Route, Routes } from 'react-router-dom'
import About from "./views/About";
import Home from "./views/Home";
import Nav from './components/Navigators/Nav';
import MobileNav from "./components/Navigators/MobileNav";
import Profile from "./views/Profile";
import React from 'react';

function App() {
  return (
    <R>
        <div className="App">
          <Nav/>
          <div className='rom-app'>
                <Routes>
                    <Route element={<Home/>} path='/' />
                    <Route element={<About/>} path='/about' />
                    <Route element={<Profile/>} path='/profile' />
                </Routes>
          </div>
          <MobileNav/>
        </div>
    </R>
  );
}

export default App;
