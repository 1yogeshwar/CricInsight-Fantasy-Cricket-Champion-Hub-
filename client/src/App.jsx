import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About"; 
import Contact from "./pages/Contact"; 
import Service from "./pages/Service"; 
import Register from "./pages/Register"; 
import Login from "./pages/Login"; 
import Home from "./pages/Home"; 
import Navbar from "./components/Navbar";
import Error from "./pages/Error"; 

const App = () => {
  return (
    <>
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/service" element={<Service />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/login" element={<Login />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
