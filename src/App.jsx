import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import Navbar from "./Home Page/NavBar/Navbar";

import Home from "./Components/Home";
import About from "./Components/About";
import Products from "./Components/Products";
import OrderNow from "./Components/OrderNow";
import ContactMe from "./Components/Contact";
import OrderHistory from "./Components/OrderHistory";

function App() {
  return (
    <>
    <Router>
      {/* Navbar will be visible on all pages */}
      <Navbar />

      {/* All routes are declared here */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/order" element={<OrderNow />} />
        <Route path="/order-history" element={<OrderHistory />} />
        <Route path="/contact" element={<ContactMe />} />
      </Routes>
    </Router>
    
    </>
  );
}

export default App;
