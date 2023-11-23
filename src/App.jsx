import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./components/About";
import Skill from "./components/Skill";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Navibar from "./components/Navibar";
import Mainpage from "./components/Mainpage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navibar />
        <Routes>
          <Route path="/" element={<Mainpage />} />
          <Route path="/about" element={<About />} />
          <Route path="/skill" element={<Skill />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/education" element={<Education />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
