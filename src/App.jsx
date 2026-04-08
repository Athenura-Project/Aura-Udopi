import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./Pages/Nav";
import Footer from "./Pages/Footer";
import Home from "./Pages/Home";
import Cakes from "./Pages/Cakes";
import FullAestheticMenu from "./Pages/Menu";
import AuraBoulangerie from "./Pages/AuraBoulangerie";


const App = () => {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cakes" element={<Cakes />} />
        <Route path="/menu" element={<FullAestheticMenu />} />
        <Route path="/garlic-breads" element={<AuraBoulangerie />} />

      </Routes>
      <Footer />  
    </Router>
  );
};

export default App;