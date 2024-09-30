import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar"; // Import Navbar component
import Home from "./Home"; // Import Banner component
import About from "./About"; // The new About component
import Contact from "./Contact"; // The new About component
import WhatIDo from "./WhatIDo"; // The new What I Do component
import Resume from "./Resume"; // The new What I Do component
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/WhatIDo" element={<WhatIDo />} />
        <Route path="/Resume" element={<Resume />} />
      </Routes>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Jai Shree Ram This is My First React Work <code>src/App.js</code> and
          save to reload.
        </p>
      </header>
    </div>
  );
}

export default App;
