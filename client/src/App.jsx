import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About"; 
import Contact from "./pages/Contact"; 
import Service from "./pages/Services"; 
import Register from "./pages/Register"; 
import Login from "./pages/Login"; 
import Home from "./pages/Home"; 
import Navbar from "./components/Navbar";
import Error from "./pages/Error"; 

import Csk from "./Teams/Csk";
import Srh from "./Teams/Srh";
import Mi from "./Teams/Mi";
// import Pitch from "./Pitch/Pitch.jsx";
// import Player from "./players/Player.jsx";
import Nightmare from "./nightmare/Nightmare.jsx";
import './index.css';

// pitches route
import Chennai from "../src/Pitch/Chennai";
import Mumbai from "../src/Pitch/Mumbai";
import Kolkata from "../src/Pitch/Kolkata";
import Banglore from "../src/Pitch/Banglore";
import Hyderabad from "../src/Pitch/Hyderabad"; // Corrected spelling
import Ahmedabad from "../src/Pitch/Ahmedabad"; // Corrected spelling
import Delhi from "../src/Pitch/Delhi";
import Lucknow from "../src/Pitch/Lucknow";
import Rajasthan from "../src/Pitch/Rajasthan";
import Punjab from "../src/Pitch/Punjab";


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
          <Route exact path="/csk" element={<Csk />} />
          <Route exact path="/srh" element={<Srh />} />
          <Route exact path="/mi" element={<Mi />} />
          {/* <Route exact path="/pitch/*" element={<Pitch />} /> */}
          <Route exact path="/night" element={<Nightmare />} />
          <Route path="*" element={<Error />} />
{/* 
          pitches routes */}
          <Route exact path="/chennai" element={<Chennai />} />
      <Route exact path="/mumbai" element={<Mumbai />} />
      <Route exact path="/kolkata" element={<Kolkata />} />
      <Route exact path="/banglore" element={<Banglore />} />
      <Route exact path="/hyderabad" element={<Hyderabad />} />
      <Route exact path="/ahmedabad" element={<Ahmedabad />} />
      <Route exact path="/delhi" element={<Delhi />} />
      <Route exact path="/lucknow" element={<Lucknow />} />
      <Route exact path="/rajasthan" element={<Rajasthan />} />
      <Route exact path="/punjab" element={<Punjab />} />
        </Routes>
    
      </BrowserRouter>,
    
    </>
  );
};

export default App;
