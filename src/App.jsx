import React, { useState, useEffect, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import Header from "./Header/Header";
import Footer from "./Footer/Footer";

// Lazy load pages for better performance
const Home = React.lazy(() => import("./Pages/Home/Home"));
const WebDevelopment = React.lazy(() => import("./Pages/WebDev/WebDevelopment"));
const Graphics = React.lazy(() => import("./Pages/Graphics/Graphics"));
const AppDevelopment = React.lazy(() => import("./Pages/AppDev/AppDevelopment"));
const ContactUs = React.lazy(() => import("./Pages/ContactUs/ContactUs"));
const NotFound = React.lazy(() => import("./Pages/NotFound/NotFound"));
// import LoadingScreen from "./components/LoadingScreen";
// import ScrollProgress from "./components/ScrollProgress";
// import BackToTop from "./components/BackToTop";
import ScrollToTop from "./components/ScrollToTop";

// Loading component for lazy-loaded pages
const PageLoader = () => (
  <div style={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '50vh',
    fontSize: '1.2rem',
    color: 'var(--primary-color)'
  }}>
    <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: '1rem'
    }}>
      <div style={{
        width: '20px',
        height: '20px',
        border: '2px solid var(--primary-color)',
        borderTop: '2px solid transparent',
        borderRadius: '50%',
        animation: 'spin 1s linear infinite'
      }}></div>
      Loading...
    </div>
  </div>
);

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
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/webdevelopment" element={<WebDevelopment />} />
          <Route path="/graphicsdesign" element={<Graphics />} />
          <Route path="/appdevelopment" element={<AppDevelopment />} />
          <Route path='/contactus' element={<ContactUs />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
      <Footer theme={theme} />
      {/* <BackToTop /> */}
    </Router>
  );
}

export default App;
