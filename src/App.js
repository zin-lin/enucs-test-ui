import logo from './logo.svg';
import './App.css';
import {BrowserRouter as R, Route, Routes } from 'react-router-dom'
import styles from './App.css'
import About from "./Pages/About";
import Home from "./Pages/Home";
import Nav from "./Navigators/Nav";

function App() {
  return (
    <R>
    <div className="App">
      <Nav/>
      <div className='rom-app'>
            <Routes>
                <Route element={<Home/>} path='/' exact/>
                <Route element={<About/>} path='/about' exact/>
            </Routes>
      </div>
    </div>
    </R>
  );
}

export default App;
