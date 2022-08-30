import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Home from "./Pages/Home/Home";
import WebDevelopment from "./Pages/WebDev/WebDevelopment";
import Graphics from "./Pages/Graphics/Graphics";
import AppDevelopment from "./Pages/AppDev/AppDevelopment";

function App() {
  const [theme, setTheme] = useState("");

  const toggleTheme = () => {
    theme === "" ? setTheme("light-theme") : setTheme("");
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <Router>
      <Header theme={theme} toggleTheme={toggleTheme} />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/webdevelopment" element={<WebDevelopment />}></Route>
        <Route path="/graphicsdesign" element={<Graphics />}></Route>
        <Route path="/appdevelopment" element={<AppDevelopment />}></Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
