import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import About from "./components/About";
import News from "./components/News";
import Pricing from "./components/Pricing";
import Contact from "./components/Contact";

function App() {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    const fetchArticles = () => {
      const url = `https://newsapi.org/v2/top-headlines?language=en&apiKey=${import.meta.env.VITE_API_KEY
        }&category=general&pageSize=50`;

      fetch(url)
        .then((response) => {
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          return response.json();
        })
        .then((data) => {
          setArticles(() => [...data.articles]);
        })
        .catch((error) => {
          console.error("Error fetching articles:", error);
        });
    };

    fetchArticles();
  }, []);

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
