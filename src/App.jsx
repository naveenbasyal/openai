import React from "react";
import Home from "./Home/Home";
import Header from "./Header/Header";
import Assistant from "./Assistant/Assistant";
import ImageGenerator from "./ImageGenerator/ImageGenerator"
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/assistant" element={<Assistant />} />
          <Route path="/imageGenerator" element={<ImageGenerator />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
