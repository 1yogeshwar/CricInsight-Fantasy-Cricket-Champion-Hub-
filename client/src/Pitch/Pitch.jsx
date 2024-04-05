
import "./pitch.css";
import React from "react";
import { BrowserRouter ,Route, Routes } from "react-router-dom";
import Chennai from "./Chennai";
import Mumbai from "./Mumbai";
import Kolkata from "./Kolkata";
import Banglore from "./Banglore";
import Hyderabad from "./Hyderabad"; // Corrected spelling
import Ahmedabad from "./Ahmedabad"; // Corrected spelling
import Delhi from "./Delhi";
import Lucknow from "./Lucknow";
import Rajasthan from "./Rajasthan";
import Punjab from "./Punjab";

const Pitch = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
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
      </BrowserRouter>
    </>
  );
};

export default Pitch;
