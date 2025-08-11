import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/HomePage";
import About from "./pages/AboutPage";
import User from "./pages/UserPage";
import ContactUs from "./pages/ContactUsPage";
import Navbar from "./components/common/NavbarCommon";


const App = () => {
  return (

//Session 22/07/25
    <Router>
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/User" element={<User />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
      </div>
    </Router>
// Till here.
  );
};

export default App;
