import './App.css'
import {useEffect, useRef } from 'react';
import { BrowserRouter, Routes, Route, Link, useLocation } from "react-router-dom";
import Home from "./Home/Home.jsx"
import NavBar from "./NavBar/NavBar.jsx"
import Signup from "./Signup/Signup.jsx"
import ErrorPage from "./ErrorPage.jsx"
import { HashLink } from 'react-router-hash-link';



function App() {

  return (
    <BrowserRouter>
      <div>
        <NavBar/>
        <Routes>
          <Route path="/" element={<Home
          />} />
          <Route path="/signup" element={<Signup

          />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
