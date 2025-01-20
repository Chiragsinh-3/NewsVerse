import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import About from "./components/About";
import News from "./components/News";
import Pricing from "./components/Pricing";
import Contact from "./components/Contact";
import articles from "./assets/example.json";

function App() {

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<News articles={articles} />} />
        <Route path='/about' element={<About />} />
        <Route path='/pricing' element={<Pricing />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
