import { useState } from 'react'
import './App.css'
import Home from "./pages/Home"
// import About from "./pages/Works"
// import Projects from "./pages/Fun"
import NavigationBar from './navbar';
import { Routes, Route, HashRouter } from "react-router-dom";

function App() {
  return (
    <>
      <HashRouter>
        <div>
          <NavigationBar></NavigationBar>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Works" element={<Works />} />
            <Route path="/Fun" element={<Fun />} />
          </Routes>
        </div>
      </HashRouter>
    </>
  )
}

export default App
