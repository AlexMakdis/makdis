import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Nav from "./components/Nav";
import Home from "./Pages/HomePage";
import About from "./Pages/AboutPage";
import Projects from "./Pages/ProjectsPage";
import Timeline from "./Pages/TimelinePage";

function App() {
  return (
    <Router basename="/">
      <div className="App ">
        <div className="me"></div>
        <Nav />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/timeline" exact element={<Timeline />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
