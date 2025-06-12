import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Home from "./Pages/Home/Home";
import WebDevelopment from "./Pages/WebDev/WebDevelopment";
import Graphics from "./Pages/Graphics/Graphics";
import AppDevelopment from "./Pages/AppDev/AppDevelopment";
import ContactUs from "./Pages/ContactUs/ContactUs";
import NotFound from "./Pages/NotFound/NotFound";
// import LoadingScreen from "./components/LoadingScreen";
// import ScrollProgress from "./components/ScrollProgress";
// import BackToTop from "./components/BackToTop";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  const [theme, setTheme] = useState("");
  // const [isLoading, setIsLoading] = useState(true);

  const toggleTheme = () => {
    theme === "" ? setTheme("light-theme") : setTheme("");
  };

  // const handleLoadingComplete = () => {
  //   setIsLoading(false);
  // };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  useEffect(() => {
    // Add padding-top to body to account for fixed header
    document.body.style.paddingTop = '80px';

    return () => {
      document.body.style.paddingTop = '0';
    };
  }, []);

  // if (isLoading) {
  //   return <LoadingScreen onLoadingComplete={handleLoadingComplete} />;
  // }

  return (
    <Router>
      <ScrollToTop />
      {/* <ScrollProgress /> */}
      <Header theme={theme} toggleTheme={toggleTheme} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/webdevelopment" element={<WebDevelopment />} />
        <Route path="/graphicsdesign" element={<Graphics />} />
        <Route path="/appdevelopment" element={<AppDevelopment />} />
        <Route path='/contactus' element={<ContactUs />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer theme={theme} />
      {/* <BackToTop /> */}
    </Router>
  );
}

export default App;
